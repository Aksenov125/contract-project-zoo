const router = require("express").Router();

const {Animal} = require('../../db/models')

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