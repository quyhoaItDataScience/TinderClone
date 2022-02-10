import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards";
import Home from "./components/Home";
import Chatpage from "./components/Chatpage";
import Chatscreen from "./components/Chatscreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chatpage />} />
          <Route path="/chat/olla" element={<Chatscreen />} />
        </Routes>
      </Router>

      {/* Tinder Card */}
      {/* Buttons below tinder cards  */}
      {/* Chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
