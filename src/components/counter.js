import React, { useState } from "react";

//Daily calories tracker
function CaloriesTracker() {
    const [calories, setCalories] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    //handleInputChange allows user to enter the amount of calories they wish
    const handleInputChange = (e) => {
        setCalories(e.target.value);
    };

    //HandleSubmit adds the calories entered to the total
    const handleSubmit = (e) => {
        e.preventDefault();
        setTotalCalories(totalCalories + Number(calories));
        setCalories(0);
    };

    //HandleClear sets back the calorie count to zero on click
    const handleClear = () => {
        setTotalCalories(0);
    }

    //Button CSS Styling
    const buttonStyle = {
        backgroundColor: 'orange',
        borderRadius: '5px',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        cursor: 'pointer',
        margin: '5px'
    }

    //backgroun css styling
    const backgroundStyle = {
        backgroundImage: `url(https://images.pexels.com/photos/218434/pexels-photo-218434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // This will make it take the full height 
        color: 'white' 
    };

    //simple form that allows user to input and add/Clear their calories
    return (
        <div style={backgroundStyle}>
            <h2>Your Daily Calorie Counter!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={calories}
                    onChange={handleInputChange}
                    placeholder="Enter calories here"
                />
                <button type="submit" style={buttonStyle}>Add</button>
            </form>
            <p>Your Total Calories: {totalCalories}</p>
            <button onClick={handleClear} style={buttonStyle}>Clear</button>
        </div>
    );
}
export default CaloriesTracker;