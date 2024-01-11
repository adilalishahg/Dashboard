import React from "react";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="flex flex-col py-12 px-14 space-y-4">
      <h2 className="font-bold">Dashboard</h2>
      <div className="flex space-x-8">
        <div className="w-2/5 h-[9.5rem] border  flex flex-col justify-center p-4   text-gray-600">
          <span>Testing</span>
          <span className="text-gray-500">Your Balance : Rs 2000</span>
        </div>
        <div className="w-2/5 h-[9.5rem] border  flex flex-col justify-center p-4   text-gray-600">
          <span>Testing</span>
          <span className="text-gray-500">Your Balance : Rs 2000</span>
        </div>
        <div className="w-2/5 h-[9.5rem] border  flex flex-col justify-center p-4   text-gray-600">
          <span>Testing</span>
          <span className="text-gray-500">Your Balance : Rs 2000</span>
        </div>
      </div>
      <div className="flex flex-col   space-y-4 w-4/5">
        <h2 className="font-bold">Chart</h2>
        <Chart />
        <div className="flex space-x-8">
          <div className="w-2/5 h-[9.5rem] border  flex flex-col justify-center p-4   text-gray-600">
            <span>Testing</span>
            <span className="text-gray-500">Your Balance : Rs 2000</span>
          </div>
          <div className="w-2/5 h-[9.5rem] border  flex flex-col justify-center p-4   text-gray-600">
            <span>Testing</span>
            <span className="text-gray-500">Your Balance : Rs 2000</span>
          </div>
          <div className="w-2/5 h-[9.5rem] border  flex flex-col justify-center p-4   text-gray-600">
            <span>Testing</span>
            <span className="text-gray-500">Your Balance : Rs 2000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
