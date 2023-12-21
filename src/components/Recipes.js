import RecipeCard from "./RecipeCard"; //Importing Recipecard component

//Recipes Function
function Recipes(props){

    return props.myRecipes.map( //Maps over
        (recipe)=>{
            return <RecipeCard myRecipe={recipe} key={recipe.id} Reload={()=>{props.ReloadData();}}></RecipeCard> //Passes reccipe data and key to each RecipeCard
        }

    );
}
export default Recipes;