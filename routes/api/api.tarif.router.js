const router = require('express').Router();

const {Tarif } = require('../../db/models');

router.put('/:tarifsId', async (req, res) => {
    try {
    let user = res.locals.user
      const { tarifsId } = req.params;
      const { price, day, age } = req.body;
      if(user){
      if (price && day && age) {
        const tarif = await Tarif.update(
          { price, day, age },
          { where: { id: tarifsId } },
        );
        res.json({ tarif,
        message: 'ok' });
      } else {
        res.json({ message: 'Заполните все поля' });
      }
    }
    } catch ({ message }) {
      res.json({ message });
    }
  });

  module.exports = router