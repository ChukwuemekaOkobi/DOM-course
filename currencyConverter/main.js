let input = document.querySelector('#input'); 

let euro = document.querySelector('#euro'); 

let pound = document.querySelector('#pound'); 

let dollar = document.querySelector('#dollar'); 

let converts = document.querySelector('#converts');

input.addEventListener('input', (e) => {

    converts.style.visibility = 'visible';

    if(input.value === "")
    {
        converts.style.visibility = 'hidden';
        return; 
    }

    let value = input.value; 

    euro.textContent = (value / 500.34).toFixed(3); 

    dollar.textContent = (value / 453.52).toFixed(3); 

    pound.textContent = (value / 523.98).toFixed(3); 

    
});