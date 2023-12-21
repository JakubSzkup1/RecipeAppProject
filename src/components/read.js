import { useEffect, useState } from "react";
import axios from "axios";
import Recipes from "./Recipes";


function Read() {
    //Stores the data
    const [data, setData] = useState([]);

    //useEfect gets retrieves data from the server
    useEffect(
        () => {
            axios.get('http://localhost:4000/api/recipes') //Retrieves the recipes from the server
                .then(
                    (response) => {
                        setData(response.data) //Update state with the recieved data
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        }, []
    );

    //Reload function to reload data from the server
    const Reload = (e) => {
        axios.get('http://localhost:4000/api/recipes')
            .then(
                (response) => {
                    setData(response.data) //Updates state with new data
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }
    const backgroundStyle = { // Internal background styling
        backgroundImage: 'url("https://images.pexels.com/photos/218434/pexels-photo-218434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
    }

    return (
        <div style={backgroundStyle}>
            <h2>Your Meals</h2>
            <Recipes myRecipes={data} ReloadData={Reload}></Recipes> {/*Passes the data and reload function to Recipes component */}
        </div>

    );
}
export default Read;