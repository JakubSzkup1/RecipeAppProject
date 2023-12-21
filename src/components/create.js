import { useState } from "react"; //importing {useState}
import "./Create.css"; // Import CSS file
import axios from "axios"; //importing axios

//Creating a function that will create a recipe
function Create() {
    //useState assigned to an empty string
    const [meal, setMeal] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preperation, setPreperation] = useState('');

    //Declare handleSubmit & console log it
    const handleSubmit = (e) => {
        e.preventDefault();


        //Console log the Values
        console.log("My Meal: " + meal +
            "Description: " + description +
            "Ingredients Used: " + ingredients +
            "Preperation: " + preperation);

        //Create recipe object
        const recipe = {
            meal: meal,
            description: description,
            ingredients: ingredients,
            preperation: preperation
        };

        //Post Request to server
        axios.post("http://localhost:4000/api/recipe", recipe)
            .then()
            .catch();

    }
    //Form for creating the recipes
    return (
        <div className="create-container">
            <h2 className="form-title">Add a New Recipe</h2>
            <form onSubmit={handleSubmit} className="recipe-form">

                <div className="form-group">
                    <label>Meal Name: </label>
                    <input type="text" className="form-control" value={meal}
                        onChange={(e) => setMeal(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Description of Meal:</label>
                    <input type="text" className="form-control" value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Ingredients:</label>
                    <input type="text" className="form-control" value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Preparation of Meal:</label>
                    <textarea className="form-control textarea" value={preperation}
                        onChange={(e) => setPreperation(e.target.value)} rows="6"></textarea>
                </div>

                <div className="submit-container">
                    <input type="submit" value="Add Recipe" className="submit-button" />
                </div>
            </form>
        </div>
    );
}

export default Create;


