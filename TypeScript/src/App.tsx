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
import DetailTab from "./Components/DetailTab.tsx";

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
          path="/detail/:id"
          element={
            <DetailTab />
          } />
      </Routes>
    </div>

  );

}

// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Detail from "./pages/Detail";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <nav className="navbar">
//         <Link to="/">{"홈  |   "}</Link>
//         <Link to="/about">{"   소개"}</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<Layout />}>
//           <Route path="info" element={<h4>info 페이지 </h4>} />
//           <Route path="profile" element={<Profile />} />
//         </Route>
//         <Route path="/detail/:id/" element={<Detail />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
