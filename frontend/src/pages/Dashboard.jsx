import { useEffect, useState } from "react";
import KPICards from "../components/KPICards";
import Filters from "../components/Filters";
import BarChart from "../components/Charts/BarChart";
import { fetchInsights } from "../api/api";
import BubbleChart from "../components/Charts/BubbleChart";
import PestleChart from "../components/Charts/PestleChart";
import Table from "../components/Table";

const Dashboard = () => {
  const [filters, setFilters] = useState({
    topic: "",
    region: "",
    end_year: ""
  });
  const [regions, setRegions] = useState([]);
  const [years, setYears] = useState([]);
  const [topics, setTopics] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchInsights(filters).then((res) => {
      const resData = res?.data || [];
      setData(resData);

      setTopics([...new Set(resData.map(d => d.topic).filter(Boolean))]);
      setRegions([...new Set(resData.map(d => d.region).filter(Boolean))]);
      setYears([...new Set(resData.map(d => d.end_year).filter(Boolean))]);
    }).catch((err) => {
      // handle error if needed
      console.error("Failed to fetch insights:", err);
      setData([]);
      setTopics([]);
      setRegions([]);
      setYears([]);
    });
  }, [filters]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Blackcoffer Insights Dashboard
      </h1>

      <KPICards />

      <Filters
        filters={filters}
        setFilters={setFilters}
        topics={topics}
        regions={regions}
        years={years}
      />

      <BarChart data={data} />
      <BubbleChart data={data} />
      <PestleChart data={data} />
      <Table data={data} />
    </div>
  );
};

export default Dashboard;
