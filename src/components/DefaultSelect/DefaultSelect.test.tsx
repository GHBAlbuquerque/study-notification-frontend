import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { DefaultSelect } from ".";

const testId = "test-id";

describe("DefaultInput", () => {
  test("renders select with no label", () => {
    render(<DefaultSelect data-testid={testId} />);
    const defaultSelect = screen.getByTestId(testId);

    expect(defaultSelect).toBeInTheDocument();
  });

  test("renders select with label", () => {
    render(<DefaultSelect data-testid={testId} labelText="myLabel" />);
    const defaultSelect = screen.getByTestId(testId);
    const defaultLabel = screen.getByText("myLabel");

    expect(defaultSelect).toBeInTheDocument();
    expect(defaultLabel).toBeInTheDocument();
  });
});
