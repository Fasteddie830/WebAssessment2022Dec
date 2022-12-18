import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition"

// Similarly to FetchData.Js, Fetchnutrition grabs data from an external server.
// In this case, we are using an exrenal API from calorieninjas. From their database,
// we can fetch all the nutritional information for a lot of food items



const FetchNutrition = ({query}) => {

    //set up the variables needed for us
    const [nutrition, setNutrition] = useState(
        {
            sugar_g: " ",
            fiber_g: " ",
            serving_size_g: " ",
            sodium_mg: " ",
            name: " ",
            potassium_mg: " ",
            fat_saturated_g: " ",
            fat_total_g: " ",
            calories: " ",
            cholesterol_mg: " ",
            protein_g: " ",
            carbohydrates_total_g: " ",
        },
    );

        //Connect to calorieninjas api. The query part needs to be replaced
        //by the name of the food item we want to query to get that specific
        //food's nutritional values. 
    const fetchData = useCallback(() => {
        const url = 'https://calorieninjas.p.rapidapi.com/v1/nutrition?query='+query;
        //console.log(url);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '75e0e5031fmsh67a3661edb32466p1eeef4jsn64113122414b',
                'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
            },
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((incomingData) => {
                //console.log(incomingData);
                setNutrition(incomingData.items[0]);
            });
    }, [query]);
    //run fetch / fetch the data with the queried food item
    useEffect(() => {
        fetchData();
    }, [fetchData, query]);

    //call Nutrition.js which has the template for the food items. 
    return (
        <div>
            <h2>Nutrition data</h2>
            <div>
                <Nutrition item = {nutrition}></Nutrition>
            </div>
        </div>
    )

    // fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
   
}

export default FetchNutrition;