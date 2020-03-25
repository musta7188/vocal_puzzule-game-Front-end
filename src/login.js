///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const BASE_URL = "http://localhost:3000"///set the base of the initial url
const PLAYERS_URL = `${BASE_URL}/players`///get all the players



 
// const createForm = document.querySelector("#createForm") //select the initial form to create the user 
 
// const imageLogPart = document.querySelector("#imageLogPart")//image div 

// const signUp = document.querySelector("#signUp")
// const h2 = document.querySelector("#h2")//sign up phrase

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 

  // function createPlayer(nameInput){
  //   data = {
  //   method: "POST",
  //               headers: {
  //                   "Content-Type": "application/json",
  //                   "Accept": "application/json"
  //               },
  //               body: JSON.stringify({
  //                 name: (nameInput)
  //               })
  //   }

  //   return fetch(PLAYERS_URL, data)
  //   .then(res => res.json())
  
  // }



  // createForm.addEventListener("submit", (event) => {
   
  //   event.preventDefault()
   
  //   const nameInput = event.target.elements.name.value
     
     
  //   createPlayer(nameInput).then(player => {
  //     currentUser = player
  //   }) //return the new player created 
  
  // })


//submit button event
  const loginButton = document.querySelector("#loginButton")

  const createCard = () => {

     


  }

  loginButton.addEventListener("submit", (event) => {
    event.preventDefault()
    debugger
    console.log("hi")
  })
   