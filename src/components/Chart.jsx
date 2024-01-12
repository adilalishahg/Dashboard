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
import { useTheme } from "./ThemeContext";

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
// rgb(154 247 161 / var(--tw-bg-opacity))
const dataSet =
  "2000,3000,4000,8000,9000,10000,5000,6000,7000,11000,12000,13000";

const Chart = () => {
  const { isDarkTheme } = useTheme();
  const data = {
    labels,
    datasets: [
      {
        label: "Trips",
        data: dataSet.split(",").map(Number),
        borderColor: isDarkTheme ? "rgb(154, 247, 161)" : "rgb(255, 99, 132)",
        backgroundColor: "rgba (134, 227, 141)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};
export default Chart;
