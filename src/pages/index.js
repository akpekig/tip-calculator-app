import * as React from "react";

import Layout from "@components/layout";
import Seo from "@components/seo";
import NumberInput from "@components/numberInput";
import RadioInput from "@components/radioInput";
import Result from "@components/result";

import Person from "@src/images/icon-person.inline.svg";
import Dollar from "@src/images/icon-dollar.inline.svg";

const IndexPage = () => {
  const [bill, setBill] = React.useState(0);
  const [tip, setTip] = React.useState(0);
  const [people, setPeople] = React.useState(0);
  const [tipResult, setTipResult] = React.useState(0);
  const [totalResult, setTotalResult] = React.useState(0);
  const [error, setError] = React.useState();
  const formRef = React.useRef();
  const tips = [5, 10, 15, 25, 50];
  const results = [
    {
      title: "Tip Amount",
      value: tipResult,
    },
    {
      title: "Total",
      value: totalResult,
    },
  ];
  const handleInput = (event, fn, value, errorMessage) => {
    if (errorMessage && parseInt(event.target.value) === 0) {
      setError(errorMessage);
      return false;
    } else if (error) {
      setError(false);
    } else if (!isNaN(event.target.value)) {
      fn(event.target.value);
    } else {
      event.target.value = value;
    }
  };
  const handleClick = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
    setTipResult(0);
    setTotalResult(0);
    formRef.current.reset();
  };
  React.useEffect(() => {
    /**
     * Calculate total and tips per person.
     */
    if (people > 0 && bill > 0) {
      const perPerson = bill / people;
      if (perPerson > Number.MAX_SAFE_INTEGER) {
        setTotalResult("Too large!");
        setTipResult("Too large!");
      } else {
        setTotalResult(perPerson);
        if (tip > 0 && tip <= 100) {
          setTipResult((tip / 100) * perPerson);
        }
      }
    }
  }, [bill, tip, people]);
  return (
    <Layout>
      <form
        className="grid w-full gap-8 desktop:grid-cols-2 desktop:grid-rows-5 desktop:pl-5 desktop:[&>fieldset+label]:mt-8"
        ref={formRef}
      >
        <NumberInput
          Icon={Dollar}
          inputId={"bill"}
          inputType={"text"}
          title={"Bill"}
          placeholder={"0"}
          fn={e => handleInput(e, setBill, bill)}
        />
        <fieldset className="inline-flex h-fit flex-col flex-nowrap desktop:row-start-2 desktop:row-end-4 desktop:mt-4">
          <legend className="text-xs text-neutral-500">Select Tip %</legend>
          <div className="my-[0.625rem] inline-flex w-full flex-wrap gap-4 text-neutral-100 desktop:my-3">
            {tips.map((item, index) => (
              <RadioInput
                key={`tip${item}`}
                inputId={`tip${index}`}
                inputName={"tip"}
                value={item}
                fn={e => handleInput(e, setTip, tip)}
              />
            ))}
            <NumberInput
              inputId={"customTip"}
              inputType={"custom"}
              inputName={"tip"}
              title={"Custom"}
              fn={e => handleInput(e, setTip, tip)}
            />
          </div>
        </fieldset>
        <NumberInput
          Icon={Person}
          inputId={"people"}
          inputType={"text"}
          title={"Number of People"}
          placeholder={"0"}
          error={error}
          fn={e => handleInput(e, setPeople, people, "Can't be zero")}
        />
        <section
          className="flex flex-col flex-nowrap justify-evenly gap-7 rounded-2xl bg-neutral-600 px-10 py-10 desktop:col-start-2 desktop:row-span-full desktop:gap-10"
          aria-label="Result"
        >
          {results.map((item, index) => (
            <Result
              key={`result${index}`}
              title={item.title}
              value={item.value}
            />
          ))}
          <button
            type="reset"
            className="w-auto select-none rounded-md bg-primary p-2 text-base uppercase text-neutral-600 duration-300 ease-in-out hover:bg-secondary disabled:pointer-events-none disabled:text-opacity-50 disabled:opacity-20 desktop:mt-auto"
            disabled={!(bill || tip || people)}
            aria-label="Reset"
            onClick={handleClick}
          >
            Reset
          </button>
        </section>
      </form>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
