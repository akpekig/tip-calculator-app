import * as React from "react";

const Result = ({ title, value }) => {
  return (
    <article className="flex flex-row flex-nowrap items-center justify-between">
      <h1
        className="text-xs text-neutral-100"
        aria-label={`${title} per person`}
      >
        {title}
        <br />
        <span className="text-[0.625rem] leading-5 text-neutral-500">
          / person
        </span>
      </h1>
      <p className="max-w-[75%] break-words text-right text-2xl text-primary desktop:text-4xl desktop:leading-8">
        {isNaN(value) ? value : `$${parseFloat(value).toFixed(2)}`}
      </p>
    </article>
  );
};

export default Result;
