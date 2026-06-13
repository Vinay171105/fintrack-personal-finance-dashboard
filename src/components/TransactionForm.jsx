export default function TransactionForm({
  amount,
  setAmount,
  category,
  setCategory,
  type,
  setType,
  date,
  setDate,
  note,
  setNote,
  handleAddTransaction,
}) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Add Transaction
        </h2>

        <p className="text-slate-500 mt-1">
          Record and track your financial activities
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Amount
          </label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Category
          </label>

          <input
            type="text"
            placeholder="Food, Salary..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Notes
          </label>

          <input
            type="text"
            placeholder="Optional note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleAddTransaction}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-slate-800 transition-all duration-300"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}