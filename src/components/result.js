import * as React from "react";

const Result = ({ title, value }) => (
  <article className="flex flex-row flex-nowrap items-center justify-between">
    <h1 className="text-xs text-neutral-100" aria-label={`${title} per person`}>
      {title}
      <br />
      <span className="text-[0.625rem] leading-5 text-neutral-500">
        / person
      </span>
    </h1>
    <p className="text-2xl text-primary desktop:text-4xl">
      ${value.toFixed(2)}
    </p>
  </article>
);

export default Result;
