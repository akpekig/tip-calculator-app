import * as React from "react";

const NumberInput = ({
  Icon,
  inputId,
  inputType,
  inputName,
  title,
  placeholder,
  integer,
  extraClassName,
}) => {
  const [error, setError] = React.useState(false);
  const [labelClass, setLabelClass] = React.useState("");
  const handleKey = e => {
    const regex = integer ? new RegExp(/[\d]/g) : new RegExp(/[\d\.]/g);
    if (
      (e.key && !e.key.match(regex)) ||
      (e.target.value.includes(".") && e.key === ".") ||
      (e.target.value.match(/\.(\d{2})/) && e.key.match(regex))
    ) {
      e.preventDefault();
    }
  };
  const handleInput = e => {
    if (integer) {
      if (e.target.value == 0) {
        setError(true);
      } else if (error) {
        setError(false);
      }
    }
  };
  return (
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
        } ${error ? "inline-flex" : ""} ${labelClass}`}
      >
        {title}
        {error && <span className="ml-auto text-error">Can't be zero</span>}
      </span>
      <input
        type="text"
        id={inputId}
        name={inputName}
        className={`w-full rounded-md bg-neutral-100 py-2 pl-10 pr-4 text-right text-2xl text-neutral-600 placeholder:text-neutral-300 hover:cursor-pointer ${
          error ? "focus:outline-error focus-visible:outline-error" : ""
        }`}
        placeholder={placeholder}
        onKeyPress={handleKey}
        onInput={handleInput}
        onFocus={() => inputType === "custom" && setLabelClass("hidden")}
      />
    </label>
  );
};

export default NumberInput;
