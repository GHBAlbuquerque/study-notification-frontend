import { Container } from "../../components/Container";
import CreateNotificationForm from "../../components/CreateNotificationForm";
import { Heading } from "../../components/Heading";

export function CreateNotification() {
  return (
    <Container>
      <Heading>Create Notification</Heading>
      <CreateNotificationForm />
    </Container>
  );
}
