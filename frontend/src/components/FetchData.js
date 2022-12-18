import React, { useEffect, useState, useCallback } from "react";
import Search from "./Search.tsx";
import "../style/style.css"

const FetchData = ({ }) => {
    const [foods, setFoods] = useState([{
        id: "",
        name: "carrot cake", //otherwise the list starts empty, giving an error
        price: "", //carrot cake for the rescue
        category: "",
    }]);

    //this issue has actually been fixed below with a simple if statement filter,
    //but leaving this in since it was an interesting problem, and a very, very
    //temporary duct tape type of fix. 

    const fetchData = useCallback(() => {
        const url = "http://localhost:3005/food";
        fetch(url)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData)
                setFoods(incomingData);
            })
            .catch((err) => console.error(err));
    }, []);
    useEffect(() => {
        fetchData();
        console.log("fetching data");
    }, []);

    //console.log("-----------------")
    //console.log(foods[0])


    /*This is an important step!
    IF this if statement is not in place,
    the empty, initialising array with empty
    data goes through the rendering. We want to 
    filter that out from first render, and this
    is a good, simple way of doing it. */
    if (foods[0].id !== '') { 
        return (
            <div id="menu">
                <h2 id="menuh2">Menu</h2>
                <Search details={foods} />
            </div>
        );
    }
};
export default FetchData;