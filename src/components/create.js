import { useState } from "react"; //importing {useState}
import "./Create.css"; // Import CSS file
//import axios from "axios"; //importing axios

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

        console.log("meal: " + meal + "description: " + description + "Ingredients: " + ingredients + "Preperation: " + preperation);
    }

    //Log the above to console
    console.log("My Meal: " + meal +
        "Description: " + description +
        "Ingredients Used: " + ingredients +
        "Preperation: " + preperation);

    const recipe = ({
        meal: meal,
        description: description,
        ingredients: ingredients,
        preperation: preperation
    });

    //axios.post("https://localhost:4000/api/recipe", recipe)
    // .then()
    // .catch();


    return (
        //Form for user to input details of meal preperation
        <div>
            <form onSubmit={handleSubmit}>

                {/* Add meal name */}
                <div className="form-group">
                    <label>Meal Name: </label>
                    <input type="text"
                        className="form-control"
                        value={meal}
                        onChange={(e) => { setMeal(e.target.value) }} />
                </div>

                {/* Add Despcription of meal*/}

                <div className="form-group">
                    <label>Description of Meal: </label>
                    <input type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </div>

                 {/* Add Ingredients*/}

                 <div className="form-group">
                    <label>Ingredients: </label>
                    <input type="text"
                        className="form-control"
                        value={ingredients}
                        onChange={(e) => { setIngredients(e.target.value) }} />
                </div>

                 {/* Add preperation of meal*/}

                 <div className="form-group">
                    <label>Preperation of Meal: </label>
                
                       <textarea
                        value={preperation}
                        onChange={(e) => setPreperation(e.target.value)}
                        rows="6" // Set the number of visible rows
                    ></textarea>
                </div>
            </form>
        </div>

    );

}

export default Create;


