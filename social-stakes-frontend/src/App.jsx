import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bets from "./pages/Bets";
import CreateBet from "./pages/CreateBet";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <Router>
      <div className="pb-16"> {/* Padding for bottom nav */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bets" element={<Bets />} />
          <Route path="/create" element={<CreateBet />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
}

export default App;
