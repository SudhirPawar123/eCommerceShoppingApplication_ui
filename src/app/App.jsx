import React from "react";
import { Header } from "../components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "../components/auth/Registration";
import Login from "../components/auth/Login";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
