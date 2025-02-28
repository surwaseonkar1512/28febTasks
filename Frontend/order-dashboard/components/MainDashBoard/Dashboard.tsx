import Link from "next/link";
import React from "react";
import OrderHeader from "../OrderTabComponents.tsx/OrderHeader";
import OrderMainTab from "../OrderTabComponents.tsx/OrderMainTab";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="w-full">
      <OrderHeader />
      <OrderMainTab />
    </div>
  );
};

export default Dashboard;
