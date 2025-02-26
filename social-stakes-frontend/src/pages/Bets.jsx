import { useState, useEffect } from "react";

const Bets = () => {
  const [pendingBets, setPendingBets] = useState([]);
  const [activeBets, setActiveBets] = useState([]);
  const [completedBets, setCompletedBets] = useState([]);
  const [archivedBets, setArchivedBets] = useState([]);

  useEffect(() => {
    // Mock data (Replace with API fetch later)
    setPendingBets([
      { id: 1, title: "Arsenal vs Man City", amount: 100, opponent: "JohnDoe" },
      { id: 2, title: "Ethereum will hit $4K", amount: 50, opponent: "CryptoKing" },
    ]);

    setActiveBets([
      { id: 3, title: "Super Bowl Winner", amount: 75, opponent: "Alex" },
      { id: 4, title: "Who will win the F1 race?", amount: 40, opponent: "Jordan" },
    ]);

    setCompletedBets([
      { id: 5, title: "Stock Market will rise by 5%", amount: 60, opponent: "InvestorPro" },
    ]);

    setArchivedBets([
      { id: 6, title: "PSG vs Bayern", amount: 90, outcome: "Won" },
      { id: 7, title: "DOW will drop 3%", amount: 30, outcome: "Lost" },
    ]);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Bet Management</h2>

      {/* Pending Bets */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Pending Bets</h3>
        {pendingBets.length > 0 ? (
          <ul>
            {pendingBets.map((bet) => (
              <li key={bet.id} className="py-2 border-b flex justify-between">
                <span>{bet.title} - <span className="font-bold">${bet.amount}</span></span>
                <button className="bg-green-500 text-white px-3 py-1 rounded">Accept</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No pending bets</p>
        )}
      </div>

      {/* Active Bets */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Active Bets</h3>
        {activeBets.length > 0 ? (
          <ul>
            {activeBets.map((bet) => (
              <li key={bet.id} className="py-2 border-b">
                {bet.title} - <span className="font-bold">${bet.amount}</span> vs {bet.opponent}
              </li>
            ))}
          </ul>
        ) : (
          <p>No active bets</p>
        )}
      </div>

      {/* Completed Bets */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Completed Bets (Awaiting Verification)</h3>
        {completedBets.length > 0 ? (
          <ul>
            {completedBets.map((bet) => (
              <li key={bet.id} className="py-2 border-b flex justify-between">
                <span>{bet.title} - <span className="font-bold">${bet.amount}</span></span>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Verify</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No completed bets awaiting verification</p>
        )}
      </div>

      {/* Historical Bet Archive */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Historical Bets</h3>
        {archivedBets.length > 0 ? (
          <ul>
            {archivedBets.map((bet) => (
              <li key={bet.id} className="py-2 border-b">
                {bet.title} - <span className={`font-bold ${bet.outcome === "Won" ? "text-green-500" : "text-red-500"}`}>
                  {bet.outcome}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No historical bets</p>
        )}
      </div>
    </div>
  );
};

export default Bets;
