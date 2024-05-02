// Import the axios library
const axios = require('axios');
const http = require('http');
const port = process.env.PORT || 10000;

const apiUrl = 'https://api-free.deepl.com/v2/translate';
const deeplAuthKey = process.env.deeplAuthKey;
var deeplRequestData = undefined;

const server = http.createServer(function(request, response){
    if(request.method == "POST"){
        response.end('received post request');
        //deeplRequestData = request;
    }
    //deeplTranslate(deeplRequestData);
}).listen(port);

//var text = ;

// Define the data to be sent in the request
// const requestData = {
//     text: 'Hello, world!',
//     target_lang: 'ZH'
// };

function deeplTranslate(deeplRequestData, translatedData){
    // Set up the Axios POST request
    axios.post(apiUrl, deeplRequestData, {
        headers: {
            'Authorization': `DeepL-Auth-Key ${deeplAuthKey}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {
        console.log('Response:', response.data);
        //console.log('Response:', translatedData);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}