require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:5173'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.enable('trust proxy');

app.post('/api/fetchStockData', async(req, res) => {
    // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION

    try{

        const {name,date} = req.body;

        if(!name){
            return res.send({message:'Symbol is required'})
        }
        if(!date){
            return res.send({message:'Date is required'})
        }

let result = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${name}/range/1/day/${date}/${date}?apiKey=w1QKMuVjT7y1n3SJprLgP3qM4plk0VVE`)
   
   

    res.status(200).send({
        success:true,
        message:"Successfully fetched data",
        data:result.data
    });



    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Fetchstock Data",
            error
        })
    }
   
})



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));