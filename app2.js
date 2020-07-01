const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const itemsArray =[]; //created to solve problem of scope for app.post
const workItemsArray =[];

//setting the app as working with ejs


app.set("view engine", "ejs");//what is view engine?
//The view engine is responsible for creating HTML from your views.
// Views are usually some kind of mixup of HTML and a programming language. 




//get-->res.render acquiring informaion from an external server
app.get('/', (req, res) => {
    let today = new Date();
    const options ={
        weekday: 'long',
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
     };
    let day = today.toLocaleDateString(undefined, options);
    res.render("list.ejs", {listTitle:day, addedItems:itemsArray}); 
});


// app.post--> res.render/ redirect : posting into the html input from the user

app.post('/', (req, res) => {
    let input = req.body.addedItems;

    if(req.body.list ==="work"){
        workItemsArray.push(input);
        res.redirect("/work")
    }
    else{ 
    itemsArray.push(input);
     res.redirect('/'); //when the post req is triggered, saves value in inputus ad redirects to / which then trigers app.get
    }
});

app.get('/work', (req, res) => {
    res.render("list.ejs", {listTitle:"WORK", addedItems:workItemsArray}); 
});

app.get("/about", (req, res) => {
res.render("about.ejs")
})

///starting the local server

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});