const Table = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow mt-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">
        Insights
      </h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Title</th>
            <th className="p-2">Topic</th>
            <th className="p-2">Region</th>
            <th className="p-2">Intensity</th>
            <th className="p-2">Likelihood</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 20).map((d, i) => (
            <tr key={i} className="border-b hover:bg-gray-100">
              <td className="p-2 text-blue-600">
                <a href={d.url} target="_blank">
                  {d.title}
                </a>
              </td>
              <td className="p-2 text-center">{d.topic}</td>
              <td className="p-2 text-center">{d.region}</td>
              <td className="p-2 text-center">{d.intensity}</td>
              <td className="p-2 text-center">{d.likelihood}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
