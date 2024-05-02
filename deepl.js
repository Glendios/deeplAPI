﻿// Import the axios library
const axios = require('axios');
const http = require('http');
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 10000;

const corsOptions = {
    origin: 'https://kurosakinoel.com',
    optionsSuccessStatus: 200
};
const app = express();
app.use(cors(corsOptions));

const apiUrl = 'https://api-free.deepl.com/v2/translate';
const deeplAuthKey = process.env.deeplAuthKey;
var deeplRequestData = {
    text: 'Hello, world!',
    target_lang: 'ZH'
    };

const server = http.createServer(function(request, response){
    if(request.method == "POST" && request.headers['checker-header'] === 'translate-please'){
        deeplRequestData = request;
        deeplTranslate(deeplRequestData);
    }
    response.end('received post request');
}).listen(port);

//var text = ;

// Define the data to be sent in the request
// const requestData = {
//     text: 'Hello, world!',
//     target_lang: 'ZH'
// };

function deeplTranslate(deeplRequestData){
    // Set up the Axios POST request
    axios.post(apiUrl, deeplRequestData, {
        headers: {
            'Authorization': `DeepL-Auth-Key ${deeplAuthKey}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
     .then(response => {
         console.log('Response:', response.data);
     })
     .catch(error => {
         console.error('Error:', error);
     });
}