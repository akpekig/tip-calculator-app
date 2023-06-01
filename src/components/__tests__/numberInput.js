/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NumberInput from "../numberInput";

describe("NumberInput", () => {
  it("allows positive numbers", async () => {
    const user = userEvent.setup();
    const value = "55.55";
    render(<NumberInput inputId="test" inputType="text" title="Test" />);
    const input = screen.getByLabelText(/Test/);

    await user.click(input);
    await user.keyboard(value);

    expect(input.value).toBe(value);
  });
  it("prevents word characters", async () => {
    const user = userEvent.setup();
    const value = "a";
    render(<NumberInput inputId="test" inputType="text" title="Test" />);
    const input = screen.getByLabelText(/Test/);

    await user.click(input);
    await user.keyboard(value);

    expect(input.value).toBeFalsy();
  });
  it("prevents multiple decimal characters", async () => {
    const user = userEvent.setup();
    const value = "55.5.";
    const trueValue = "55.5";
    render(<NumberInput inputId="test" inputType="text" title="Test" />);
    const input = screen.getByLabelText(/Test/);

    await user.click(input);
    await user.keyboard(value);

    expect(input.value).toBe(trueValue);
  });
  it("prevent decimals in people field", async () => {
    const user = userEvent.setup();
    const value = "55.5";
    const trueValue = "555";
    render(<NumberInput inputId="people" inputType="text" title="Test" />);
    const input = screen.getByLabelText(/Test/);

    await user.click(input);
    await user.keyboard(value);

    expect(input.value).toBe(trueValue);
  });
});
