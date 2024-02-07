const addAnimal = document.querySelector('.addAnimal');
const animalList = document.querySelector('.animalsList');
if (addAnimal) {
  addAnimal.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, img, description } = e.target;
    const res = await fetch('/api/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        img: img.value,
        description: description.value,
      }),
    });
    const data = await res.json();

    e.target.reset();
    if (data.message === 'ок') {
      animalList.insertAdjacentHTML('beforeend', data.html);
      document.querySelector('.errAnimal').innerHTML = '';
    } else {
      document.querySelector('.errAnimal').innerHTML = data.message;
    }
  });
}
