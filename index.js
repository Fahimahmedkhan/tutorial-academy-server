const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const tutorialCategories = require('./data/tutorialCategories.json');

app.get('/', (req, res) => {
    res.send('Tutorial Academy Server is running')
});

app.get('/tutorialCategories', (req, res) => {
    res.send(tutorialCategories)
});

app.get('/tutorialCategories/:id', (req, res) => {
    const id = req.params.id;
    const tutorialCategory = tutorialCategories.find(tutorialCategory => tutorialCategory.id == id)
    res.send(tutorialCategory);
});

app.listen(port, () => {
    console.log(`Tutorial Academy Server is running on port, ${port}`);
})