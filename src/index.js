GAME_URL = "http://localhost:3000/games"
CARDS_URL = "http://localhost:3000/cards"

const startBtn = document.querySelector("#start-btn")
const questionContainer = document.querySelector("#question-container")
const nextBtn = document.querySelector("#next-btn")
const ul = document.querySelector(".letter-grid")
const round = 0

startBtn.addEventListener("click", startGame);

function startGame(){
  startBtn.setAttribute("class", "hide")
  nextBtn.setAttribute("class", "next-btn btn")
  ul.setAttribute("class", "letter-grid")
  questionContainer.removeAttribute("class", "hide")

  fetchCards().then(cards => appendCard(cards))

}


function appendCard(cards_array){
 
  const card = cards_array[round]

appendOneCard(card)

}


function appendOneCard(card){


letters_array = card.word.split("")

letters_array.forEach(letter => {
  const li = document.createElement("li")
  li.setAttribute("class", "block")
  ul.append(li)
  
  timerLetter(letters_array)
});

}






function timerLetter(letters_array) {

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
    })
  
  }, 9000)
  
  }

function fetchCards() {
return fetch(CARDS_URL)
.then(resp => resp.json())

}

