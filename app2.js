const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const itemsArray = []; //created to solve problem of scope for app.post
const workItemsArray = [];

//setting the app as working with ejs
//The view engine is responsible for creating HTML from your views.
// Views are usually some kind of mixup of HTML and a programming language. 


app.set("view engine", "ejs");

app.get('/', (req, res) => {
    let today = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let day = today.toLocaleDateString(undefined, options);
    res.render("list.ejs", { listTitle: day, addItems: itemsArray });
});

app.get('/work', (req, res) => {
    res.render("list.ejs", { listTitle: "WORK", addItems: workItemsArray });
});


app.post('/', (req, res) => {
    let input = req.body.addItems;
    if (req.body.list === "WORK") {
        workItemsArray.push(input);
        res.redirect("/work")
    }
    else {
        itemsArray.push(input);
        res.redirect('/'); //when the post req is triggered, saves value in inputus ad redirects to / which then trigers app.get
    }
});


app.get("/about", (req, res) => {
res.render("about.ejs")
})

///starting the local server

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});