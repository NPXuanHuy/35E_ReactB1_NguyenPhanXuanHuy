import React from "react";
import ReactDOM from "react-dom/client";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Item from "./components/Item.jsx";

// My CSS
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Banner />
    <Item />
    <Footer />
  </div>
);
