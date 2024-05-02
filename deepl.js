// Import the axios library
const axios = require('axios');

// Define the DeepL API endpoint
const apiUrl = 'https://api-free.deepl.com/v2/translate';

// Define your DeepL API key
//const deeplAuthKey = '5e4bfeac-76b7-45a5-85da-434cb0024bd6:fx'; // Replace 'yourdeeplAuthKey' with your actual API key

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