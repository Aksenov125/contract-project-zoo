const router = require('express').Router();
const AnimalFormUpdate = require('../../components/AnimalFormUpdate');
const AnimalPage = require('../../components/AnimalPage');
const AnimalsList = require('../../components/AnimalsList');
const { Animal, Img } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll({ order: [['id', 'ASC']] , include: {model: Img}});
    const html = res.renderComponent(AnimalsList, {
      title: 'Зверьки зоопарка',
      animals,
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

router.get('/:animalId/formUpdate', async (req, res) => {
  try {
    const { animalId } = req.params;
    const animal = await Animal.findOne({ where: { id: animalId } });
    const html = res.renderComponent(AnimalFormUpdate, { title: 'Изменение данных о животном', animal });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

router.get('/:animalId/animal', async (req, res) => {
  try {
    const { animalId } = req.params;
    const animal = await Animal.findOne({ title:'Зверёк', where: { id: animalId },include:{model:Img} });
    const html = res.renderComponent(AnimalPage, {
      title: 'Зверёк',
      animal,
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
