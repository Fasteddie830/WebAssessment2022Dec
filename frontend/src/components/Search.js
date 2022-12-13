import React, { useState } from "react";
import MenuItems from "./MenuItems";

function Search({ details }) {

    const [checkName, setCheckName] = React.useState(false);
    const [checkAvailable, setCheckAvailable] = React.useState(false);
    const [checkIngredients, setCheckIngredients] = React.useState(false);
    /*const [checkCategory, setCheckCategory] = React.useState(false);
    const [checkServing, setCheckServing] = React.useState(false); */

    const handleName = () => {
        setCheckName(!checkName);
    };

    const handleAvailable = () => {
        console.log(checkAvailable)
        setCheckAvailable(!checkAvailable);
    };

    const handleIngredients = () => {
        setCheckIngredients(!checkIngredients);
    };
    /*
        const handleCategory = () => {
            setCheckCategory(!checkCategory);
        };
    
        const handleServing = () => {
            setCheckServing(!checkServing);
        }; */

    const [searchField, setSearchField] = useState("");
    //Now, here's something to think about
    //This search function, looks at the entries, the data coming from the database, right?
    //That data is an object, an entity which has multiple components making it up
    //in this case, the object represents a food item
    //this food item, this object has, a name, ingredients, a recipe, serving size, and so on
    //is there ever a case, where I have entered let's say egg, and this search function filters out
    // a possible entry because it has egg as an ingredient, but not in the name?
    //testing shows the result is no, it will show both based by name and ingredient. 
    const filtered = details.filter((entry) => {


        //There is a better way to do checkboxes with {mapping} specific names, indexes and whatnot to
        //decrease the amount of code here, instead of making separate switches for each
        //but creating multiple switches was easier, and i was too lazy re-doing this, i made these
        //one by one to test it out


        //this will not work, i'm using entry to sort my switch case, however i need 
        //this to check the checkboxes instead. Recalculating
        switch (entry) {
            case checkAvailable === false:
                console.log("something")
                if (entry.available === "yes") {
                    return entry;
                }
                break;
            case checkName === true:
                if (entry.name.includes(searchField.toLowerCase())) {
                    return entry;
                }
                break;
            case checkIngredients === true:
                if (entry.ingredients.includes(searchField.toLocaleLowerCase())) {
                    return entry;
                }
                break;
            case entry.category.includes(searchField.toLowerCase()):
                return entry
            /* case serving.includes(searchField):
                return serving; */
            default:
                return entry.name.toLowerCase().includes(searchField.toLowerCase());
        }

        //this here would look through the recipe, and let's say i want to boil something
        //it would show things that can be boiled. However the problem is, if I have something
        //with the name boil, it also shows that. In a massive database, this would result in me
        //having way too many matches to my search, with the potential of me not being able to find
        //whatever i was looking for. 

    });

    return (
        <div>
            <div>
                <input className="form-control"
                    type="text"
                    placeholder="Search ..."
                    onChange={(e) => setSearchField(e.target.value)}></input>
            </div>

            <label>Name:  </label>
            <input
                type="checkbox"
                id="name"
                name="name"
                checked={checkName}
                onChange={handleName}
            ></input>

            <label>available:  </label>
            <input
                type="checkbox"
                id="available"
                name="available"
                checked={checkAvailable}
                onChange={handleAvailable}
            ></input>
            <label>ingredient:  </label>
            <input
                type="checkbox"
                id="ingredient"
                name="ingredient"
                checked={checkIngredients}
                onChange={handleIngredients}
            ></input>

            <MenuItems items={filtered}></MenuItems>

        </div>
    );
}

export default Search;