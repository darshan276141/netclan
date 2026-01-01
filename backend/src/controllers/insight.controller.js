import Insight from "../models/Insight.js";

export const getInsights = async (req, res) => {
  try {
    const {
      topic,
      sector,
      region,
      pestle,
      source,
      country,
      end_year
    } = req.query;

    const query = {};

    if (topic) query.topic = topic;
    if (sector) query.sector = sector;
    if (region) query.region = region;
    if (pestle) query.pestle = pestle;
    if (source) query.source = source;
    if (country) query.country = country;
    if (end_year) query.end_year = Number(end_year);

    const data = await Insight.find(query);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
