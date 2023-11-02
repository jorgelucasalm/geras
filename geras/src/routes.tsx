import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home"  element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}