import React from "react";
import DashboardTop from "./DashboardTop";
import Daos from "./Daos";

export default function Dashboard() {
  return (
    <div className="w-full pt-[2.7%] px-[2.7%]">
      <DashboardTop />
      <div className="h-[1px] w-full my-8 bg-[rgba(255,255,255,0.05)]"></div>
      <Daos />
    </div>
  );
}