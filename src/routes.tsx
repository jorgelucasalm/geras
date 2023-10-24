import { LoginPage } from "@pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
