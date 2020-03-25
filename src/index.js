GAME_URL = "http://localhost:3000/games"
CARDS_URL = "http://localhost:3000/cards"


const SpeechRecognition  = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 


const img1 = document.querySelector(".image1")
const img2 = document.querySelector(".image2")
const startBtn = document.querySelector("#start-btn")
const questionContainer = document.querySelector("#question-container")
const nextBtn = document.querySelector("#next-btn")
const ul = document.querySelector(".letter-grid")
let round = 0

let currentUser = null;

startBtn.addEventListener("click", startGame);


nextBtn.addEventListener("click",nextRound)

function nextRound(){
  round += 1
  ul.innerText = ""
  img1.removeAttribute("src")
  img2.removeAttribute("src")

  setTimeout(() => {
    startGame();
  }, 1000)
  
}

// function endGame() {
//   fetch(/games, {
//     body: JSON.stringify({
//       user_id: currentUser.id,
//       score: score,
//       card_ids: []
//     })
//   })

// }



function startGame(){
  startBtn.setAttribute("class", "hide")
  nextBtn.setAttribute("class", "next-btn btn")
  ul.setAttribute("class", "letter-grid")
  questionContainer.removeAttribute("class", "hide")

  recognition.start();
  fetchCards().then(cards => appendCards(cards))

}




function appendCards(cards_array){
 /// round is a variable that contain a number that start from 0
  const currentCard = cards_array[round]

     appendImage(currentCard)
     appendOneCard(currentCard)

}

function appendImage(cards_Obj){

 const image1 = cards_Obj.image1
 const image2 = cards_Obj.image2

img1.setAttribute("src", image1)
img2.setAttribute("src", image2)

}


function appendOneCard(card){

letters_array = card.word.split("")

letters_array.forEach(letter => {
  const li = document.createElement("li")
  li.setAttribute("class", "block")
  ul.append(li)
  recognition.addEventListener("result", event => {
    timerLetter(letters_array, event)
  })
  
});

}



function timerLetter(letters_array, event) {

// const currentResultIndex = event.resultIndex;
// const transcript = event.results[currentResultIndex][0].transcript;

// debugger
// while (letters_array.join("") !== transcript){
//   document.body.style = "red"
// } 

  setTimeout(() => {
    const li_1 = ul.getElementsByTagName("li")[0]
  
    const let_1 = letters_array[0]
  
    li_1.innerText = let_1
  
  }, 3000)
  
  setTimeout(() => {
    const li_3 = ul.getElementsByTagName("li")[3]
  
    const let_3 = letters_array[3]
  
    li_3.innerText = let_3
  
  }, 5000)
  
  setTimeout(() => {
    const list = ul.getElementsByTagName("li")
    const last_element = ul.getElementsByTagName("li")[list.length -1]
  
    const let_last = letters_array[letters_array.length -1]
  
    last_element.innerText = let_last
    
  }, 7000)
  
  setTimeout(() => {
    ul.innerText = ""
    letters_array.forEach(letter => {
      const li = document.createElement("li")
    li.setAttribute("class", "block")
    li.innerText =letter
    ul.append(li)
    console.log(event)

    recognition.stop();
    })
  
  }, 9000)
  
  }

function fetchCards() {
return fetch(CARDS_URL)
.then(resp => resp.json())

}

