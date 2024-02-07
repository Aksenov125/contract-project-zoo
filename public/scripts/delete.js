const btndelete = document.querySelector(".photo-delete");
if (btndelete) {
  btndelete.addEventListener("click", async (e) => {
    const {id} = e.target.dataset
    console.log(id);
    e.target.classList.contains("delete");
     const res = await fetch(`/photos/${id}`, {
      method: "delete",
    });
    const data = await res.json()
    if(data.message === 'ok'){
        e.target.closest('.container').remove();
    }else{
    }
  });
}
