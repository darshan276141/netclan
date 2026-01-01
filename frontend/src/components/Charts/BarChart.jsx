import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const topicMap = {};

  data.forEach((item) => {
    if (!item.topic) return;
    topicMap[item.topic] =
      (topicMap[item.topic] || 0) + (item.intensity || 0);
  });

  const chartData = {
    labels: Object.keys(topicMap),
    datasets: [
      {
        label: "Total Intensity",
        data: Object.values(topicMap)
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        Intensity by Topic
      </h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
