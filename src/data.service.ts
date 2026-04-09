const mockData = [
  { id: 1, category: 'Electronics', amount: 1200, status: 'completed' },
  { id: 2, category: 'Home', amount: 150, status: 'completed' },
  { id: 3, category: 'Electronics', amount: 850, status: 'pending' },
  { id: 4, category: 'Clothing', amount: 40, status: 'completed' },
  { id: 5, category: 'Home', amount: 300, status: 'cancelled' },
  { id: 6, category: 'Electronics', amount: 2200, status: 'completed' },
];

const fetchTransactions = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.2;

    setTimeout(() => {
      if (shouldFail) reject("Error during data fetching.");
      else resolve(mockData);
    }, 1500);
  });
};

export { fetchTransactions };
