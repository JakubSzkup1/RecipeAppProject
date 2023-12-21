import Card from 'react-bootstrap/Card'; //importing card from bootstrap
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//Basic inner styling for button and card
//Button
const buttonStyle = {
    fontSize: '0.8em', // Smaller font size
    padding: '5px 10px', // Smaller padding
    margin: '10px auto', // Center align
    display: 'block'
}

//Card
const cardStyleContainer = {
    maxWidth: '500px', // Set a max width
    margin: '20px auto'
}
const cardStyle = {
    backgroundColor: '#C0C0C0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
}

//This is a recipe card that will show all the details of the meal that the user has entered
function RecipeCard(props) {

    return (
        <div className="recipe-card" style={cardStyleContainer}>
            <Card style={cardStyle}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Card.Img
                        variant="top"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/meal-food-icon.png"
                        style={{ width: '100px', marginBottom: '15px' }} />

                    <Card.Subtitle>Meal</Card.Subtitle>
                    <Card.Title>{props.myRecipe.meal}</Card.Title>
                    <Card.Subtitle>Description</Card.Subtitle>
                    <Card.Text>{props.myRecipe.description}</Card.Text>
                    <Card.Subtitle>Ingredients</Card.Subtitle>
                    <Card.Text>{props.myRecipe.ingredients}</Card.Text>
                    <Card.Subtitle>Preperation</Card.Subtitle>
                    <Card.Text>{props.myRecipe.prep}</Card.Text>
                </Card.Body>
                <Link to={'/edit/' + props.myRecipe._id} style={buttonStyle} className='btn btn-primary'>Edit Recipe</Link>
                <Button variant='danger' style={buttonStyle} onClick={
                    (e) => {
                        e.preventDefault();

                        axios.delete('http://localhost:4000/api/recipe/' + props.myRecipe._id)
                            .then((res) => {
                                let reload = props.Reload();
                            })
                            .catch();
                    }
                } >Delete Recipe</Button>


            </Card>
        </div>
    );
}
export default RecipeCard;