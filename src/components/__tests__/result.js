/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render, screen } from "@testing-library/react";

import Result from "../result";

describe("Result", () => {
  it("formats value as currency", () => {
    const value = "55.554534334";
    const formattedValue = "$55.55";
    render(<Result title="Test" value={value} />);

    expect(screen.getByText(formattedValue)).toBeInTheDocument();
  });
  it("displays error message without formatting", () => {
    const value = "Error message";
    render(<Result title="Test" value={value} />);

    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
