const Filters = ({
  filters,
  setFilters,
  topics,
  regions,
  years
}) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      
      {/* Topic */}
      <select
        className="border p-2 rounded"
        value={filters.topic}
        onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
      >
        <option value="">All Topics</option>
        {topics.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      {/* Region */}
      <select
        className="border p-2 rounded"
        value={filters.region}
        onChange={(e) => setFilters({ ...filters, region: e.target.value })}
      >
        <option value="">All Regions</option>
        {regions.map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      {/* End Year */}
      <select
        className="border p-2 rounded"
        value={filters.end_year}
        onChange={(e) => setFilters({ ...filters, end_year: e.target.value })}
      >
        <option value="">All End Years</option>
        {years.map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

    </div>
  );
};

export default Filters;
