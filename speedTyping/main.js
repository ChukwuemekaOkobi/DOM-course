/**
 * Building a simple speed typing game 
 * 
 */

let time= 5; 
let score = 0; 
let isPlaying = false; 
let currentWord;
let interval; 


let input = document.querySelector('#input'); 

let scorelabel = document.querySelector('#score');

let timelabel = document.querySelector('#time'); 

let word = document.querySelector('#word'); 



let message = document.querySelector('#message');

let startButton = document.querySelector('#start'); 


window.addEventListener('load', init); 
startButton.addEventListener('click',  Start);


function init()
{
   time = 5; 
   score = 0; 
   updateDisplay(); 

   timelabel.style.color = "#ffffff";
   word.style.color = "#00ff10";
   isPlaying = false;
   input.disabled  = true;
   input.value = "";
}

function Start()
{
     init();
     displayWord();
     input.disabled = false;

     clearInterval(interval);

}


//add listener to the word
input.addEventListener('input', async (e) => {

    let text = e.target.value; 

    if(isPlaying == false)
    {
       //start timer when user starts typing
       await game();
       isPlaying = true;
    }
    

    if(text === currentWord)
    {
       displayWord();

       //reset the time
       time = 5;
       e.target.value = "";
       score++; 

       updateDisplay();
     
    }
    else if(time == 0)
    {
      endGame();
    }



}); 


//set timer 

async function game()
{

   interval =  setInterval( () => {
     
      time--; 

      if(time <= 0)
      {
        endGame();
      }
     updateDisplay();

   },1000);
  
   
}


function updateDisplay()
{
   timelabel.innerHTML = time;
   scorelabel.innerHTML = score;
}



function endGame()
{
   word.style.color= "#ff0000";
   timelabel.style.color = "#ff0000";
   word.innerHTML = "GAME OVER";
   time = 0;
   isPlaying = false;
   input.disabled = true;
}


const displayWord =  () => 
{
   //using promise 
    randomText().then(function(data){ 
      
      word.innerHTML = "";
      currentWord = data;
      word.innerHTML = currentWord;
    })

}

//gets a random text from the list of words. 
const randomText = async ()  =>
{
   //get data from json 
   let response  = await fetch('data.json');
   let words = await response.json(); 

   let wordList = words.words; 

   let max = wordList.length; 

   let index = Math.floor(Math.random() * max); 

   return wordList[index]; 
}


