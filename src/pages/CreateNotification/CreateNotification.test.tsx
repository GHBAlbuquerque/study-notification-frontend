import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CreateNotification } from ".";

describe("CreateNotification", () => {
  test("renders all fields and buttons", () => {
    render(<CreateNotification/>);

    expect(screen.getByText("Create Notification")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
})
