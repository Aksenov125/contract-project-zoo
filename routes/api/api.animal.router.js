const router = require('express').Router();
const fileupload = require('../../utils/fileupload');
const { Animal, Img } = require('../../db/models');
const AnimalCard = require('../../components/AnimalCard');

router.post('/', async (req, res) => {
  try {
    
    let user = res.locals.user
    const { name, description } = req.body;
    console.log(req.body,'111');
    const file = req.files.url;
    console.log(file, '----');
    if (user){

    if (name.trim() && file.trim() && description.trim()) {
      const animal = await Animal.create({ name, description });
      if(file.length) {
        const arrUrl = await Promise.all(
          file.map( async (el) => await fileupload(el)))
        await Promise.all(
        arrUrl.map( async (el) => await Img.create({url: el, animalId:animal.id}) ))
      } else {
        const picture = await fileupload(file)
        await Img.create({url: picture, animalId:animal.id})
       }
      const newAnimal = await Animal.findOne({ where: { id: animal.id }, include: {model: Img} });
      const html = res.renderComponent(AnimalCard, { animal: newAnimal }, { doctype: false });
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
    const {  name, description } = req.body;
    if(user){
    if (name && description) {
      const animal = await Animal.update(
        { name, description },
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







