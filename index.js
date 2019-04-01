// bring in express.
const express = require('express');
const PORT = 3000;

// Create an express app.
// Ot's roughly equivalent to the result of calling 'http.createServer()'
const app = express();

// Respond to GET requests for the path "/"
app.get('/', (req, res) => {
    // Note: this is different from the plain 'res.end'

    res.send('Home page');
});

app.post('/', (req, res) => {
    console.log('RESPONDING TO A POST')
    res.send('You sent a POST')
});

app.put('/', (req, res) => {
    console.log('RESPONDING TO A PUT')
    res.send('You sent a PUT')
});

// 1. Identify the variable name that you want to have.
// 2. In the string, write that variable name as part of the path.
// 3. Put a colon in front of the variable name in the path.
// 4. It will now be part of req.params.
app.put('/:userID', (req, res) => {
    // I want that userID!
    console.log(req.params.userID);
    res.send(`You sent me a PUT for ${req.params.userID}`)
});

app.delete('/', (req, res) => {
    console.log('RESPONDING TO A DELETE')
    res.send('You sent a DELETE')
});


app.get('/bye', (req, res) => {
    console.log('RESPONDING TO A GET')
    res.send('BYE!')
});

app.listen(PORT, () => {
    console.log(`Your amazing express app is running on port ${PORT}`);
});