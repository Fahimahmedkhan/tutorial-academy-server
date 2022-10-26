const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const hotels = require('./data/hotels.json');

app.get('/', (req, res) => {
    res.send('Tutorial Academy Server is running')
});

app.listen(port, () => {
    console.log(`Tutorial Academy Server is running on port, ${port}`);
})