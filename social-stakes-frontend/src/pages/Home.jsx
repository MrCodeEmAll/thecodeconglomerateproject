import { useState, useEffect } from "react";

const Home = () => {
  const [activeBets, setActiveBets] = useState([]);
  const [winLossRecord, setWinLossRecord] = useState({ wins: 0, losses: 0 });
  const [friendActivity, setFriendActivity] = useState([]);
  const [leaderboardPosition, setLeaderboardPosition] = useState(10);

  useEffect(() => {
    // Mock Data (Replace with API fetch later)
    setActiveBets([
      { id: 1, title: "Chelsea vs Man Utd", amount: 50, status: "Ongoing" },
      { id: 2, title: "Bitcoin price will hit $60K", amount: 30, status: "Ongoing" },
    ]);

    setWinLossRecord({ wins: 12, losses: 5 });

    setFriendActivity([
      { id: 1, user: "Alex", action: "won a bet on Lakers vs Warriors" },
      { id: 2, user: "Jordan", action: "lost a bet on UFC 298" },
    ]);

    setLeaderboardPosition(5);
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* User Dashboard */}
      <div className="bg-purple-700 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Welcome Back!</h2>
        <p className="text-sm">Your betting insights at a glance.</p>
      </div>

      {/* Active Bets Summary */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Active Bets</h3>
        {activeBets.length > 0 ? (
          <ul>
            {activeBets.map((bet) => (
              <li key={bet.id} className="py-2 border-b">
                {bet.title} - <span className="font-bold">${bet.amount}</span> ({bet.status})
              </li>
            ))}
          </ul>
        ) : (
          <p>No active bets</p>
        )}
      </div>

      {/* Win/Loss Record */}
      <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
        <div className="text-center">
          <h3 className="text-lg font-bold">Wins</h3>
          <p className="text-green-500 text-xl">{winLossRecord.wins}</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">Losses</h3>
          <p className="text-red-500 text-xl">{winLossRecord.losses}</p>
        </div>
      </div>

      {/* Friend Activity Feed */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Friend Activity</h3>
        {friendActivity.length > 0 ? (
          <ul>
            {friendActivity.map((activity) => (
              <li key={activity.id} className="py-2 border-b">
                <span className="font-bold">{activity.user}</span> {activity.action}
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent activity</p>
        )}
      </div>

      {/* Leaderboard Position */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Leaderboard Position</h3>
        <p className="text-xl font-bold">#{leaderboardPosition}</p>
      </div>
    </div>
  );
};

export default Home;
