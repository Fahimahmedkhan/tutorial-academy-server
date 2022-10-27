const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const tutorialCategories = require('./data/tutorialCategories.json');
const tutorial = require('./data/tutorial.json');

app.get('/', (req, res) => {
    res.send('Tutorial Academy Server is running')
});

app.get('/tutorialCategories', (req, res) => {
    res.send(tutorialCategories)
});

app.get('/tutorialCategories/:id', (req, res) => {
    const id = req.params.id;
    if (id === '09') {
        res.send(tutorial);
    }
    else {
        const tutorial_categories = tutorial.filter(a => a.category_id === id);
        res.send(tutorial_categories);
    }
});

app.get('/tutorial', (req, res) => {
    res.send(tutorial);
});

app.get('/tutorial/:id', (req, res) => {
    const id = req.params.id;
    const selectedTutorial = tutorial.find(a => a._id === id);
    res.send(selectedTutorial);
});

app.listen(port, () => {
    console.log(`Tutorial Academy Server is running on port, ${port}`);
})