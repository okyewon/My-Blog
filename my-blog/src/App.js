import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import MainPage from "./components/MainPage.js";
import TechPage from "./components/TechPage.js";
import BlogPage from "./components/BlogPage.js";

function App() {
  // root url : main page component
  // tech url : tech page component
  // blog url : blog page component
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />}></Route>
        <Route path={"/tech"} element={<TechPage />}></Route>
        <Route path={"/blog"} element={<BlogPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
