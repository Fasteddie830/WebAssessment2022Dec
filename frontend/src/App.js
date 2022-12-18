import React from "react";
import FetchData from "./components/FetchData.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HTMLComponents from "./components/HTMLComponents.js";
import Footer from "./components/Footer.js";

//app.js the main component that loads all the separate components and combines them together. 
//the logic of the app: HTMLComponents is just a static page loading first for design,
//FetchData gets all the data from the backend database,  then passes it to:
//Search, which can narrow or widen the data displayed depending on what we filter in or out
//Then data is passed to MenuItems to display the filtered data. MenuItems further uses:
//OrderSummary that uses OrderContext, which displays data saved into the local storage
//after users have saved something into the bookmarks section.
//UpdateRatings is also called by both OrderSummary and MenuItems, which is basically a component
//that displays the star ratings of each product, and manipulates the ratings. 

export default function App(){
  return(
    <>
      <HTMLComponents>  </HTMLComponents>
      <FetchData></FetchData>
      <Footer></Footer>
    </>
  )
}
