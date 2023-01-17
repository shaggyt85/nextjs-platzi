import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@styles/global.css";
import Layout from "@containers/Layout";
import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import Home from "@pages/Home";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import CreateAccount from "@pages/CreateAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import PasswordRecovery from "@pages/PasswordRecovery";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter basename="/react-practica-platzi/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/NewPassword" element={<NewPassword/>} />
          <Route path="MyAccount" element={<MyAccount/>} />
          <Route path="CreateAccount" element={<CreateAccount/>} />
          <Route path="Checkout" element={<Checkout/>} />
          <Route path="orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
