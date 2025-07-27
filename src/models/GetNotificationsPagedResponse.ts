import type { GetNotificationModel } from "./GetNotificationModel";

export type GetNotificationsPagedResponse = {
  data: GetNotificationModel[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export const emptyPagedResponse: GetNotificationsPagedResponse = {
  data: [],
  page: 0,
  size: 0,
  totalElements: 0,
  totalPages: 0,
};