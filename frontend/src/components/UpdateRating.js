import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import mean from "./Mymath";
const UpdateRatings = ({rating}) => {
    //console.log(rating)
    
    const rated = Math.round(mean(rating.ratings))
    const [star, setStar] = useState(rated);
    const [item, setItem] = useState(rating);
    const [value, setValue] = useState();

    //console.log(star)
    //console.log(item)
    //console.log(JSON.stringify(item))

    //rating.ratings.push(5)
    //console.log(item);
    //console.log(star);
    //const [value, setValue] = useState();
    async function addRating() {
        await fetch(`http://localhost:3005/updateOrder`, {
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
            <div>
            <p className="card-text" >Rating: {mean(item.ratings)}, "rounded: {Math.round(mean(item.ratings))}"
            <br></br>
            <Rating name="read-only" value={mean(item.ratings)} readOnly size="small" /></p>
                <Typography component="legend">Rate our recipe: </Typography>
                
                <Rating
                    name="simple-controlled"
                    value={value}
                    defaultValue={0}
                    onChange={(e) => {
                        setStar(e.target.value)
                        item.ratings.push(parseInt(star))
                        setItem(item)
                        addRating();
                        setValue(e)
                        //value = {e.target.value}
                        
                    }}></Rating>
            </div>

        </div>


    );
};
export default UpdateRatings;