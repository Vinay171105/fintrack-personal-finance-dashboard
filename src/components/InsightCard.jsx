export default function InsightCard({
  balance,
  totalIncome,
  totalExpense,
}) {
  let message = "";

  if (balance > 5000) {
    message =
      "Excellent! You are maintaining a strong positive balance.";
  } else if (balance > 0) {
    message =
      "Good job! Your income is higher than your expenses.";
  } else {
    message =
      "Warning: Your expenses are exceeding your income.";
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Smart Insights
      </h2>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
        <p className="text-slate-700">
          {message}
        </p>
      </div>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span className="text-slate-500">
            Total Income
          </span>

          <span className="font-semibold text-green-600">
            ₹{new Intl.NumberFormat("en-IN").format(totalIncome)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Total Expense
          </span>

          <span className="font-semibold text-red-500">
            ₹{new Intl.NumberFormat("en-IN").format(totalExpense)}
          </span>
        </div>

        <div className="flex justify-between border-t pt-4">
          <span className="text-slate-700 font-medium">
            Net Balance
          </span>

          <span className="font-bold text-slate-900">
            ₹{new Intl.NumberFormat("en-IN").format(balance)}
          </span>
        </div>

      </div>
    </div>
  );
}