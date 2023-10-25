import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Step } from "./pages/steps/steps";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step-1" element={<Step/>} />
      </Routes>
    </BrowserRouter>
  );
};
