import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { ListNotifications } from ".";
import * as notificationService from "../../api/notificationService";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { emptyPagedResponse } from "../../models/GetNotificationsPagedResponse";

let queryClient = new QueryClient();

vi.mock("../../api/notificationService");
vi.mock("react-toastify");

describe("ListNotifications", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    
  })});
  
  test("renders all elements in the page when there are notification", async () => {
    const mockData = {
      data: [
        {
          id: 1,
          userId: "u1",
          category: "MOVIES",
          channel: "EMAIL",
          message: "Hello",
          timestamp: "2025-08-17",
          status: "NEW",
        },
      ],
      totalPages: 1,
      size: 1,
    };

    vi.spyOn(notificationService, "getNotificationsPaged").mockResolvedValue(
      mockData
    );

    render(
      <QueryClientProvider client={queryClient}>
        <ListNotifications />
      </QueryClientProvider>
    );

    // await for table
    const table = await screen.findByRole("table");
    expect(table).toBeInTheDocument();

    // check other elements
    const previousButton = await screen.findByTitle(/previous/i);
    const nextButton = await screen.findByTitle(/next/i);

    expect(screen.getByText("List Notifications")).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
    expect(screen.getByTitle(/refresh/i)).toBeInTheDocument();
  });
  

  test("renders message when there are no notifications", async () => {
    vi.spyOn(notificationService, "getNotificationsPaged").mockResolvedValue(
      emptyPagedResponse
    );

    render(
      <QueryClientProvider client={queryClient}>
        <ListNotifications />
      </QueryClientProvider>
    );

    // check elements
    expect(screen.getByText("List Notifications")).toBeInTheDocument();
    expect(screen.getByText("Nothing to show here.")).toBeInTheDocument();
  });

  test("shows error if there is a problem calling the API", async () => {
    vi.spyOn(notificationService, "getNotificationsPaged").mockRejectedValue(new Error("failed to get"));
    const mockToast = vi.spyOn(toast, "error");

    render(
      <QueryClientProvider client={queryClient}>
        <ListNotifications />
      </QueryClientProvider>
    );

    // check elements
    await screen.findByText("Nothing to show here.");

    expect(screen.getByText("List Notifications")).toBeInTheDocument();
    expect(screen.getByText("Nothing to show here.")).toBeInTheDocument();
    expect(mockToast).toHaveBeenCalledWith("Failed to fetch notifications");
  });
});
