import * as React from "react";

const RadioInput = ({ inputId, inputName, value, fn }) => (
  <label
    htmlFor={inputId}
    className="relative inline-flex h-fit w-[calc(50%-1rem)] flex-grow flex-col flex-nowrap text-center text-neutral-100 hover:cursor-pointer hover:text-neutral-600 desktop:w-[calc(33.34%-1rem)]"
  >
    <span className="pointer-events-none absolute inset-0 translate-y-[15%]">
      {value}%
    </span>
    <input
      type="radio"
      id={inputId}
      name={inputName}
      className="h-full appearance-none rounded-md bg-neutral-600 py-2 py-6 pl-10 pr-4 text-2xl duration-300 ease-in-out checked:bg-primary hover:cursor-pointer hover:bg-secondary"
      value={value}
      onInput={fn}
    />
  </label>
);

export default RadioInput;
