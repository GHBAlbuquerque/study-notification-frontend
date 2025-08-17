import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { DefaultInput } from ".";

const testId = "test-id";

describe("DefaultInput", () => {
  test("renders input with no label", () => {
    render(<DefaultInput data-testid={testId} />);
    const defaultInput = screen.getByTestId(testId);

    expect(defaultInput).toBeInTheDocument();
  });

  test("renders input with label", () => {
    render(<DefaultInput data-testid={testId} labelText="myLabel" />);
    const defaultInput = screen.getByTestId(testId);
    const defaultLabel = screen.getByText("myLabel");

    expect(defaultInput).toBeInTheDocument();
    expect(defaultLabel).toBeInTheDocument();
  });
});
