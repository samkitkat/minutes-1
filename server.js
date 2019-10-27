const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

//list of entries
const journalEntry = [];

//ALSO unsure what this is but seems necessary
//apparently needed to process body parameters for POST requests
app.use(bodyParser.urlencoded({extended: true }));

//default endpoint - idk what this is but uh
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/journaling.html");
});

//insert journal entries
app.post('/insertEntry', (req, res) => {
    const params = req.body;
    journalEntry.push(params.entry);
    res.redirect('/');
});

//Get all the journal entry in an array
app.get('/getData', (req, res) => {
    res.send(journalEntry.toString());
});