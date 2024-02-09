const signInForm = document.querySelector(".sign-in");
const signUpForm = document.querySelector(".sign-up");

if (signInForm) {
  signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, password } = e.target;
    const res = await fetch("/api/auth/sign-in", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
        isAdmin: true,
      }),
    });
    const data = await res.json();
    if (data.message === "success") {
      window.location.assign("/");
    } else if ("message" in data) {
      document.querySelector(".errtextIn").innerHTML = data.message;
    } else {
      document.querySelector(".errtextIn").innerHTML =
        "Извините, сервер недоступен";
    }
  });
}

if (signUpForm) {
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, password, password2, email } = e.target;
    console.log(name.value);
    if (password.value === password2.value) {
      const res = await fetch("/api/auth/sign-up", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
        }),
      });
      const data = await res.json();

      if (data.message === "success") {
        window.location.assign("/");
      } else if ("message" in data) {
        document.querySelector(".errtextUp").innerHTML = data.message;
      } else {
        document.querySelector(".errtextUp").innerHTML =
          "Извините, сервер недоступен";
      }
    } else {
      document.querySelector(".errtextUp").innerHTML =
        "Ваши пароли не совпадают";
    }
  });
}
