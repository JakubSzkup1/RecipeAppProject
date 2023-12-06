const express = require('express')
const app = express()
const port = 4000 //server running on port 4000
const cors = require('cors'); //importing 'cors' middleware

//CORS
//Using the Cors library
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //allow request from the origin
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); //allow requests from the methods
    res.header("Access-Control-Allow-Headers", //allow requests from the headers
        "Origin, X-Requested-With, Content-Type, Accept");
    next(); //Move on to next middleware
});

//Insatlling body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //parse app/json


//Getting started with mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err)); //catch error

//using mongoose library to connect to a MongoDB database
async function main() {
    //Creating new cluster
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.cup18jx.mongodb.net/DB1?retryWrites=true&w=majority'); //linking the database created on MongoDB
}

//Creating a Schema for the Recipes
const schema= new mongoose.Schema({ //A recipe will consist the meal nanme,description,ingredients and prep
    meal:String,
    description:String,
    ingredients:String,
    prep:String
    
})

//This is the model for the database
const recipeModel =mongoose.model('Food',schema);