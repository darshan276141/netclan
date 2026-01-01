import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PestleChart = ({ data }) => {
  const map = {};

  data.forEach(d => {
    if (!d.pestle) return;
    map[d.pestle] = (map[d.pestle] || 0) + 1;
  });

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">
        PESTLE Distribution
      </h2>
      <Doughnut
        data={{
          labels: Object.keys(map),
          datasets: [{ data: Object.values(map) }]
        }}
      />
    </div>
  );
};

export default PestleChart;
