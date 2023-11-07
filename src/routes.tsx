import { LoginPage } from "@pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Step } from "./components/steps/steps";
import { Simulation } from "@pages/menuSimulation/menu-simulation";
import { Menu } from "@pages/menu/menu";
import StepOne from "@pages/message/newContact/step-one/step-one";
import StepTwo from "@pages/message/newContact/step-two/step-two";
import StepThree from "@pages/message/newContact/step-three/step-three";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instrucao" element={<Step />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Menu />} />

        <Route path="/mensagem" element={<Simulation />} />
        <Route path="/mensagem/criar-contato/passo-1" element={<StepOne />} />
        <Route path="/mensagem/criar-contato/passo-2" element={<StepTwo />} />
        <Route path="/mensagem/criar-contato/passo-3" element={<StepThree />} />

        <Route path="/email" element={<Simulation />} />
        <Route path="/alimentacao" element={<Simulation />} />
        <Route path="/transporte" element={<Simulation />} />
      </Routes>
    </BrowserRouter>
  );
};
