import type { CreateNotificationModel } from "../models/CreateNotificationModel";

const backendUrl = import.meta.env.VITE_BACKEND_NOTIFICATION_URL;
const backendEndpoint = import.meta.env.VITE_BACKEND_NOTIFICATION_ENDPOINT;

export async function createNotification(payload: CreateNotificationModel) {
  console.log(payload);

  const response = await fetch(`${backendUrl}${backendEndpoint}`, {
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

export async function getNotificationsPaged(page: number = 0, size: number = 10) {
  console.log(`${backendUrl}${backendEndpoint}`);
  const response = await fetch(`${backendUrl}${backendEndpoint}?page=${page}&size=${size}`, {
    method: "GET",
    
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
