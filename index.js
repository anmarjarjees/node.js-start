// Instead of using two many callbacks, we can use promises
const express = require('express');
// const { readFile } = require('fs'); // (old code without promises)
const { readFile } = require('fs').promises; // with promises
/*
So instead of importing or requiring read file form fs,
we imported it from fs.promises
*/

const app = express();
// making our callback an asynchronous function, then adding our code in one line with await
app.get("/", async (request, response) => {
    // and just one single line of code:
    response.send(await readFile('./home.html', 'utf-8'))
});

app.listen(process.env.PORT || 3000, () => console.log(`Our application is ready and available on http://localhost:3000`))


// Final Step: Deploying our Application so people can see it:
// We can Heroku Free plan or using the free Google App Engine