import * as React from "react";

const NumberInput = ({
  Icon,
  inputId,
  inputType,
  inputName,
  title,
  placeholder,
  extraClassName,
}) => (
  <label
    htmlFor={inputId}
    className={`${
      inputType === "text"
        ? "max-w-[87vw] mobile:max-w-full"
        : "w-[calc(50%-1rem)] flex-grow text-center text-neutral-100 text-neutral-300 hover:cursor-pointer desktop:w-[calc(33.34%-1rem)]"
    } relative inline-flex h-fit flex-col flex-nowrap ${extraClassName}`}
  >
    {Icon && (
      <Icon
        className="absolute bottom-0 left-4 h-4 -translate-y-full text-neutral-200"
        aria-hidden="true"
      />
    )}
    <span
      className={`${
        inputType === "text"
          ? "mb-[0.625rem] text-xs text-neutral-500"
          : "pointer-events-none absolute inset-0 translate-y-[15%]"
      }`}
    >
      {title}
    </span>
    <input
      type="text"
      id={inputId}
      name={inputName}
      className="w-full rounded-md bg-neutral-100 py-2 pl-10 pr-4 text-right text-2xl text-neutral-600 placeholder:text-neutral-300 hover:cursor-pointer"
      placeholder={placeholder}
    />
  </label>
);

export default NumberInput;
