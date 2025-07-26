import { MessageCirclePlusIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import DefaultTextArea from "../DefaultTextArea";
import { DefaultSelect } from "../DefaultSelect";

export default function MainForm() {
  function handleCreateNotification(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Create Notification");
    console.log(event);
  }

  return (
    <form onSubmit={handleCreateNotification} className="form" action="">
      <div className="formRow">
        <DefaultSelect name= "category" defaultValue="">
          <option value="" disabled>Select category</option>
          <option value="MOVIES">Movies</option>
          <option value="FINANCE">Finance</option>
          <option value="SPORTS">Sports</option> 
    </DefaultSelect>
      </div>

      <div className="formRow">
        <DefaultTextArea name= "message" placeholder="Message" maxLength={280}/>
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
