const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");


app.get('/', (req, res) => {
let today = new Date();
let currentDay = today.getDay();
let day = "";

switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      defaut:"error. Current day is equal to "+currentDay;
  }
res.render("list.ejs", {kindOfDay: day}); //this is a js object. key: matches with variable from ejs , vaue is the value of the variable day
});






app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});