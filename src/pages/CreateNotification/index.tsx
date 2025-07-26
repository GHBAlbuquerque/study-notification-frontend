import { Container } from "../../components/Container";
import MainForm from "../../components/MainForm";
import { Heading } from "../../components/Heading";
import { useEffect } from "react";

export function CreateNotification() {
  useEffect(() => {
    document.title = 'Gila - Create Notification';
  }, []);

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
