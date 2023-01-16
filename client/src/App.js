import "./assets/variables/root.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
// import Home from "./pages/home"; 
import JoinedTournament from "./pages/joinedTournament";
import Home1 from "./pages/home1";
import Tournament from "./pages/tournaments";
import Register from "./pages/register";
import GameTournament from "./pages/gameTournament";
import Login from "./pages/login";



function App() {
  return (
    <>
    
      <Router>
        <Sidebar />
        <Routes>
          <Route  exact path="/"                   element={<Home1 />} />
          <Route        path="/register"           element={<Register/>} />
          <Route        path="/login"              element={<Login/>} />
          <Route        path="/JoinedTournament"   element={<JoinedTournament/>} />
          <Route        path="/:id"                element={<Tournament/>}   />
          <Route        path="/:id/:id"            element={<GameTournament/>}   />
        </Routes>
      </Router>
    </>
  );
}

export default App;