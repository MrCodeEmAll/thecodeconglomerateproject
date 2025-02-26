import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex justify-around">
      <Link to="/">Home</Link>
      <Link to="/bets">Bets</Link>
      <Link to="/create">Create Bet</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default BottomNav;
