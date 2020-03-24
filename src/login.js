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
    document.body.innerHTML = ""
    
     loadGamePage()
  })







  // on successful login
const loadGamePage = () => {
  const divClassEmpty = document.createElement("div")
  const divClassContainer = document.createElement("div")
        divClassContainer.className = "container" 
  const divQuestionContainerFirst = document.createElement("div")
        divQuestionContainerFirst.className = "hide"
        divQuestionContainerFirst.id = "question-container"

        const divQuestion1 = document.createElement("div")
        divQuestion1.id = "question"
        divQuestion1.innerText = "Question 1"

        const divQuestion2 = document.createElement("div")
        divQuestion2.id = "question-container"
        divQuestion2.className = "img-grid"

          const img1 = document.createElement("img")
          img1.className = "image1"
          img1.src = ""
          img1.alt = ""

          const imgPlus = document.createElement("img")
          imgPlus.className = "plus-imag"
          imgPlus.src = "https://i.ya-webdesign.com/images/red-plus-png-1.png"
          imgPlus.alt = ""

          const img2 = document.createElement("img")
          img2.className = "image2"
          img2.src = ""
          img2.alt = ""

          const imgEqual = document.createElement("img")
          imgEqual.className = "equal-sign"
          imgEqual.src = "https://www.newharbinger.com/sites/default/files/article_assets/equal-sign-2-512.png"
          imgEqual.alt = ""

        const divLetter = document.createElement("div")
        divLetter.className = "letter-container"
          const ulLetterGrid = document.createElement("ul")
          ulLetterGrid.className ="letter-grid hide" 

        const divControls = document.createElement("div")
        divControls.className = "controls"

        const buttonStart = document.createElement("button")
        buttonStart.id = "start-btn"
        buttonStart.className = "start-btn btn"
        buttonStart.innerText = "Start"

        const buttonNext = document.createElement("button")
        buttonNext.id = "next-btn"
        buttonNext.className = "next-btn btn hide"
        buttonNext.innerText = "Next"


        divQuestion2.append(img1,imgPlus,img2,imgEqual)

        divQuestionContainerFirst.append(divQuestion1,divQuestion2)

        divLetter.append("ulLetterGrid")

        divControls.append(buttonStart,buttonNext)

        document.body.append(divClassEmpty,divClassContainer,divQuestionContainerFirst,divLetter,divControls)
 
}