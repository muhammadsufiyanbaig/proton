const express = require("express")
const app = express();

const path = require("path")
const bodyparser = require("body-parser");
const mongoose = require('mongoose');







// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://proton.com.pk');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


const data = require('./routes/data');
const mailchimpdata =require('./routes/mailchimpconfiguration')

app.use('/data',data);
app.use('/mailchimpdata',mailchimpdata);

app.set('json spaces', 40);


var port=process.env.PORT || 8080
app.listen(port, (res) => {
    console.log(`working on port ${port}`)
})
