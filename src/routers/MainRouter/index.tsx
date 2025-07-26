import { BrowserRouter, Route, Routes } from "react-router";
import { CreateNotification } from "../../pages/CreateNotification";
import { ListNotification } from "../../pages/ListNotifications";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateNotification />} />
        <Route path='/notifications' element={<ListNotification />} />
      </Routes>
    </BrowserRouter>
  );
}