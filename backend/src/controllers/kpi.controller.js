import Insight from "../models/Insight.js";

export const getKPIs = async (req, res) => {
  try {
    const total = await Insight.countDocuments();

    const stats = await Insight.aggregate([
      {
        $group: {
          _id: null,
          avgIntensity: { $avg: "$intensity" },
          avgLikelihood: { $avg: "$likelihood" },
          avgRelevance: { $avg: "$relevance" }
        }
      }
    ]);

    res.json({
      totalInsights: total,
      avgIntensity: Math.round(stats[0]?.avgIntensity || 0),
      avgLikelihood: Math.round(stats[0]?.avgLikelihood || 0),
      avgRelevance: Math.round(stats[0]?.avgRelevance || 0)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
