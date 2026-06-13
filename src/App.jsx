import { useState, useEffect } from "react";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";
import SpendingChart from "./components/SpendingChart";
import InsightCard from "./components/InsightCard";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("Income");
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [note, setNote] = useState("");

  // Filter State
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN").format(value);
  const handleAddTransaction = () => {
    if (!amount || !category) {
      alert("Please fill all required fields");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    if (category.trim().length < 2) {
      alert("Please enter a valid category");
      return;
    }

    const newTransaction = {
      amount: Number(amount),
      category,
      type,
      date,
      note,
    };

    setTransactions([
      newTransaction,
      ...transactions,
    ]);

    setAmount("");
    setCategory("");
    setType("Income");
    setDate(
      new Date().toISOString().split("T")[0]
    );
    setNote("");
    alert("Transaction added successfully!");
  };

  const handleDeleteTransaction = (indexToDelete) => {
    setTransactions(
      transactions.filter(
        (_, index) => index !== indexToDelete
      )
    );
  };

  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpense;

  const savingsRate =
    totalIncome > 0
      ? ((balance / totalIncome) * 100).toFixed(1)
      : 0;

  const expenses = transactions.filter(
    (t) => t.type === "Expense"
  );

  const categoryTotals = {};

  expenses.forEach((t) => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount;
  });

  const topCategory =
    Object.keys(categoryTotals).length > 0
      ? Object.keys(categoryTotals).reduce((a, b) =>
          categoryTotals[a] > categoryTotals[b]
            ? a
            : b
        )
      : "None";

  // Filtered Transactions
  const filteredTransactions =
    filterCategory === "All"
      ? transactions
      : transactions.filter(
          (t) => t.category === filterCategory
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 tracking-tight">
              FinTrack
            </h1>

            <p className="text-slate-500 mt-2">
              Track spending, income and savings in one place.
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm">
              <p className="text-xs text-slate-500">
                Top Spending Category
              </p>

              <p className="font-semibold text-slate-900">
                {topCategory}
              </p>
            </div>

            <div className="bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-sm">
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        <SummaryCards
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          balance={balance}
          savingsRate={savingsRate}
        />
        

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <SpendingChart
              transactions={transactions}
            />
          </div>

          <div>
            <InsightCard
              balance={balance}
              totalIncome={totalIncome}
              totalExpense={totalExpense}
            />
          </div>
        </div>

        <div className="mt-8">
          <TransactionForm
            amount={amount}
            setAmount={setAmount}
            category={category}
            setCategory={setCategory}
            type={type}
            setType={setType}
            date={date}
            setDate={setDate}
            note={note}
            setNote={setNote}
            handleAddTransaction={handleAddTransaction}
          />
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex items-center justify-end gap-3">
          <span className="text-slate-600 font-medium">
            Filter Transactions:
          </span>
          <select
            value={filterCategory}
            onChange={(e) =>
              setFilterCategory(e.target.value)
            }
            className="border border-slate-300 rounded-xl px-4 py-2 bg-white shadow-sm"
          >
            <option value="All">
              All Categories
            </option>

            {[...new Set(
              transactions.map(
                (t) => t.category
              )
            )].map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <TransactionTable
            transactions={filteredTransactions}
            handleDeleteTransaction={
              handleDeleteTransaction
            }
          />
        </div>

        {/* Footer */}
        <div className="text-center text-slate-400 text-sm mt-12 pb-6">
          FinTrack © 2026 • Built with React & Tailwind CSS
        </div>
      </div>
    </div>
  );
}

export default App;
