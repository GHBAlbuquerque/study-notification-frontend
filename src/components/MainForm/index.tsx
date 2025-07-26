import { MessageCirclePlusIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import DefaultTextArea from "../DefaultTextArea";
import { DefaultSelect } from "../DefaultSelect";
import { createNotification } from "../../api/notificationService";

export default function MainForm() {

    async function handleCreateNotification(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const category = formData.get("category") as string;
  const message = formData.get("message") as string;

  try {
    await createNotification({ category, message });
    alert("Notification created!"); //TODO
  } catch (err) {
    console.error(err);
    alert("Failed to create notification"); //TODO
  }
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
