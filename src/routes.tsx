import { LoginPage, MessagePage } from "@pages";
import SignUpPage from "@pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Instruction from "@pages/instruction";
import { Menu } from "@pages/menu/menu";
import { Simulation } from "@pages/menuSimulation/menu-simulation";
import { Home } from "./pages/home/home";
import { Settings } from "@pages/settings/settings";
import { Support } from "@pages/support/support";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instrucao" element={<Instruction />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/entrar" element={<LoginPage />} />
        <Route path="/home" element={<Menu />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/configuracao" element={<Settings/>}/>
        <Route path="/suporte" element={<Support/>}/>

        <Route path="/email" element={<Simulation />} />
        <Route path="/alimentacao" element={<Simulation />} />
        <Route path="/transporte" element={<Simulation />} />

        <Route path="/mensagem" element={<Simulation />} />

        <Route path="/mensagem/criar-conta/*" element={<MessagePage.CreateAccount />}>
          <Route path="passo/1" element={<MessagePage.CreateAccount.StepOne />} />
          <Route path="passo/2" element={<MessagePage.CreateAccount.StepTwo />} />
          <Route path="passo/4" element={<MessagePage.CreateAccount.StepFour />} />
          <Route path="passo/5" element={<MessagePage.CreateAccount.StepFive />} />
        </Route>

        <Route path="/mensagem/criar-contato/*" element={<MessagePage.NewContact />}>
          <Route path="passo/1" element={<MessagePage.NewContact.StepOne />} />
          <Route path="passo/2" element={<MessagePage.NewContact.StepTwo />} />
          <Route path="passo/3" element={<MessagePage.NewContact.StepThree />} />
          <Route path="passo/4" element={<MessagePage.NewContact.StepFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
