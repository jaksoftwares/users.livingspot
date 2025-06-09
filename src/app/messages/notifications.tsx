"use client";

const notifications = [
  { id: 1, tenant: "Alice Johnson", message: "Is the house still available?", unread: true },
  { id: 2, tenant: "Sarah Lee", message: "Can I view the house this weekend?", unread: true },
];

const NotificationsPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">🔔 Notifications</h1>
      <p className="text-gray-600 mt-2">Unread messages from tenants.</p>

      <div className="mt-6 space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="font-semibold">{notification.tenant}</p>
            <p className="text-gray-600 text-sm">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
