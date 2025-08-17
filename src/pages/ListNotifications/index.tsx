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
import Header from "../../components/Header";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function ListNotifications() {
  useEffect(() => {
    document.title = "Study - List Notifications";
  }, []);

  const [page, setPage] = useState<number>(0);
  const size = 10;

  const {
    data: notifications = emptyPagedResponse,
    isLoading,
    error,
    refetch,
  } = useQuery<GetNotificationsPagedResponse>({
    queryKey: ["notifications", page],
    queryFn: () => fetchNotificationsPaged(page, size),
    placeholderData: keepPreviousData,
    staleTime: 1000,
  });

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch notifications - query error");
      console.error(error);
    }
  }, [error]);

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
      toast.error("Failed to fetch notifications");
      return emptyPagedResponse;
    }
  }

  function handleNext() {
    if (page + 1 < notifications.totalPages) {
      setPage((previous) => previous + 1);
    }
  }

  function handlePrevious() {
    if (page - 1 >= 0) {
      console.log(page - 1);
      setPage((previous) => previous - 1);
    }
  }

  function hasNext() {
    return page + 1 < notifications.totalPages;
  }

  function hasPrevious() {
    return page > 0;
  }

  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <Heading>List Notifications</Heading>
      </Container>
      {notifications.data.length > 0 ? (
        <>
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
                color="primary"
                title="Previous"
                aria-label="Previous"
                onClick={handlePrevious}
                disabled={!hasPrevious()}
              />
              <DefaultButton
                icon={<LucideArrowRight />}
                color="primary"
                title="Next"
                aria-label="Next"
                onClick={handleNext}
                disabled={!hasNext()}
              />
              <DefaultButton
                icon={<RefreshCcw />}
                color="ghost"
                title="Refresh"
                aria-label="Refresh"
                onClick={() => refetch()}
                disabled={isLoading}
              />
            </div>
          </Container>{" "}
        </>
      ) : (
        <Container>
          <div>
            <span>Nothing to show here.</span>
          </div>
        </Container>
      )}
    </>
  );
}
