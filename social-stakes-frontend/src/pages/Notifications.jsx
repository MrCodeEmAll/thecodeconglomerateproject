import { useState } from "react";

const Notifications = () => {
  const [notifications] = useState([
    { id: 1, type: "bet", message: "Your bet against Alex was accepted!", time: "5m ago" },
    { id: 2, type: "friend", message: "John Doe sent you a friend request.", time: "10m ago" },
    { id: 3, type: "community", message: "New trending bet in 'High Roller Club'!", time: "30m ago" },
    { id: 4, type: "verification", message: "Sarah submitted evidence for a disputed bet.", time: "1h ago" },
    { id: 5, type: "auth", message: "New login detected from a different device.", time: "3h ago" },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li key={notif.id} className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between">
              <span>{notif.message}</span>
              <span className="text-sm text-gray-500">{notif.time}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No new notifications</p>
      )}
    </div>
  );
};

export default Notifications;
