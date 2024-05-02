// Import the axios library
const axios = require('axios');
const http = require('http');
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 10000;
const apiUrl = 'https://api-free.deepl.com/v2/translate';
const deeplAuthKey = process.env.deeplAuthKey;
const app = express();

const corsOptions = {
    origin: 'https://kurosakinoel.com',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

const deeplRequestData = {
    text: 'Hello, world!',
    target_lang: 'ZH'
    };

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Endpoint to handle translation requests
app.post('/translate', (req, res) => {
    // Assuming the request body contains the necessary data
    const requestData = req.body;
    
    // Check if the request header is valid
    if (req.headers['checker-header'] === 'translate-please') {
        deeplTranslate(requestData)
            .then(response => {
                res.json(response.data); // Send translated data back to client
            })
            .catch(error => {
                console.error('Error:', error);
                res.status(500).send('Translation error');
            });
    } else {
        res.status(400).send('Invalid request');
    }
});

// Function to translate using DeepL API
function deeplTranslate(deeplRequestData) {
    return axios.post(apiUrl, deeplRequestData, {
        headers: {
            'Authorization': `DeepL-Auth-Key ${deeplAuthKey}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}

// const server = http.createServer(function(request, response){
//     if(request.method == "POST" && request.headers['checker-header'] === 'translate-please'){
//         deeplRequestData = request;
//         deeplTranslate(deeplRequestData);
//     }
//     response.end('received post request');
// }).listen(port);

// function deeplTranslate(deeplRequestData){
//     // Set up the Axios POST request
//     return axios.post(apiUrl, deeplRequestData, {
//         headers: {
//             'Authorization': `DeepL-Auth-Key ${deeplAuthKey}`,
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     })
//      .then(response => {
//          console.log('Response:', response.data);
//      })
//      .catch(error => {
//          console.error('Error:', error);
//      });
// }