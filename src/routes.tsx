import { LoginPage } from "@pages";
import SignUpPage from "@pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
