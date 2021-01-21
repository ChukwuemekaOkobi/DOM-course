let input = document.querySelector('#input'); 

let display = document.querySelector('#autotext');


input.addEventListener('input', async (e)=> {

    let text = e.target.value; 


    let filterText = await SearchText(text); 

     if(filterText.length === 0 || text.length === 0)
     {

        filterText = []; 
     }

    outputResult(filterText);

})

//old function declaration

async function SearchText(text)
{
  //get data from json 
  let response  = await fetch('data.json');
  let states = await response.json(); 


  //get the matches using higher order array methods 

  let matches = states.filter((state) => {
    
    const reg = new RegExp(`^${text}`, 'gi'); 

    return state.name.match(reg); 
  });


  return matches;
}

//arrow function declaration 

const outputResult = (filteredTexts) => 
{
     if(filteredTexts.length > 0)
     {
        let html = filteredTexts.map((state)=> {

            let text = `
              <div class="card card-body mb-2 mt state"> 
              <h4> ${state.name} </h4>
              <h6 class="text-primary"> ${state.capital}</h6>
              </div>
            `;
            return text;

        });

        display.innerHTML = html.join('');
     }
     else
     {
         display.innerHTML = "";
     }
}


display.addEventListener('click',(e) => {

    let target = e.target; 
    let targetParent = e.target.parentNode;  

    let classList = target.classList; 
    let salist = targetParent.classList; 

    if(classList.contains('state'))
    {
      target =   target.firstElementChild; 
    }
    else if(salist.contains('state'))
    {
       target = targetParent.firstElementChild; 
    }

    input.value = target.textContent.trim(); 

    display.innerHTML = "";
});

