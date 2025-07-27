import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import styles from "./styles.module.css";
import { DefaultButton } from "../../components/DefaultButton";
import { LucideArrowLeft, LucideArrowRight, RefreshCcw } from "lucide-react";
import { toast } from "react-toastify";
import {
  emptyPagedResponse,
  type GetNotificationsPagedResponse,
} from "../../models/GetNotificationsPagedResponse";
import { getNotificationsPaged } from "../../api/notificationService";

export function ListNotifications() {
  useEffect(() => {
    document.title = "Gila - List Notifications";
  }, []);

  const [notifications, setNotifications] =
    useState<GetNotificationsPagedResponse>(emptyPagedResponse);

  useEffect(() => {
    async function loadNotifications() {
      const result = await fetchNotificationsPaged(0, 10);
      setNotifications(result);
    }

    loadNotifications();
  }, []);

  async function fetchNotificationsPaged(
    page: number,
    size: number
  ): Promise<GetNotificationsPagedResponse> {
    try {
      const result = await getNotificationsPaged(page, size);
      console.log("Data:", result.data);
      return result;
    } catch (err) {
      console.error(err);
      toast.error("Failed to get notifications");
      return emptyPagedResponse;
    }
  }

  return (
    <>
      <Container>
        <Heading>List Notifications</Heading>
      </Container>

      <Container>
        <div className={styles.notificationsTable}>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>user id</th>
                <th>category</th>
                <th>channel</th>
                <th>message</th>
                <th>timestamp</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {notifications.data.map((notification) => {
                return (
                  <tr key={notification.id}>
                    <td>{notification.id}</td>
                    <td>{notification.userId}</td>
                    <td>{notification.category}</td>
                    <td>{notification.channel}</td>
                    <td>{notification.message}</td>
                    <td>{notification.timestamp}</td>
                    <td>{notification.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>

      <Container>
        <div className={styles.buttonContainer}>
          <DefaultButton
            icon={<LucideArrowLeft />}
            color="orange"
            title="Previous"
            aria-label="Previous"
          />
          <DefaultButton
            icon={<LucideArrowRight />}
            color="orange"
            title="Next"
            aria-label="Next"
          />
          <DefaultButton
            icon={<RefreshCcw />}
            color="gray"
            title="Next"
            aria-label="Next"
          />
        </div>
      </Container>
    </>
  );
}
