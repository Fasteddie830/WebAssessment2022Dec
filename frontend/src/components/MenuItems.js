import React, { useState } from "react";
import OrderContext from "./OrderContext";
import OrderSummary from "./OrderSummary";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import FetchData from "./FetchNutrition";

const MenuItems = ({ items }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleClick = (e, selectedItem) => {
        let newState = [...selectedItems, selectedItem];
        setSelectedItems(newState);
        console.log(selectedItems);
    };
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