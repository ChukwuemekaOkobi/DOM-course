//Building a simple modal

//get modal element 

let modal = document.getElementById('simpleModal'); 

let modalBtn = document.getElementById('modalbutton'); 

let closeBtn = document.getElementById('closebtn'); 

window.addEventListener('click', (e)=>
{

    if(e.target == modal)
    {
        modal.style.display = 'none';
    }
});


modalBtn.addEventListener('click',(e) =>{

    modal.style.display = 'block';
});


closeBtn.addEventListener('click',(e) =>
{
  modal.style.display = 'none';
});