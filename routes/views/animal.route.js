const router = require('express').Router();
const AnimalsList = require('../../components/AnimalsList');
const { Animal, Img } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll();
    const html = res.renderComponent(AnimalsList, { title: 'животные', animals });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router