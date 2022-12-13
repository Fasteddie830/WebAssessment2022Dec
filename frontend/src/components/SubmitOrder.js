import React, { useContext, useState } from "react";
import OrderContext from "./OrderContext";
const SubmitOrder = () => {
    const [order, setOrder] = useContext(OrderContext);
    const [nameField, setNameField] = useState("");
    const [tableField, setTableField] = useState("");
    const [message, setMessage] = useState("");
    const addOrder = () => {
        let newOrder = [nameField, tableField, ...order];
        const orderString = JSON.stringify(newOrder);
        fetch(`http://localhost:3005/addOrder`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */* ",
                "Content-Type": "application/json",
            },
            body: orderString,
        })
            .then(() => {
                setMessage(
                    "Hi " +
                    nameField +
                    " thank you for your order. You've ordered " +
                    order
                );
                setOrder([]);
                setNameField("");
                setTableField("");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h2>Submit Order</h2>
            <label> Enter your name:</label>
            <input
                className="form-control"
                type="text"
                placeholder="Enter your name here ..."
                value={nameField}
                onChange={(e) => setNameField(e.target.value)}
            />
            <label> Enter your table number ;"</label>
            <input
                className="form-control"
                type="text"
                placeholder="Enter your table number here ..."
                value={tableField}
                onChange={(e) => setTableField(e.target.value)}
            />
            <button onClick={addOrder}>Submit order</button>
            <p>{message}</p>
        </div>
    );
};
export default SubmitOrder;