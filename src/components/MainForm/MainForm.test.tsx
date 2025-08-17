import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from "vitest";
import MainForm from ".";
import * as notificationService from "../../api/notificationService";
import { toast } from "react-toastify";

vi.mock("../../api/notificationService");
vi.mock("react-toastify");

describe("MainForm", () => {
  test("renders all fields and buttons", () => {
    render(<MainForm />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("calls CreateNotification and shows sucess toast", async () => {
    // create mocks
    const mockCreate = vi.spyOn(notificationService, 'createNotification').mockResolvedValue(undefined);
    const mockToast = vi.spyOn(toast, 'success');

    // render component
    render(<MainForm />);

    // select
    const select = screen.getByRole('combobox');
    await userEvent.selectOptions(select, 'MOVIES')

    // fill textArea
    const textarea = screen.getByPlaceholderText("Message")
    await userEvent.type(textarea, "Movie notification!")

    // click button
    const button = screen.getByRole('button', {name: /create notification/i}); 
    await userEvent.click(button)

    expect(mockCreate).toHaveBeenCalledWith({category:"MOVIES", message:"Movie notification!"});
    expect(mockToast).toHaveBeenCalledWith("Notification created!");
  });

  test("shows error toast if API call fails", async () => {
        // create mocks
    const mockCreate = vi.spyOn(notificationService, 'createNotification').mockRejectedValue(new Error("fail"));
    const mockToast = vi.spyOn(toast, 'error');

    // render component
    render(<MainForm />);

    // select
    const select = screen.getByRole('combobox');
    await userEvent.selectOptions(select, 'MOVIES')

    // fill textArea
    const textarea = screen.getByPlaceholderText("Message")
    await userEvent.type(textarea, "Movie notification!")

    // click button
    const button = screen.getByRole('button', {name: /create notification/i}); 
    await userEvent.click(button)

    expect(mockCreate).toHaveBeenCalled();
    expect(mockToast).toHaveBeenCalledWith("Failed to create notification");
  });
});
