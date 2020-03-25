///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const BASE_URL = "http://localhost:3000"///set the base of the initial url
// const PLAYERS_URL = `${BASE_URL}/players`///get all the players



 
// const createForm = document.querySelector("#createForm") //select the initial form to create the user 
 
// const imageLogPart = document.querySelector("#imageLogPart")//image div 

// const signUp = document.querySelector("#signUp")
// const h2 = document.querySelector("#h2")//sign up phrase

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 

  function createPlayer(nameInput){
    data = {
    method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                  name: (nameInput)
                })
    }

    return fetch(PLAYERS_URL, data)
    .then(res => res.json())
  
  }
 
     
    createPlayer(nameInput).then(player => {
      currentUser = player
    }) //return the new player created 
  
   


//submit button event
  
  

//clears the screen
  const createCard = () => {
  const loginForm = document.querySelector("#loginForm")
  const divRemove  = document.querySelector("#divRemove")
    divRemove.innerHTML = ""
    loginForm.remove()

    const para = document.createElement("p")

    const img1 = document.createElement("img")
    img1.src = "https://i.ya-webdesign.com/images/red-plus-png-1.png"
    img1.className =   
        // <img class="image2" src="" alt="">
        // <img class= "equal-sign" src="https://www.newharbinger.com/sites/default/files/article_assets/equal-sign-2-512.png" alt=""></img>

        divRemove.append(img1)
  }

   
  loginForm.addEventListener("submit", (event) => {
    const nameInput = event.target.elements.name.value
debugger
    event.preventDefault()
    
    if(createPlayer()){
      createCard()
    }

  })
   