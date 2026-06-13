export default function SummaryCards({
  totalIncome,
  totalExpense,
  balance,
  savingsRate,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {/* Income */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6">
        <p className="text-sm text-slate-500 mb-2">
          Total Income
        </p>

        <h2 className="text-4xl font-bold text-emerald-600">
          ₹{new Intl.NumberFormat("en-IN").format(totalIncome)}
        </h2>

        <p className="text-xs text-slate-400 mt-3">
          Total money earned
        </p>
      </div>

      {/* Expense */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1">
        <p className="text-sm text-slate-500 mb-2">
          Total Expense
        </p>

        <h2 className="text-4xl font-bold text-red-500">
          ₹{new Intl.NumberFormat("en-IN").format(totalExpense)}
        </h2>

        <p className="text-xs text-slate-400 mt-3">
          Total money spent
        </p>
      </div>

      {/* Balance */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1">
        <p className="text-sm text-slate-500 mb-2">
          Net Balance
        </p>

        <h2 className="text-4xl font-bold text-slate-900">
          ₹{new Intl.NumberFormat("en-IN").format(balance)}
        </h2>

        <p className="text-xs text-slate-400 mt-3">
          Current available balance
        </p>
      </div>

      {/* Savings Rate */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1">
        <p className="text-sm text-slate-500 mb-2">
          Savings Rate
        </p>

        <h2 className="text-4xl font-bold text-blue-600 hover:-translate-y-1">
          {new Intl.NumberFormat("en-IN").format(savingsRate)}%
        </h2>

        <p className="text-xs text-slate-400 mt-3">
          Percentage of income saved
        </p>
      </div>

    </div>
  );
}