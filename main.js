// When the user enters in text into the text area and then clicks the create button,
//  use a factory function that creates a new DOM component that has a border,
//   and includes it's own delete button.

let createButton = document.querySelector(".button")
let createForm = document.querySelector(".form")
let InputField = document.querySelector(".inputField")
let card = document.querySelector(".card")

//  submitButtonFunction = (event) => {
//     //  event.preventDefault keeps the browser from refreshing after an event or action.
//     event.preventDefault();
//      console.log(InputField.value )
//  }

createCard = (event) => {
    //  event.preventDefault keeps the browser from refreshing after an event or action.
    event.preventDefault();
     console.log(InputField.value )
    card.innerHTML += `<div class = "cardDiv">
                        <h3>${InputField.value }</h3>
                        <button class="delete" >Delete</button>
                        </div>`
 }

 deleteCard = (event) =>{
    if(event.target.className === "delete"){
        event.target.parentElement.remove();
    }
 }

            createButton.addEventListener("click", createCard)
            card.addEventListener("click", deleteCard)