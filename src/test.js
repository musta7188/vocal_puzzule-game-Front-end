
const changeUiFunction = () => {  
  if (theFlag == true) {

  createForm.id = "loginForm" ;

  changeColorFormAnimation();

  fromSignUpToSignIn();

//second create listener 
  const loginForm = document.querySelector("#loginForm")   
  
  loginForm.addEventListener("submit", (event) => {
    debugger
    event.preventDefault()
    const nameInput = event.target.elements.name.value
    const passwordInput = event.target.elements.password.value
    newPlayer(nameInput, passwordInput)
      
  })
} 
}

function newPlayer(nameInput, passwordInput) {

  const data = {
    method: "POST",
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
     },
    body: JSON.stringify({
       name: (nameInput),
      password: (passwordInput)
     })
  }

  fetch(sessionsUrl, data)
  .then(res => res.json())
  .then(changeUiFunction)///return a new player session
}

function changeColorFormAnimation(){
  const color1 = document.querySelector("#stop876") //change color to the log in choice 
  color1.style = "stop-color:rgb(0, 47, 255)"

  const color2 = document.querySelector("#stop878") //change color to the log in choice 
  color2.style = "stop-color:rgb(52, 255, 25)"

  }
function fromSignUpToSignIn() {
  h2.innerHTML = "Log In"

  signUp.innerHTML = "Log In to play the speech puzzle By Mustafa & Bryn"
   
  already.innerHTML = "you do not have an account yet? Sign Up"///add event listener

  return theFlag = false
  }
function createImage(){
  const logImg = document.createElement("img")
   logImg.remove()
  logImg.src = "https://globalforestatlas.yale.edu/sites/default/files/resize/images/holzstapel-766737_640-350x233.jpg"
  logImg.alt = "Login"
  logImg.height = "140"
  logImg.width = "140"
  imageLogPart.append(logImg)//append to the div for the image the new image created 
 }

 already.addEventListener("click", () => {
    event.preventDefault()
    changeUiFunction()
  })
