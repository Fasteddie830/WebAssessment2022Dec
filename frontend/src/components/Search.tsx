import React, { useState } from "react";
import MenuItems from "./MenuItems";
import "../style/style.css"

//The search function. First of all, it is set to a Typescript (tsx) file in order to enable a couple functions that 
//will be indicated below. The search function takes in items to search for, and split's up 
//key values to search for in the entry. So far users can search through for name, ingredient, serving size, and category
//of an entry. Additional search queries are very easy to implement, just have to extend the radio buttons and
//the if else statement accordingly. 

function Search({ details }) {

    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('name');

    //This is only working in a .tsx file, or at least not in a .js file. 
    //Radio button selections. 
    const isRadioSelected = (id: string): boolean => selectedRadioBtn === id;
    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadioBtn(e.currentTarget.id);
    //console.log(selectedRadioBtn);

    //searchfield is the entry field where users can type in things to search for. 
    const [searchField, setSearchField] = useState("");
    //going through all the entries, and filtering them accordingly. 
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
                    id="searchbar"
                    type="text"
                    placeholder="Search ..."
                    onChange={(e) => setSearchField(e.target.value)}>
                </input>
            </div>
            <div id="filters">
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
            </div>
            <MenuItems items={filtered}></MenuItems>
        </div>
    );
}

export default Search;