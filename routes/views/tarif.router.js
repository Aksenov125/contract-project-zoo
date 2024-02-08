const TarifPageList = require("../../components/TarifPageList");
const UpdateFormTarifs = require("../../components/UpdateFormTarifs");
const { Tarif } = require("../../db/models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const tarifs = await Tarif.findAll({order: [['id', 'ASC']]})
    const html = res.renderComponent(TarifPageList, { title: "", tarifs });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});
router.get("/:tarifId", async (req, res) => {
  try {
    const {tarifId} = req.params
    const tarifs = await Tarif.findOne({where:{id:tarifId }})
    const html = res.renderComponent(UpdateFormTarifs, { title: "", tarifs });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
