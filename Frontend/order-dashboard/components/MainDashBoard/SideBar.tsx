"use client";
import { useState } from "react";
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
    <div className=" grid grid-cols-12 gap-3">
      <div className="bg-white shadow-md h-screen w-full transition-all duration-300 p-4 flex flex-col col-span-1">
        <nav className="flex-1 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.component)}
              className="flex flex-col items-center gap-4 p-3 rounded-md hover:bg-gray-200 transition w-full"
            >
              {item.icon}
              <span className="text-gray-800 font-medium text-[12px]">
                {item.name}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white flex-1 p-6 col-span-11">
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
