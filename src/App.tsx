import "./styles/theme.css";
import "./styles/global.css";
import { MainRouter } from "./routers/MainRouter";
import { MessagesContainer } from "./components/MessagesContainer";

export default function App() {
  return (
    <MessagesContainer>
      <MainRouter />
    </MessagesContainer>
  );
}
