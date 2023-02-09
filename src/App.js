import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import News from "./pages/news/News.js";
import Home from "./pages/home/Home";
import { Link } from "react-router-dom";
import NewsDetails from "./pages/newsDetails/NewsDetails";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/news"
          element={<News />}
        />
        <Route
          path="/news/:id"
          element={<NewsDetails />}
        />
        <Route
          path="/news/test"
          element={<div>JUST TESTING</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
