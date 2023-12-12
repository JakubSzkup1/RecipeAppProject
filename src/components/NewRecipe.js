import { useState } from "react"; //importing {useState}
import axios from "axios"; //importing axios

//Creating a function that will create a recipe
function newRecipe() {
    //useState assigned to an empty string
    const [meal, setMeal] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [ingredients, setIngredients] =useState('');
}

