import { useEffect, useState } from "react";
import { fetchKPIs } from "../api/api";

// ✅ Card component OUTSIDE render
const Card = ({ title, value }) => (
  <div className="bg-white shadow rounded p-4 text-center">
    <h3 className="text-gray-500">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const KPICards = () => {
  const [kpis, setKpis] = useState(null);

  useEffect(() => {
    fetchKPIs().then((res) => setKpis(res.data));
  }, []);

  if (!kpis) return <p>Loading KPIs...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card title="Total Insights" value={kpis.totalInsights} />
      <Card title="Avg Intensity" value={kpis.avgIntensity} />
      <Card title="Avg Likelihood" value={kpis.avgLikelihood} />
      <Card title="Avg Relevance" value={kpis.avgRelevance} />
    </div>
  );
};

export default KPICards;
