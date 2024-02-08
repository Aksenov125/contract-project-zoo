const router = require("express").Router();
const AnimalPage = require("../../components/AnimalPage");
const AnimalsList = require("../../components/AnimalsList");
const { Animal, Img } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const animals = await Animal.findAll();
    const html = res.renderComponent(AnimalsList, {
      title: "животные",
      animals,
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

router.get("/:animalId", async (req, res) => {
  try {
    const { animalId } = req.params;
    const animal = await Animal.findOne({where:{id:animalId}});
    const html = res.renderComponent(AnimalPage, {
      title: "животные",
      animal,
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
