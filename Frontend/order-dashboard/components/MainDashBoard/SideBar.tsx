"use client";
import React, { useState } from "react";
import { Home, Package, Building, Users, HelpCircle } from "lucide-react";
import Dashboard from "./Dashboard";
import EmptyComponent from "./EmptyComponent";

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState("Orders");

  const menuItems = [
    { id: 1, name: "Dashboard", icon: <Home />, component: "Dashboard" },
    { id: 2, name: "Orders", icon: <Package />, component: "Orders" },
    { id: 3, name: "Companies", icon: <Building />, component: "Companies" },
    { id: 4, name: "Users", icon: <Users />, component: "Users" },
    { id: 5, name: "Help", icon: <HelpCircle />, component: "Help" },
  ];

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-3">
      <div className="bg-white shadow-md w-full transition-all duration-300 p-4 flex flex-row md:flex-col items-center justify-around md:justify-start md:col-span-1">
        <nav className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.component)}
              className={`flex flex-col items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition w-full ${
                activeComponent === item.component && "bg-gray-200"
              }`}
            >
              {item.icon}
              <span className="text-gray-800 font-medium text-[12px]">
                {item.name}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white flex-1 p-6 md:col-span-11">
        {activeComponent === "Dashboard" && <EmptyComponent />}
        {activeComponent === "Orders" && <Dashboard />}
        {activeComponent === "Companies" && <EmptyComponent />}
        {activeComponent === "Users" && <EmptyComponent />}
        {activeComponent === "Help" && <EmptyComponent />}
      </div>
    </div>
  );
};

export default Sidebar;
