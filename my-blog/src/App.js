import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./components/MainPage.js";
import TechPage from "./components/TechPage.js";
import BlogPage from "./components/BlogPage.js";
import JavascriptPage from "./components/JavascriptPage.js";
import ReactPage from "./components/ReactPage.js";
import ReactDocPage from "./components/ReactDocPage.js";

function App() {
  // root url : main page component
  // tech url : tech page component
  // blog url : blog page component

  const navigate = useNavigate();

  return (
    <BrowserRouter>
      <h1 onClick={() => navigate("/")}>logo</h1>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"tech"} element={<TechPage />}>
          <Route path={"javascript"} element={<JavascriptPage />} />
          <Route path={"react"} element={<ReactPage />} />
          <Route path={"react/:docId"} element={<ReactDocPage />} />
        </Route>
        <Route path={"blog"} element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
