import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"tech"} element={<TechPage />}>
          <Route path={"javascript"} element={<JavascriptPage />} />
          <Route path={"react"} element={<ReactPage />}>
            <Route path={":docId"} element={<ReactDocPage />} />
          </Route>
        </Route>
        <Route path={"blog"} element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
