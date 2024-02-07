const TarifPageList = require("../../components/TarifPageList");
const { Tarif } = require("../../db/models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const tarifs = await Tarif.findAll()
    const html = res.renderComponent(TarifPageList, { title: "", tarifs });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
