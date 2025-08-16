import { useEffect, useMemo, useState } from "react";
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
import { DefaultSelect } from "../../components/DefaultSelect";

export function ListNotifications() {
  useEffect(() => {
    document.title = "Study - List Notifications";
  }, []);

  const [page, setPage] = useState<number>(0);
  const size = 10;

  const { data: notifications = emptyPagedResponse, isLoading, error, refetch} = useQuery<GetNotificationsPagedResponse>({
    queryKey: [ "notifications", page],
    queryFn: () => fetchNotificationsPaged(page, size),
    placeholderData: keepPreviousData,
    staleTime: 1000
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

  const [selected, setSelected] = useState("");

  const filteredList =  useMemo(() => {
      if(!selected) {
        return notifications.data
      }

      return notifications.data.filter(
        (notification) => notification.category === selected
      );
    }, [notifications.data, selected]);

  function handleFiltering(e: React.ChangeEvent<HTMLSelectElement>){
      const selected = e.target.value;
      setSelected(selected)
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

      <div className="formRow">
        <DefaultSelect name="category" defaultValue="" required onChange={e => handleFiltering(e)}>
          <option value="" disabled>
            Select category
          </option>
          <option value="">All</option>
          <option value="MOVIES">Movies</option>
          <option value="FINANCE">Finance</option>
          <option value="SPORTS">Sports</option>
        </DefaultSelect>
      </div>

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
              {filteredList.map((notification) => {
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
            onClick={handlePrevious}
            disabled={!hasPrevious()}
          />
          <DefaultButton
            icon={<LucideArrowRight />}
            color="orange"
            title="Next"
            aria-label="Next"
            onClick={handleNext}
            disabled={!hasNext()}
          />
          <DefaultButton
            icon={<RefreshCcw />}
            color="gray"
            title="Next"
            aria-label="Next"
            onClick={() => refetch()}
            disabled={isLoading}
          />
        </div>
      </Container>
    </>
  );
}
