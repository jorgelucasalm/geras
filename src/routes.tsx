import { LoginPage } from "@pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Step } from "./components/steps/steps";
import { Simulation } from "@pages/menuSimulation/menu-simulation";
import { NewContact } from "@pages/message/newContact/new-contact";
import { Menu } from "@pages/menu/menu";
import { Alert } from "@components/alert/alert";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step-1" element={<Step />} /> {/*Rever a nomenclatura da rota*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Menu />} />

        <Route path="/mensagem" element={<Simulation />} />
        <Route path="/mensagem/criar-contato" element={<NewContact />} />

        <Route path="/email" element={<Simulation />} />
        <Route path="/alimentacao" element={<Simulation />} />
        <Route path="/transporte" element={<Simulation />} />
        
        <Route path="/teste" element={<Alert />} />
      </Routes>
    </BrowserRouter>
  );
};
