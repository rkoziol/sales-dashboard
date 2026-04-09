import React, { useState } from "react";
import "./App.scss";

export default function SalesDashboard() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="appWrapper">
      <h1>Sales Analytics</h1>

      <section className="sectionWrapper">
        <div className="card">
          <strong>Total Revenue</strong>
          <p></p>
        </div>
        <div className="card">
          <strong>Top Transaction</strong>
          <p></p>
        </div>
      </section>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Filter by category"
        className="searchInput"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Transactions List Table */}
      <table className="transactionsTable">
        <thead>
          <tr className="tableHeader">
            <th>ID</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
