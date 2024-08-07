import { FaPlus } from "react-icons/fa6";
import Stats from "./Stats";

export default function DashboardTop() {
  return (
    <div>
      <div className="text-gray-800 dark:text-white flex justify-between items-center pb-3">
        <h1 className="font-jost text-2xl font-normal">Dashboard</h1>
        <button className="py-3 px-4 flex items-center gap-[10px] bg-blue-600 dark:bg-[#246AEE] text-white">
          <FaPlus className="size-6" />
          <span className="text-sm font-bold">Create DAO</span>
        </button>
      </div>
      <Stats />
    </div>
  );
}
