import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componant/Layout";
import Home from "./componant/Home";
import About from "./componant/About";
import BookApoinment from "./componant/BookApoinment";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/ApoinmentShaduler/Home" element={<Home />} />
        <Route path="/ApoinmentShaduler/About" element={<About />} />
        <Route path="/ApoinmentShaduler/BookApoinment" element={<BookApoinment />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
