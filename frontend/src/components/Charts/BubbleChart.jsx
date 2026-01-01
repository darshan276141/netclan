import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const BubbleChart = ({ data }) => {
  // Group data by sector
  const sectorMap = {};

  data.forEach((item) => {
    if (!item.sector) return;

    if (!sectorMap[item.sector]) {
      sectorMap[item.sector] = [];
    }

    sectorMap[item.sector].push({
      x: item.likelihood || 0,
      y: item.relevance || 0,
      r: Math.max((item.intensity || 5) / 5, 5)
    });
  });

  const datasets = Object.keys(sectorMap).map((sector) => ({
    label: sector,
    data: sectorMap[sector]
  }));

  const chartData = { datasets };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `Likelihood: ${ctx.raw.x}, Relevance: ${ctx.raw.y}, Intensity: ${ctx.raw.r * 5}`
        }
      }
    },
    scales: {
      x: {
        title: { display: true, text: "Likelihood" }
      },
      y: {
        title: { display: true, text: "Relevance" }
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Likelihood vs Relevance (Bubble size = Intensity)
      </h2>
      <Bubble data={chartData} options={options} />
    </div>
  );
};

export default BubbleChart;
