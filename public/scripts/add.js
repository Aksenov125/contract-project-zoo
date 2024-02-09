const addAnimal = document.querySelector('.addAnimal');
const animalList = document.querySelector('.animalsList');
if (addAnimal) {
  addAnimal.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, picture, description } = e.target;
    const formData = new FormData()
    const picturesData = [...picture.files]
    picturesData.forEach((url)=> {
      formData.append('url', url)
    })
    formData.append('name', name.value);
    formData.append('description', description.value);
    const res = await fetch('/api/animals', {
      method: 'POST',
      body: formData,
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
