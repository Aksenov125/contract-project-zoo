const router = require('express').Router();

const { Animal } = require('../../db/models');
const AnimalCard = require('../../components/AnimalItem');

router.post('/', async (req, res) => {
  try {
    
    let user = res.locals.user
    const { name, picture, description } = req.body;
    console.log(req.body);
    if (user){
    if (name && picture && description) {
      const animal = await Animal.create({ name, picture, description });
      const newAnimal = await Animal.findOne({ where: { id: animal.id } });
      const html = res.renderComponent(AnimalCard, { animal: newAnimal });
      res.json({ html, message: 'ок' });
    } else {
      res.json({ message: 'Заполните все поля!!!!!!' });
    }
  }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:animalId', async (req, res) => {
  try {
    let user = res.locals.user
    const { animalId } = req.params;
    if(user){
    const animal = await Animal.destroy({ where: { id: animalId } });
    if (animal) {
      res.json({ message: 'ok' });
    }
  }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:animalId', async (req, res) => {
  try {
    let user = res.locals.user
    const { animalId } = req.params;
    const { picture, name, description } = req.body;
    if(user){
    if (picture && name && description) {
      const animal = await Animal.update(
        { picture, name, description },
        { where: { id: animalId } },
      );
      res.json({ animal });
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  }
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
