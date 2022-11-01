import React from "react";

// Style File
import "./App.css";
// Components
import NavBar from "./components/navBar";
import MainPart from "./components/MainPart";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <MainPart />
      <Footer />
    </div>
  );
}
