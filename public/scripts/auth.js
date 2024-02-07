const signInForm = document.querySelector(".sign-in");
const signUpForm = document.querySelector(".sign-up");
const err = document.querySelector(".error-pass");

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
        isAdmin: true
      }),
    });
    const data = await res.json();
    if (data.message === "success") {
      window.location.assign("/");
    } else {
      alert(data.message);
    }
  });
}
console.log(123);
console.log(signUpForm);
if (signUpForm) {
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, password, password2, email} = e.target;
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
      } else {
        alert(data.message);
      }
    } else {
      err.innerHTML = "Ваши пароли не совпадают";
    }
  });
}
