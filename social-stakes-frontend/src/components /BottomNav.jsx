import { Home, PlusCircle, Bell, User, Layers } from "lucide-react";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-2 shadow-lg">
      <div className="flex justify-around items-center">
        <NavLink to="/" className="flex flex-col items-center text-sm">
          <Home size={24} />
          Home
        </NavLink>
        <NavLink to="/bets" className="flex flex-col items-center text-sm">
          <Layers size={24} />
          Bets
        </NavLink>
        <NavLink to="/create" className="flex flex-col items-center text-sm">
          <PlusCircle size={28} className="text-blue-400" />
          Create
        </NavLink>
        <NavLink to="/notifications" className="flex flex-col items-center text-sm">
          <Bell size={24} />
          Alerts
        </NavLink>
        <NavLink to="/profile" className="flex flex-col items-center text-sm">
          <User size={24} />
          Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
