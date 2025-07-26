import type { GetNotificationModel } from "./GetNotificationModel";

export type GetNotificationsResponse = {
  data: GetNotificationModel[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};