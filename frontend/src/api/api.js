import axios from "axios";

const API = axios.create({
  baseURL: "https://netclan-76u1.onrender.com/api"
});

export const fetchInsights = (params) =>
  API.get("/insights", { params });

export const fetchKPIs = () =>
  API.get("/kpis");
