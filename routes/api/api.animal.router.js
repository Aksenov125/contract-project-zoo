const router = require("express").Router();

const { Animal } = require('../../db/models');
const AnimalCard = require('../../components/AnimalItem');

router.post('/', async (req, res) => {
  try {
    const { name, picture, description } = req.body;
    console.log(req.body);
    if (name && picture && description) {
      const animal = await Animal.create({ name, picture, description });
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

router.delete('/:animalId', async (req, res) => {
    try {
      const { animalId } = req.params;
      const animal = await Animal.destroy({ where: { id: animalId} });
      if(animal){
        res.json({message : 'ok'})
      }
    } catch ({ message }) {
      res.json({ message });
    }
  });

module.exports = router