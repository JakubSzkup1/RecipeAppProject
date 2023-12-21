import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
    //uesParams to get the id from the URL
    let { id } = useParams();

    //State variables for recipe details
    const [meal, setMeal] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [prep, setPrep] = useState('');

    //Use Navigate for redirection after editing form
    const navigate = useNavigate();

    useEffect( //useEffect loads recipe data from the server
        () => {
            axios.get('http://localhost:4000/api/recipe/' + id)
                .then((response) => {
                    //Updates the state variables with new data
                    setMeal(response.data.meal);
                    setDescription(response.data.description);
                    setIngredients(response.data.ingredients);
                    setPrep(response.data.prep);
                })
                .catch(
                    (error) => {
                        console.log(error); //Log error
                    }
                );

        }, []
    );

    //Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //recipe object
        const recipe = {
            meal: meal,
            description: description,
            ingredients: ingredients,
            prep: prep
        }

        //Sends a put request to update recipe
        axios.put('http://localhost:4000/api/recipe/' + id, recipe)
            .then((res) => {
                navigate('/myrecipes');
            })
            .catch(
                (error) => {
                    console.log(error)
                });//double check on this

    }
    //Form for editing component
    return (
        <div>
            <h2>Edit Your Recipes Here</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Meal: </label>
                    <input type="text"
                        className="form-control"
                        value={meal}
                        onChange={(e) => setMeal(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Description: </label>
                    <input type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Ingredients: </label>
                    <input type="text"
                        className="form-control"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Preperation: </label>
                    <input type="text"
                        className="form-control"
                        value={prep}
                        onChange={(e) => setPrep(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit"
                        value="Edit Recipe">

                    </input>
                </div>

            </form>
        </div>
    );
}
