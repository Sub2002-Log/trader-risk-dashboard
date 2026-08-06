import "./PerformanceByassets.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { asset: "BTC", profit: 1500 },
  { asset: "ETH", profit: 100 },
  { asset: "Gold", profit: -10 },
  { asset: "NASDAQ", profit: 250 },
];

const PerformanceByassets = () => {
  return (
    <section className="asset-section">
      <h2>Performance By Asset</h2>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="asset" />
            <YAxis />

            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#fff",
              }}
            />

            <Bar
              dataKey="profit"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default PerformanceByassets;