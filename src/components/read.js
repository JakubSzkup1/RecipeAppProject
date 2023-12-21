import { useEffect, useState } from "react";
import axios from "axios";
import Recipes from "./Recipes";


function Read() {
    const [data, setData] = useState([]);

    useEffect(
        () => {
            axios.get('http://localhost:4000/api/recipes')
                .then(
                    (response) => {
                        setData(response.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        }, []
    );

    const Reload = (e) => {
        axios.get('http://localhost:4000/api/recipes')
            .then(
                (response) => {
                    setData(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }
        const backgroundStyle={
            backgroundImage: 'url("https://images.pexels.com/photos/218434/pexels-photo-218434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }

    return (
        <div style={backgroundStyle}>
            <h2>Your Meals</h2>
            <Recipes myRecipes={data} ReloadData={Reload}></Recipes>
        </div>
        
    );
}
export default Read;