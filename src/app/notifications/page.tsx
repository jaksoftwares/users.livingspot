"use client";

const notifications = [
  { message: "New tenant inquiry for Apartment 101.", date: "Feb 22, 2025" },
  { message: "Your property listing has been approved!", date: "Feb 20, 2025" },
];

const NotificationsPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">🔔 Notifications</h1>
      <div className="mt-4 space-y-3">
        {notifications.map(({ message, date }, index) => (
          <div key={index} className="p-3 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-800">{message}</p>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
