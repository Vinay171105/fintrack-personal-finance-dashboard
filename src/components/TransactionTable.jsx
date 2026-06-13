export default function TransactionTable({
  transactions,
  handleDeleteTransaction,
}) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Recent Transactions
          </h2>

          <p className="text-sm text-slate-500">
            Manage and monitor your financial activity
          </p>
        </div>

        <div className="bg-slate-100 px-4 py-2 rounded-xl">
          <span className="text-sm font-medium text-slate-700">
            {transactions.length} Records
          </span>
        </div>
      </div>

      {transactions.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">
            No transactions found
          </p>

          <p className="text-sm text-slate-400 mt-2">
            Add your first transaction above
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 text-sm">
                <th className="text-left p-4">Amount</th>
                <th className="text-left p-4">Category</th>
                <th className="text-left p-4">Type</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Notes</th>
                <th className="text-left p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="p-4 font-semibold text-slate-900">
                    ₹{new Intl.NumberFormat("en-IN").format(item.amount)}
                  </td>

                  <td className="p-4 text-slate-700">
                    {item.category}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.type === "Income"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.type}
                    </span>
                  </td>

                  <td className="p-4 text-slate-600">
                    {item.date || "-"}
                  </td>

                  <td className="p-4 text-slate-600 max-w-[200px] truncate">
                    {item.note || "-"}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() =>
                        handleDeleteTransaction(index)
                      }
                      className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}