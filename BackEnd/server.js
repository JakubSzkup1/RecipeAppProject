const express = require('express')
const app = express()
const port = 4000 //server running on port 4000


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

//Insatlling body-parser to parse requests with JSON payloads.
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //parse app/json

//test request
app.get('/', (req, res) => {//server listens for request
    res.send('Hello from Server!')//response
})

//Getting started with mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err)); //catch error

//using mongoose library to connect to a MongoDB database
async function main() {
    //Creating new cluster
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.cup18jx.mongodb.net/DB1?retryWrites=true&w=majority'); //linking the database created on MongoDB
}

//Creating a Schema for the Recipes
const schema = new mongoose.Schema({ //A recipe will consist the meal nanme,description,ingredients and prep
    meal: String,
    description: String,
    ingredients: String,
    prep: String

})

//This is the model for the database which represents a collection 
const recipeModel = mongoose.model('my_Recipes', schema);


//Delete recipes by id
app.delete('/api/recipe/:id', async (req, res) => {
    console.log("Delete: " + req.params.id);

    //find recipe by id and then delete recipe
    let recipe = await recipeModel.findByIdAndDelete(req.params.id);
    res.send(recipe);

})

//Update the recipe
app.put('/api/recipe/:id',async(req,res)=>{
    console.log("Update: "+req.params.id);

    let recipe = await recipeModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(recipe);
})

//Making a request for the recipe
app.post('/api/recipe', (req, res) => {
    //Logging the data to the console
    console.log(req.body);

    //This creates new meal,description,ingredients and preperation
    recipeModel.create({
        meal: req.body.meal,
        description: req.body.description,
        ingredients: req.body.ingredients,
        prep: req.body.prep

    })
        .then(() => { res.send("Recipe has been created") })
        .catch(() => { res.send("Recipe has not been created") })
})

//Async Function-receives all data from database
app.get('/api/recipes', async (req, res) => {

    let recipes = await recipeModel.find({}); //await to comeback from database    
    res.json(recipes);
})

//Searches by id
app.get('/api/recipe/:identifier', async (req, res) => { 
    console.log(req.params.identifier);

    let recipe = await recipeModel.findById(req.params.identifier)// takes id
    res.send(recipe);
})

app.listen(port, () => { //app listening on port 4000
    console.log(`Recipe App listening on : ${port}`)
})
