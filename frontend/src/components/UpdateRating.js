import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import mean from "./Mymath";


//updateratings much like menuitems, takes in the food objects from fetchdata, however this one looks through them and only 
//caters for the ratings of each dish. The ratings can be changed by an imported star function
//where users can click the star, and the number correlating to the star, e.g. 3 stars === 3, will be added to the
//ratings of the dish, then it will be pushed into the back-end with a fetch request, and the entire dish will be 
//updated with the new rating. 


const UpdateRatings = ({rating}) => {
    //console.log(rating)
    
    const rated = Math.round(mean(rating.ratings))
    const [star, setStar] = useState(rated);
    const [item, setItem] = useState(rating);
    const [value, setValue] = useState();
    const [userRated, setUserRated] = useState(false);

    //console.log(star)
    //console.log(item)
    //console.log(JSON.stringify(item))

    //console.log(item);

    //rating.ratings.push(5)
    //console.log(item);
    //console.log(star);
    //const [value, setValue] = useState();
    async function addRating() {
        await fetch(`https://dncookbook.onrender.com/updateOrder`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, * ",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .catch((err) => {
                console.log(err);
            });
    }; 
    return (
        <div>
            <div> {/* take all the ratings, calculate the mean, and display it to two decimal numbers */}
            <p className="card-text" >Rating: {mean(item.ratings).toFixed(2)}, "rounded: {Math.round(mean(item.ratings))}"
            <br></br>
            <Rating name="read-only" value={mean(item.ratings)} readOnly size="small" /></p>
                <Typography component="legend">Rate our recipe: </Typography>
                
                <Rating
                    name="simple-controlled"
                    value={value}
                    defaultValue={0}
                    readOnly={userRated}
                    onChange={(e) => {
                        setStar(e.target.value) //take the user rating as a number
                        item.ratings.push(parseInt(star)) //add to the list of ratings
                        setItem(item) //select the current item
                        addRating(); //call the rating function
                        setValue(e) //set the empty stars into the number the user entered
                        setUserRated(!userRated) //don't allow users to rate multiple times
                        //value = {e.target.value}
                        
                    }}></Rating>
                    {/* show this when users have given a rating */}
                    <p hidden={!userRated}>Thank you for your feedback!</p>
            </div>

        </div>


    );
};
export default UpdateRatings;