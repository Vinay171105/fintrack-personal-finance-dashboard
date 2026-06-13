import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SpendingChart({ transactions }) {
  const expenses = transactions.filter(
    (t) => t.type === "Expense"
  );

  const categoryTotals = {};

  expenses.forEach((item) => {
    categoryTotals[item.category] =
      (categoryTotals[item.category] || 0) +
      item.amount;
  });

  const chartData = Object.keys(categoryTotals).map(
    (key) => ({
      name: key,
      value: categoryTotals[key],
    })
  );

  const COLORS = [
    "#2563EB",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Spending Analysis
        </h2>

        <p className="text-slate-500">
          Expense distribution by category
        </p>
      </div>

      {chartData.length === 0 ? (
        <div className="h-[300px] flex items-center justify-center">
          <p className="text-slate-400">
            No expense data available
          </p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}