import React, { useContext } from "react";
import OrderContext from "./OrderContext";
import Accordion from 'react-bootstrap/Accordion';
import FetchData from "./FetchNutrition";

export default function OrderSummary() {
    const [order, setOrder] = useContext(OrderContext);
    const removeItem = (e, item) => {
        let updatedOrder = order.filter((element) => {
            return element !== item;
        });
        setOrder(updatedOrder);
    };
    return (
        <div>
            <h2>Your Order</h2>

            <Accordion>
                {order.map((item, index) => (
                    <Accordion.Item eventKey={index} key={index}>
                        <div className="card">
                            <div className="card-body">
                                <Accordion.Header key={item.id}>{item.name}</Accordion.Header>
                                <Accordion.Body>
                                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }} >Description: {item.description}</p>
                                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }} >Ingredients: {item.ingredients}</p>
                                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }} >Recipe: {item.recipe}</p>
                                    <p className="card-text" style={{ whiteSpace: 'pre-wrap' }} >Serving: {item.serving}</p>
                                    <FetchData query={item.name}></FetchData>
                                    <button onClick={(e) => removeItem(e, item)}>Remove from cart</button>
                                </Accordion.Body>
                            </div>
                        </div>

                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}