import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componant/Layout";
import Home from "./componant/Home";
import About from "./componant/About";
import BookApoinment from "./componant/BookApoinment";
import ApoinmentDetail from "./componant/ApoinmentDetail";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/ApoinmentShaduler/About" element={<About />} />
        <Route path="/ApoinmentShaduler/BookApoinment" element={<BookApoinment />} />
        <Route path="/ApoinmentShaduler/BookApoinment/:AppointmentID" element={<BookApoinment />} />
        <Route path="/ApoinmentShaduler/:AppointmentID" element={<ApoinmentDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
