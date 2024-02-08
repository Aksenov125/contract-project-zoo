const updateAnimal = document.querySelector(".updateAnimal");
// console.log(updateAnimal);
if (updateAnimal) {
  // console.log(updateAnimal);
  updateAnimal.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { picture, name, description } = e.target;
    console.log(description.value);
    const { id } = e.target.dataset;

    const res = await fetch(`/api/animals/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        picture: picture.value,
        name: name.value,
        description: description.value,
      }),
    });
    const data = await res.json();
    console.log(data);
    if ("animal" in data && data.animal[0]) {
      window.location.assign("/animals");
    } else if ("message" in data) {
      document.querySelector(".errUpdateAnimal").innerHTML = data.message;
    } else {
      document.querySelector(".errUpdateAnimal").innerHTML =
        "Извините, сервер недоступен";
    }
  });
}
