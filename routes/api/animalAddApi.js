const router = require('express').Router();
const { Animal } = require('../../db/models');
const AnimalCard = require('../../components/Animal');

router.post('/', async (req, res) => {
  try {
    const { name, img, description } = req.body;
    console.log(req.body);
    if (name && img && description) {
      const animal = await Animal.create({ name, img, description });
      const newAnimal = await Animal.findOne({ where: { id: animal.id } });
      const html = res.renderComponent(AnimalCard, { animal: newAnimal });
      res.json({ html, message: 'ок' });
    } else {
      res.json({ message: 'Заполните все поля!!!!!!' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
