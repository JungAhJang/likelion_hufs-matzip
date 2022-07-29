import React from "react";
import { GlobalStyles } from "./styles";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MatzipList from "./MatzipList";
import Menubar from "./Menubar";

const App = () => {
  const API_URL = "https://afd8cb3b-0077-4554-a7be-4ce86d83222c.mock.pstmn.io/";
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Menubar apiUrl={API_URL} />} />
        <Route path=":cateName" element={<MatzipList apiUrl={API_URL} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
