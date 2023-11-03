import { LoginPage } from "@pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Step } from "./components/steps/steps";
import { MenuSimulation } from "@pages/menuSimulation/menu-simulation";
import { NewContact } from "@pages/message/newContact/new-contact";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step-1" element={<Step />} /> {/*Rever a nomenclatura da rota*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mensagem" element={<MenuSimulation />} />
        <Route path="/mensagem/criar-contato" element={<NewContact />} />
      </Routes>
    </BrowserRouter>
  );
};
