import type { CreateNotificationModel } from "../models/CreateNotificationModel";

export async function createNotification(payload: CreateNotificationModel) {
  console.log(payload);

  const response = await fetch("http://localhost:8080/notifications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.ok
}

export async function getNotificationsPaged() {
  const response = await fetch("http://localhost:8080/notifications", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
