import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Your Trips",
    },
  },
};

const labels = [
  "Jan",
  "Febr",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const dataSet =
  "2000,3000,4000,8000,9000,10000,5000,6000,7000,11000,12000,13000";
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: dataSet.split(",").map(Number),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Chart = () => {
  return <Line options={options} data={data} />;
};
export default Chart;
