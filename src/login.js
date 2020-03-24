// import anime from './node_modules/animejs/lib/anime.es.js';

// const anime = require('animejs');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const BASE_URL = "http://localhost:3000"///set the base of the initial url
const PLAYERS_URL = `${BASE_URL}/players`///get all the players



 
const createForm = document.querySelector("#createForm") //select the initial form to create the user 
let theFlag = true
const imageLogPart = document.querySelector("#imageLogPart")//image div 

const signUp = document.querySelector("#signUp")
const h2 = document.querySelector("#h2")//sign up phrase

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

createForm.addEventListener("submit", (event) => {
   
  event.preventDefault()
 
  const nameInput = event.target.elements.name.value
  const passwordInput = event.target.elements.password.value
  //const changeStyle = document.querySelector("#changeStyle")
  createPlayer(nameInput, passwordInput).then(player => {
    currentUser = player
  }) //return the new player created 

})

function createPlayer(nameInput, passwordInput){
data = {
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

  return fetch(PLAYERS_URL, data)
  .then(res => res.json())
 
}



