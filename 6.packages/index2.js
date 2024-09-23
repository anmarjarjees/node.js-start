// Instead of using too many callbacks, we can use promises
const express = require('express');

// Importing readFile from fs.promises
const { readFile } = require('fs').promises;

const app = express();

// Making our callback an asynchronous function
app.get("/", async (request, response) => {
    try {
        // Reading the HTML file and sending it as a response
        const html = await readFile('./home.html', 'utf-8');
        response.send(html);
    } catch (err) {
        // Handling any errors that occur during file reading
        response.status(500).send('Sorry, we cannot finish your request due to server issues');
    }
});

// Listening on the specified port
app.listen(process.env.PORT || 3000, () =>
    console.log(`Our application is ready and available on http://localhost:3000`)
);

// We can deploy our Application so people can see it:
// We can use the free Google App Engine instead of Heroku (no more Free plan)