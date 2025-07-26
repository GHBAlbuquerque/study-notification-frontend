import { MessageCirclePlusIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export default function MainForm() {
  function handleCreateNotification(event: React.FormEvent<HTMLFormElement>) {
    console.log("Create Notification");
    console.log(event);
  }

  return (
    <form onSubmit={handleCreateNotification} className="form" action="">
      <div className="formRow">
        <DefaultInput type="text" placeholder="Title" />
      </div>

      <div className="formRow">
        <DefaultInput type="text" placeholder="Message" />
      </div>

      <div className="formRow">
        <DefaultButton
          type="submit"
          icon={<MessageCirclePlusIcon />}
          color="orange"
          aria-label="Initiate task"
          title="Initiate task"
        >
          Create Notification
        </DefaultButton>
      </div>
    </form>
  );
}
