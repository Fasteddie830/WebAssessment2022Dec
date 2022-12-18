import React, { useEffect, useState } from "react";
import OrderContext from "./OrderContext";
import OrderSummary from "./OrderSummary";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import FetchNutrition from "./FetchNutrition";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import UpdateRatings from "./UpdateRating";
import "../style/style.css"
import mean from "./Mymath";

//Here is where the fun begins. 


//MenuItems takes in food 
const MenuItems = ({ items }) => {

    //To hide a paragraph
    let isHidden = true;

    //Let stored. This part of the code is responsible for 2 things:
    //1. check if there are bookmarked items stored in the local storage
    //load them up into stored, and later pass it along to selectedItems, which 
    //is the bookmarked food storage
    //2., if there are no bookmarked items in local storage, pass along an empty array
    //to selectedItems to be initialised. 

    let stored;
    if (localStorage.getItem('item') !== null) {
        stored = JSON.parse(localStorage.getItem('item'))
        console.log(stored)
        isHidden = false;
    }
    else {
        stored = []
    }

    //selectedItems are the items selected by the user to be bookmarked for later.
    //and setSelectedItems is the setter for it, which sets up the data into it. 

    const [selectedItems, setSelectedItems] = useState(stored);
    

    //The button click function that selects items to be put into selectedItems
    const handleClick = (e, selectedItem) => {
        let newState = [...selectedItems, selectedItem];
        setSelectedItems(newState);
        //console.log(selectedItems);
    };

    //I think it's important to have this code specifically after the functions above
    //This checks if there are any selectedItems already, and if there are, put them
    //into local storage. 
    useEffect(() => {
        if (selectedItems !== 0) {
            localStorage.setItem('item', JSON.stringify(selectedItems));
        }
    }, [selectedItems]);

    console.log(selectedItems)

    //testing if images exist
    //console.log(items.image)


    //Accordion style was used to display the information for each dish
    //passing in the items that MenuItems gets at the beggining, splitting them up one by one by mapping them, and assigning them an index number
    //then splitting them up for specific elements by item.key, to get the value from the key value combo, from the object. 
    return (
        <>
            <Accordion style={{ paddingTop: "15px" }}>
                {/* iterate through all the incoming items, and allocate an index number with them */}
                {/* item.key, for example item.name will query the name of the item, and it will return the value corresponding from the object*/}
                {items.map((item, index) => (
                    <Accordion.Item eventKey={index} key={index} >
                        <div className="card">
                            <div className="card-body" style={{ backgroundImage: `url(${item.image})` }}>
                                <Accordion.Header key={item.id}><Typography component="legend">{item.name}</Typography>
                                    <Rating name="read-only" value={mean(item.ratings)} readOnly size="small" /></Accordion.Header>
                                <Accordion.Body>
                                    <p className="card-text">Description: {item.description}</p>
                                    <p className="card-text">Ingredients: {item.ingredients}</p>
                                    <p className="card-text">Recipe: {item.recipe}</p>
                                    <p className="card-text" >Serving: {item.serving}</p>
                                    <UpdateRatings rating={item}></UpdateRatings>
                                    <p className="card-text" ></p>
                                    <FetchNutrition query={item.name}></FetchNutrition>
                                    <button id="addbookmark" onClick={(e) => handleClick(e, item)}>Add to Bookmarks</button>
                                </Accordion.Body>
                            </div>
                        </div>
                    </Accordion.Item>
                ))}
            </Accordion>
            <div><OrderContext.Provider value={[selectedItems, setSelectedItems]}>
                <div><OrderSummary></OrderSummary></div>
            </OrderContext.Provider></div>

            {/* could have made this into a separate js file, but it's much easier from here */}
            {/* This small section will display the required ingredients for the bookmarked 
            items separately from the bookmarks list as a shopping list. */}
            <div id="shoppingList">
                <h2 id="shoppinglisth2">Shopping List</h2>
                <h2 hidden={!isHidden} className="hideMe">Open Recipes and Bookmark them using Bookmark Button to see required ingredients!</h2>
                {selectedItems.map((item, index) => (
                    <div className="shoppingCard">
                        <div className="card">
                            {/* After feedback from family, implemented these changing <p> tags to inform users how does this section work */}
                            
                            <h4 style={{borderBottom: "2px dashed black"}}>Ingredients Needed for {item.name}:</h4>
                            <p id="ingredientsP">{item.ingredients}</p>
                        </div>
                    </div>

                ))}
            <h5 hidden={isHidden} className="hideMe">When you have finished with the recipe, simply remove it from the bookmarks using the "Remove from Bookmarks" button after clicking the recipe name, to empty your shopping list!</h5>
            </div>
        </>
    );
};
export default MenuItems;