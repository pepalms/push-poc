import { sendPushNotification } from "@/actions/sendPushNotification";

export default function NotificationDetailsForm() {
  return (
    <div className="border p-8 mt-4 shadow-md shadow-[#da4c68] w-fit">
      <h2 className="underline pb-4">Customise notification information</h2>
      <form id="notificationDetails" action={sendPushNotification}>
        <div className="py-2">
          <label htmlFor="pushTitle">Push Title: </label>
          <input
            type="text"
            id="pushTitle"
            name="pushTitle"
            className="border shadow-inner "
          />
        </div>
        <div className="py-2">
          <label htmlFor="pushMessage">Push Message: </label>
          <input
            type="text"
            id="pushMessage"
            name="pushMessage"
            className="border shadow-inner "
          />
        </div>
        <div className="py-2">
          <label htmlFor="pushTag">Push Tag: </label>
          <input
            disabled
            type="text"
            id="pushTag"
            name="pushTag"
            className="border shadow-inner "
          />
        </div>
        <div className="py-2">
          <label htmlFor="pushIcon">Push Icon: </label>
          <select name="icon" id="pushIcon" className="border">
            <option value="beyond.ico">Beyond</option>
            <option value="cat.jpg">Cat</option>
            <option value="goat.png">Goat</option>
            <option value="pizza.jpg">Pizza</option>
          </select>
        </div>
      </form>
    </div>
  );
}
