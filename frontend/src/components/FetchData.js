import React, { useEffect, useState, useCallback } from "react";
//import MenuItems from "./MenuItems";
import Search from "./Search";

const FetchData = ({ }) => {
    const [foods, setFoods] = useState([{
        id: "",
        name: "carrot cake", //otherwise the list starts empty, giving an error
        price: "", //carrot cake for the rescue
        category: "",
        available: "",
    }]);
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
    
    return (
        <div>
            <h2>Menu</h2>
            <Search details={foods} />
        </div>
    );
};
export default FetchData;