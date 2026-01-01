import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const fetchInsights = (params) =>
  API.get("/insights", { params });

export const fetchKPIs = () =>
  API.get("/kpis");
