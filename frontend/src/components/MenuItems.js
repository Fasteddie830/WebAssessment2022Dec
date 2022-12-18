import React, { useEffect, useState } from "react";
import OrderContext from "./OrderContext";
import OrderSummary from "./OrderSummary";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import FetchData from "./FetchNutrition";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import UpdateRatings from "./UpdateRating";
import "../style/style.css"
import mean from "./Mymath";


const MenuItems = ({ items }) => {

    let stored;
    if (localStorage.getItem('item') !== null) {
        stored = JSON.parse(localStorage.getItem('item'))
        console.log(stored)
    }
    else {
        stored = []
    }

    const [selectedItems, setSelectedItems] = useState(stored);

    const handleClick = (e, selectedItem) => {
        let newState = [...selectedItems, selectedItem];
        setSelectedItems(newState);
        //console.log(selectedItems);
    };

    useEffect(() => {
        if (selectedItems !== 0) {
            localStorage.setItem('item', JSON.stringify(selectedItems));
        }
    }, [selectedItems]);

    console.log(items.image)

    return (
        <>
            <Accordion style={{paddingTop: "15px"}}>
                {items.map((item, index) => (
                    <Accordion.Item eventKey={index} key={index} >
                        <div className="card">
                            <div className="card-body" style={{backgroundImage: `url(${item.image})`}}>
                                <Accordion.Header key={item.id}><Typography component="legend">{item.name}</Typography>
                                        <Rating name="read-only" value={mean(item.ratings)} readOnly size="small" /></Accordion.Header>
                                <Accordion.Body>
                                    <h6 className="card-subtitle mb-2 text-muted">£{item.price}</h6>
                                    <p className="card-text">Description: {item.description}</p>
                                    <p className="card-text">Ingredients: {item.ingredients}</p>
                                    <p className="card-text">Recipe: {item.recipe}</p>
                                    <p className="card-text" >Serving: {item.serving}</p>
                                    <UpdateRatings rating={item}></UpdateRatings>
                                    <p className="card-text" ></p> 
                                    <FetchData query={item.name}></FetchData>
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
        </>
    );
};
export default MenuItems;