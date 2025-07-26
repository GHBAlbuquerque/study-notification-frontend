import { useEffect } from "react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export function ListNotifications() {
  useEffect(() => {
    document.title = 'Gila - List Notifications';
  }, []);

  return (
    <Container>
      <Heading>List Notifications</Heading>
    </Container>
  );
}
