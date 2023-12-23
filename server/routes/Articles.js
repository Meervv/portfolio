const express = require('express');
const router = express.Router();
const { Articles } = require('../models'); // import the Articles model

//routers

router.get('/', async (req, res) => { // get all articles
    const listOfArticles = await Articles.findAll();
    res.json(listOfArticles);
});

router.post('/', async (req, res) => { // create an article
    const article = req.body;
    await Articles.create(article);
    res.json(article); 
}); 

router.get('/:id', async (req, res) => { // get an article by id
    const id = req.params.id;
    const article = await Articles.findByPk(id);
    res.json(article);
});

module.exports = router;