const router = require("express").Router();

const SignInPage = require("../../components/SignInPage");
const SignUpPage = require("../../components/SignUpPage");
const configJWT = require("../../middleware/configJWT");

router.get("/sign-in", (req, res) => {
  const html = res.renderComponent(SignInPage, { title: "sign-in" });
  res.send(html);
});

router.get("/sign-up", (req, res) => {
  const html = res.renderComponent(SignUpPage, { title: "sign-up" });
  res.send(html);
});

router.get("/logout", (req, res) => {
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.redirect("/");
});

module.exports = router;
