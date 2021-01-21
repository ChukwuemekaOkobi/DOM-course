/* SUMMARY 
 --- Using javascript to manipulate the DOM 
*/

// let headerTitle = document.querySelector('#main-header');

// console.log(headerTitle); 

// headerTitle.style.borderBottom = 'solid 4px #ccc';


// var submit = document.querySelector('input[type="submit"]'); 

// submit.value = "ADD";

// submit.style.backgroundColor = "red";

// var item = document.querySelector('.list-group-item'); 

// item.style.backgroundColor = 'green';

// let lastitem = document.querySelector('.list-group-item:last-child'); 

// lastitem.style.color = "blue";

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');

// seconditem.style = "background-color: black; color: white;"


// let itemList = document.querySelector('#items'); 


// console.log(itemList.children);

// itemList.firstElementChild.style.backgroundColor="red";


// var newDiv = document.createElement('div'); 

// newDiv.className = 'hello'; 
// newDiv.id = 'hello'; 

// newDiv.setAttribute('title','hellow dov')

// var newDivText = document.createTextNode("Hello World"); 

// //add text to div
// newDiv.appendChild(newDivText); 
// console.log(newDiv); 

// var container = document.querySelector('header .container'); 

// var h1 = document.querySelector('.container h1'); 

// container.insertBefore(newDiv,h1); 

// var iteminput = document.querySelector('input[type="text"]'); 

// let form = document.querySelector('form'); 


// var click = document.querySelector('#click'); 

// click.addEventListener('click', (e) => {

//      console.log("button clicked"); 

//      itemList.firstElementChild.style.backgroundColor="red";

//      console.log(e.target); 
//      console.log(e.target.id); 
//      console.log(e.target.classList); 

//      //can do things base on clicks 
//      console.log(e.altKey);

//      //do actions based on event type. 
//      //click, mouse, over
// }); 


///
/** Simple adding to the dom and removing from the dom 
 * 
 */

///

var submit = document.querySelector('#submitbutton');
let itemList =document.getElementById('items'); 
var iteminput = document.querySelector('input[type="text"]'); 

var form = document.getElementById('form'); 

 form.addEventListener('submit', (e)=> {

    e.preventDefault();

    var listitem = document.createElement('li'); 
    listitem.className= 'list-group-item';
    listitem.appendChild(document.createTextNode(iteminput.value)); 

    itemList.appendChild(listitem); 
 });


 itemList.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('list-group-item'))
    {
        let li = e.target; 
      
        itemList.removeChild(li); 
    }

 });