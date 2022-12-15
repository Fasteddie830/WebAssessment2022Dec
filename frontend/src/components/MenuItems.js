import React, { useEffect, useState } from "react";
import OrderContext from "./OrderContext";
import OrderSummary from "./OrderSummary";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import FetchData from "./FetchNutrition";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

/* useEffect(()=> {
    const localItems = JSON.parse(localStorage.getItem("item"));
    if (localItems){
        setLocalItems(localItems)
    }
})
 */
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

    /* if(localStorage.getItem('item')){
        let item = localStorage.getItem('item')
    }
    else{
        stored = []
    } */

    /* useEffect(() => {
        if(localStorage.getItem('item')){
            let item = localStorage.getItem('item')
            setSelectedItems(item)
        }
    }) */

    //console.log(localStorage.getItem("items") == null)

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

    const mean = (x) => {
        let total = 0;
        let count = 0
        for (let i in x) {
            count++;
            total = total + x[i];
        }
        return total / count
    }



    return (
        <>
            <Accordion>
                {items.map((item, index) => (
                    <Accordion.Item eventKey={index} key={index} >
                        <div className="card">
                            <div className="card-body" >
                                <Accordion.Header key={item.id}>{item.name}</Accordion.Header>
                                <Accordion.Body>
                                    <h6 className="card-subtitle mb-2 text-muted">£{item.price}</h6>
                                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }} >Description: {item.description}</p>
                                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }} >Ingredients: {item.ingredients}</p>
                                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }} >Recipe: {item.recipe}</p>
                                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }} >Serving: {item.serving}</p>
                                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }} >Rating: {mean(item.ratings)}, "rounded: {Math.round(mean(item.ratings))}"</p>
                                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }} >Rating:
                                        <Typography component="legend">Read only</Typography>
                                        <Rating name="read-only" value={mean(item.ratings)} readOnly /></p>
                                    <FetchData query={item.name}></FetchData>
                                    <button onClick={(e) => handleClick(e, item)}>Add to cart</button>
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