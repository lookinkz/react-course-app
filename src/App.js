import CostItem from "./components/CostItem";

function App() {
  const costs = [
    {
      date: new Date(2023, 3, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2023, 3, 11),
      description: "MacBook",
      amount: 1254.43,
    },
    {
      date: new Date(2023, 3, 10),
      description: "Jeans",
      amount: 45.12,
    },
  ];

  return (
    <div>
      <h1>ИЗУЧАЕМ REACT!!!</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
    </div>
  );
}

export default App;
