import { Container } from "../../components/Container";
import MainForm from "../../components/MainForm";
import { Heading } from "../../components/Heading";
import { useEffect } from "react";
import Header from "../../components/Header";

export function CreateNotification() {
  useEffect(() => {
    document.title = "Gila - Create Notification";
  }, []);

  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <Heading>Create Notification</Heading>
      </Container>

      <Container>
        <MainForm />
      </Container>
    </>
  );
}
