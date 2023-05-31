import * as React from "react";

import Layout from "@components/layout";
import Seo from "@components/seo";
import NumberInput from "@components/numberInput";
import RadioInput from "@components/radioInput";
import Result from "@components/result";

import Person from "@src/images/icon-person.inline.svg";
import Dollar from "@src/images/icon-dollar.inline.svg";

const tips = [5, 10, 15, 25, 50];
const results = [
  {
    title: "Tip Amount",
    value: 0,
  },
  {
    title: "Total",
    value: 0,
  },
];

const IndexPage = () => (
  <Layout>
    <form className="grid w-full gap-8 desktop:grid-cols-2 desktop:grid-rows-5 desktop:pl-5">
      <NumberInput
        Icon={Dollar}
        inputId={"bill"}
        inputType={"text"}
        title={"Bill"}
        placeholder={"0"}
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
            />
          ))}
          <NumberInput
            inputId={"customTip"}
            inputType={"custom"}
            inputName={"tip"}
            title={"Custom"}
          />
        </div>
      </fieldset>
      <NumberInput
        Icon={Person}
        inputId={"people"}
        inputType={"text"}
        title={"Number of People"}
        placeholder={"0"}
        extraClassName={"desktop:mt-8"}
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
          className="w-auto select-none rounded-md bg-primary p-2 text-base uppercase text-neutral-600 hover:bg-secondary disabled:pointer-events-none disabled:text-opacity-50 disabled:opacity-20 desktop:mt-auto"
          aria-label="Reset"
        >
          Reset
        </button>
      </section>
    </form>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
