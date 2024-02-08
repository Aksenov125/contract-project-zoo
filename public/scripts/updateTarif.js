const updateTarif = document.querySelector(".updateTarif");
// console.log(updateAnimal);
if (updateTarif) {
  // console.log(updateAnimal);
  updateTarif.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { age, price, day } = e.target;
    const { id } = e.target.dataset;


    const res = await fetch(`/api/tarifs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: age.value,
        price: price.value,
        day: day.value,
      }),
    });
    const data = await res.json();
    console.log(data.message);
    if (data.message === 'ok') {
      window.location.assign("/tarifs");
    }

  });
}
