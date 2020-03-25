
// const changeUiFunction = () => {  
//   if (theFlag == true) {

//   createForm.id = "loginForm" ;

//   changeColorFormAnimation();

//   fromSignUpToSignIn();

// //second create listener 
//   const loginForm = document.querySelector("#loginForm")   
  
//   loginForm.addEventListener("submit", (event) => {
//     debugger
//     event.preventDefault()
//     const nameInput = event.target.elements.name.value
//     const passwordInput = event.target.elements.password.value
//     newPlayer(nameInput, passwordInput)
      
//   })
// } 
// }

// function newPlayer(nameInput, passwordInput) {

//   const data = {
//     method: "POST",
//      headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//      },
//     body: JSON.stringify({
//        name: (nameInput),
//       password: (passwordInput)
//      })
//   }

//   fetch(sessionsUrl, data)
//   .then(res => res.json())
//   .then(changeUiFunction)///return a new player session
// }

// function changeColorFormAnimation(){
//   const color1 = document.querySelector("#stop876") //change color to the log in choice 
//   color1.style = "stop-color:rgb(0, 47, 255)"

//   const color2 = document.querySelector("#stop878") //change color to the log in choice 
//   color2.style = "stop-color:rgb(52, 255, 25)"

//   }
// function fromSignUpToSignIn() {
//   h2.innerHTML = "Log In"

//   signUp.innerHTML = "Log In to play the speech puzzle By Mustafa & Bryn"
   
//   already.innerHTML = "you do not have an account yet? Sign Up"///add event listener

//   return theFlag = false
//   }
// function createImage(){
//   const logImg = document.createElement("img")
//    logImg.remove()
//   logImg.src = "https://globalforestatlas.yale.edu/sites/default/files/resize/images/holzstapel-766737_640-350x233.jpg"
//   logImg.alt = "Login"
//   logImg.height = "140"
//   logImg.width = "140"
//   imageLogPart.append(logImg)//append to the div for the image the new image created 
//  }

//  already.addEventListener("click", () => {
//     event.preventDefault()
//     changeUiFunction()
//   })





  // setTimeout(() => {
  //   const li_1 = ul.getElementsByTagName("li")[0]
  
  //   const let_1 = letters_array[0]
  
  //   li_1.innerText = let_1
  
  // }, 3000)
  
  // setTimeout(() => {
  //   const li_3 = ul.getElementsByTagName("li")[3]
  
  //   const let_3 = letters_array[3]
  
  //   li_3.innerText = let_3
  
  // }, 5000)
  
  // setTimeout(() => {
  //   const list = ul.getElementsByTagName("li")
  //   const last_element = ul.getElementsByTagName("li")[list.length -1]
  
  //   const let_last = letters_array[letters_array.length -1]
  
  //   last_element.innerText = let_last
    
  // }, 7000)
  
  // setTimeout(() => {
  //   ul.innerText = ""
  //   letters_array.forEach(letter => {
  //     const li = document.createElement("li")
  //   li.setAttribute("class", "block")
  //   li.innerText =letter
  //   ul.append(li)
  //   console.log(event)

  //   recognition.start();
  //   })
  
  // }, 9000)