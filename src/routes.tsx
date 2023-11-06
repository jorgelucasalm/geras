import { LoginPage } from "@pages";
import SignUpPage from "@pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Step } from "./components/steps/steps";
import Email from "@pages/Email";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/step-1" element={<Step />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </BrowserRouter>
  );
};
