import RecipeCard from "./RecipeCard";

function Recipes(properties){

    return propTypes.myRecipes.map(
        (recipe)=>{
            return<RecipeCard myRecipes={recipe} key={recipe.id}></RecipeCard> //with a unique id
        }

    );
}
export default Recipes;