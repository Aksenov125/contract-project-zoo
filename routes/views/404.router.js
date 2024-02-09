const router = require("express").Router();
const Page404 = require("../../components/page404");


router.get("/", (req, res) => {
  const html = res.renderComponent(Page404 , { title: "404" });
  res.send(html);
});

module.exports = router;