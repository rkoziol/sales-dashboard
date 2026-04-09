import React, { useState, useEffect } from 'react';

export default function SalesDashboard() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Sales Analytics</h1>

      <section style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={cardStyle}>
          <strong>Total Revenue</strong>
          <p></p>
        </div>
        <div style={cardStyle}>
          <strong>Top Transaction</strong>
          <p></p>
        </div>
      </section>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Filter by category"
        style={inputStyle}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Transactions List Table */}
      <table style={tableStyle}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
            <th>ID</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}

// Simple inline styles for demonstration purposes
const cardStyle: React.CSSProperties = {
  flex: 1,
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9'
};

const inputStyle: React.CSSProperties = {
  width: 'calc(100% - 30px)',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginBottom: '20px',
  padding: '20px 15px'
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: "20px"
};