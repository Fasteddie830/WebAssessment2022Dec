import React from "react";
import FetchData from "./components/FetchData.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HTMLComponents from "./components/HTMLComponents.js";
import Footer from "./components/Footer.js";

export default function App(){
  return(
    <>
      <HTMLComponents>  </HTMLComponents>
      <FetchData></FetchData>
      <Footer></Footer>
    </>
  )
}
