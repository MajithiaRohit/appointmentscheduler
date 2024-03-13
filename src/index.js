import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componant/Layout";
import Home from "./componant/Home";
import About from "./componant/About";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
