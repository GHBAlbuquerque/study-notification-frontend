export default function CreateNotificationForm() {
    function handleCreateNotification() {
        console.log('Create Notification')
    }


    return (
            <form>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Message" />
                <button onClick={handleCreateNotification}>Create Notification</button>
            </form>
    )
}