// import anime from './node_modules/animejs/lib/anime.es.js';

// const anime = require('animejs');


var current = null;
document.querySelector('#name').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 900,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 900,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 900,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 900,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 900,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 900,
      easing: 'easeOutQuart'
    }
  });
});


const already = document.querySelector("#already")
const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`
const createForm = document.querySelector("#createForm") 
let theFlag = true

const sessionsUrl = `${BASE_URL}/sessions`



const changeUiFunction = () => {
      
  if (theFlag == true) {
  const labelName = document.querySelector("#labelName")
  labelName.innerText = ""
  labelName.innerText = "Name"

  const labelPassword = document.querySelector("#labelPassword")
  labelPassword.innerText = ""
  labelPassword.innerText = "Password"

  const loginButton = document.querySelector("#submit")
  loginButton.value = ""
  loginButton.value = "Login"

  const color1 = document.querySelector("#stop876")
  color1.style = "stop-color:rgb(0, 47, 255)"

  const color2 = document.querySelector("#stop878")
  color2.style = "stop-color:rgb(52, 255, 25)"

  createForm.id = "loginForm"

  const imageLogPart = document.querySelector("#imageLogPart")
  const logImg = document.createElement("img")
  logImg.remove()
  logImg.src = "https://globalforestatlas.yale.edu/sites/default/files/resize/images/holzstapel-766737_640-350x233.jpg"
  logImg.alt = "Login"
  logImg.height = "140"
  logImg.width = "140"
  imageLogPart.append(logImg)

  const h2 = document.querySelector("#h2")
  h2.remove()

  const signUp = document.querySelector("#signUp")
  signUp.innerText = "🙄 Login to play the speech puzzle  By Mustafa & Bryn"
   
  already.remove()

  theFlag = false

//second create listener 
  const loginForm = document.querySelector("#loginForm")   
  
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const nameInput = event.target.elements.name.value
    const passwordInput = event.target.elements.password.value

      fetch(sessionsUrl,{
        method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                      name: (nameInput),
                      password: (passwordInput)
                    })
      })
      .then(res => res.json())
      .then(changeUiFunction)
  })



}
  
}





//first create listener 
  createForm.addEventListener("submit", (event) => {
  event.preventDefault()
   
    const nameInput = event.target.elements.name.value
    const passwordInput = event.target.elements.password.value
    //const changeStyle = document.querySelector("#changeStyle")

    
  
      fetch(PLAYERS_URL, {
        method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                      name: (nameInput),
                      password: (passwordInput)
                    })
      })
      .then(res => res.json())
      .then(changeUiFunction)
  })



  already.addEventListener("click", () => {
    event.preventDefault()
    changeUiFunction()
  })