//App.tsx
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Card from "./Components/Card";
import NoPage from "./Components/NoPage.jsx";
import CardList from "./CardList";
import Home from "./Components/Home";
import EventLoopTest from "./Day07/EventLoopTest.tsx";
import About from "./Components/About.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cardList" element={<CardList />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/event-loop-test" element={<EventLoopTest />} />
        <Route
          path="/card/:id"
          element={
            <Card />
          } />
      </Routes>
    </div>

  );

}