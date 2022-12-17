import React, { useState } from "react";
import MenuItems from "./MenuItems";
import "../style/style.css"

function Search({ details }) {

    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('name');

    const isRadioSelected = (id : string): boolean => selectedRadioBtn === id;
    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadioBtn(e.currentTarget.id); 
    //console.log(selectedRadioBtn);

    const [searchField, setSearchField] = useState("");
    const filtered = details.filter((entry) => {

         if (searchField.toLowerCase() !== "") {
            
                if (selectedRadioBtn === "name") {
                    return entry.name.includes(searchField.toLowerCase())
                }
                if (selectedRadioBtn === "ingredient") {
                    return (entry.ingredients.includes(searchField.toLowerCase()))
                }
                if (selectedRadioBtn === "serving") {
                    return (entry.serving.includes(searchField.toLowerCase()))
                }
                if (selectedRadioBtn === "category") {
                    return (entry.category.includes(searchField.toLowerCase()))
                }
                else {
                    return ""
                }
        }
        else {
            return "entry.name.includes(searchField.toLowerCase())"
        }
    });

    return (
        <div>
            <div id="search">
                <input className="form-control"
                    type="text"
                    placeholder="Search ..."
                    onChange={(e) => setSearchField(e.target.value)}>
                </input>
            </div>
            <form id="filter">
            <label>Filter By: &emsp;</label>
                <label>Name:
                    <input
                        type="radio"
                        id="name"
                        name="radiobutton"
                        checked={isRadioSelected('name')}
                        onChange={handleRadioClick}
                    ></input>&emsp;</label>
                <label>ingredient:
                    <input
                        type="radio"
                        id="ingredient"
                        name="radiobutton"
                        checked={isRadioSelected('ingredient')}
                        onChange={handleRadioClick}
                    ></input>&emsp;</label>
                <label>Category:
                    <input
                        type="radio"
                        id="category"
                        name="radiobutton"
                        checked={isRadioSelected('category')}
                        onChange={handleRadioClick}
                    ></input>&emsp;</label>
                <label>Serving size:
                    <input
                        type="radio"
                        id="serving"
                        name="radiobutton"
                        checked={isRadioSelected('serving')}
                        onChange={handleRadioClick}
                    ></input>&emsp;</label>
            </form>
            <MenuItems items={filtered}></MenuItems>
        </div>
    );
}

export default Search;