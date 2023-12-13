import card from 'react-bootstrap/Card'; //importing card from bootstrap

//This is a recipe card that will show all the details of the meal that the user has entered

function RecipeCard(properties){

    return(
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./food.jpg" alt="Card image cap"/>
        <div class="card-body">
          <p class="card-text">{properties.myRecipe.meal}</p>
          <p class="card-text">{properties.myRecipe.description}</p>
          <p class="card-text">{properties.myRecipe.ingredients}</p>
          <p class="card-text">{properties.myRecipe.preperation}</p>
        </div>
      </div>
    );
}
export default RecipeCard;