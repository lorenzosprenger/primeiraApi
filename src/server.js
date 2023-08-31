const express = require('express');

const app = express();
const port = 3000;

app.get('/api/teste', (request,  response) => {
    response.send('bora devs')
});

app.listen(port, () => console.log(`Running at port ${port}`));