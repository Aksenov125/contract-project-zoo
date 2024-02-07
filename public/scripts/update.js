const updatephotobtn = document.querySelector(".update-photo");
if (updatephotobtn) {
    updatephotobtn.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { title, img, description } = e.target;
    const { id } = e.target.dataset;
    const res =  await fetch(`/photos/${id}`, {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify ({
        title: title.value,
        img: img.value,
        description: description.value,
      }),
    });
    console.log(res);
    const data = await res.json()
    if(data.message === 'ok'){
      window.location.assign("/photos")
    }else{
      alert(data.message)
    }

  });
}
