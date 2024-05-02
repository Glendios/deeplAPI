// Import the axios library
const axios = require('axios');

// Define the DeepL API endpoint
const apiUrl = 'https://api-free.deepl.com/v2/translate';

// Define your DeepL API key
const deeplAuthKey = process.env.deeplAuthKey;

// Define the data to be sent in the request
const requestData = {
    text: 'Hello, world!',
    target_lang: 'ZH'
};

// Set up the Axios POST request
axios.post(apiUrl, requestData, {
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