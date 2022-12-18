import React, { useContext } from "react";
import OrderContext from "./OrderContext";
import Accordion from 'react-bootstrap/Accordion';
import FetchData from "./FetchNutrition";
import UpdateRatings from "./UpdateRating";
import mean from "./Mymath";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


//ordersummary does mostly what menuitems.js does, however this is getting loaded from both the front-end element
//and the localstorage, and it has no interaction with the back-end storage by itself. 

export default function OrderSummary() {
    const [order, setOrder] = useContext(OrderContext);
    
    //removebutton functions

    const removeItem = (e, item) => {
        let updatedOrder = order.filter((element) => {
            localStorage.removeItem('item', JSON.stringify(element))
            return element !== item;
        });
        setOrder(updatedOrder);
    };


    return (
        <div id="bookmarks">
            <h2 id="order">Your Bookmarked Dishes</h2>

            <Accordion>
                {order.map((item, index) => (
                    <Accordion.Item eventKey={index} key={index}>
                        <div className="card">
                            <div className="card-body" style={{backgroundImage: `url(${item.image})`}}>
                            <Accordion.Header key={item.id}><Typography component="legend">{item.name}</Typography>
                                        <Rating name="read-only" value={mean(item.ratings)} readOnly size="small" /></Accordion.Header>
                                <Accordion.Body>
                                    
                                <h6 className="card-subtitle mb-2 text-muted">£{item.price}</h6>
                                    <p className="card-text" >Description: {item.description}</p>
                                    <p className="card-text" >Ingredients: {item.ingredients}</p>
                                    <p className="card-text" >Recipe: {item.recipe}</p>
                                    <p className="card-text" >Serving: {item.serving}</p>
                                    <p className="card-text" >Rating: {mean(item.ratings).toFixed(2)}, "rounded: {Math.round(mean(item.ratings))}"</p>
                                    <p className="card-text" >Rating:</p>
                                    <UpdateRatings rating={item}></UpdateRatings>
                                    <FetchData query={item.name}></FetchData>
                                    <button id="removebookmark" onClick={(e) => removeItem(e, item) }>Remove from cart</button>
                                </Accordion.Body>
                            </div>
                        </div>

                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}