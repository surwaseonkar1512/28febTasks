"use client";
import React from "react";

const HeaderComponent: React.FC = () => {
  const userName: string = "Onkar Surwase";

  return (
    <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">
        <img
          className="w-[50px] h-[50px]"
          src="https://img.freepik.com/free-vector/abstract-blue-flower-design_1142-206807.jpg?ga=GA1.1.1025254158.1735661044&semt=ais_hybrid"
        />
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[14px] font-medium text-blue-400">
          red@berlyTech
        </span>

        <span className="text-[14px] font-medium text-blue-400">
          Welcome,{userName}
        </span>
      </div>
    </div>
  );
};

export default HeaderComponent;
