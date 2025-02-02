import React from "react";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>App Name</h1>
        {/* ...existing code... */}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div style={{ width: "200px", background: "#f4f4f4", padding: "20px" }}>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Dashboard;
