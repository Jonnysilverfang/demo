//setup node js
//yarn add express
//dev code
//node server.js

import express from 'express';

const app = express();
app.listen(8088);

app.get('/get-hello', (req, res) => {
    res.send('Hello World');
}); 

app.get('/get-node', (req, res) => {
    res.send('Node.js is awesome!');
});
