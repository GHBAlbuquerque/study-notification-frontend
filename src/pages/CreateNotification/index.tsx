import { Container } from "../../components/Container";
import MainForm from "../../components/MainForm";
import { Heading } from "../../components/Heading";

export function CreateNotification() {
  return (
    <>
      <Container>
        <Heading>Create Notification</Heading>
      </Container>

      <Container>
        <MainForm />
      </Container>
    </>
  );
}
