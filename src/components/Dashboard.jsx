import { NavLink } from "react-router-dom";
import Card from "./Card";
import Chart from "./Chart";
import { LayoutDashboard, Cross, Car } from "lucide-react";

const cardData = [
  { name: "Testing", value: "Your Balance : Rs 2000" },
  { name: "Testing", value: "Your Balance : Rs 2000" },
  { name: "Testing", value: "Your Balance : Rs 2000" },
];
const cardData2 = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Trip", icon: Cross, path: "/trip" },
  { name: "Trips", icon: Car, path: "/trips" },
];
const Dashboard = () => {
  return (
    <>
      <h2 className="font-bold">Dashboard</h2>
      <div className="flex space-x-8">
        {cardData2 &&
          cardData2.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={
                "w-2/5 h-[9.5rem] border  flex flex-col justify-center p-4"
              }
            >
              <Card data={item} />
            </NavLink>
          ))}
      </div>
      <div className="flex flex-col w-4/5 space-y-4">
        <h2 className="font-bold">Chart</h2>
        <Chart />
        <div className="flex space-x-8">
          {cardData &&
            cardData.map((item, index) => <Card key={index} data={item} />)}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
