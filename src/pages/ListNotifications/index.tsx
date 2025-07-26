import { useEffect } from "react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import styles from "./styles.module.css";
import type { GetNotificationModel } from "../../models/GetNotificationModel";
import { DefaultButton } from "../../components/DefaultButton";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";

export function ListNotifications() {
  useEffect(() => {
    document.title = "Gila - List Notifications";
  }, []);

  const notifications = new Array<GetNotificationModel>();

  notifications.push({
    id: 1,
    userId: 42,
    category: "MOVIES",
    channel: "EMAIL",
    message: "Test notification",
    timestamp: "2025-07-26T15:30:00Z",
    status: "SENT",
  });

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
              {notifications.map((notification) => {
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
        </div>
      </Container>
    </>
  );
}
