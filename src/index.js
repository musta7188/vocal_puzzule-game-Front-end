GAME_URL = "http://localhost:3000/games"
CARDS_URL = "http://localhost:3000/cards"
const scoreTag = document.querySelector("#score")
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const mic = document.querySelector(".mic")

recognition.interimResults = false;


mic.addEventListener("click", event => {
  recognition.start();

})




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///score logic 
////


const img1 = document.querySelector(".image1")
const img2 = document.querySelector(".image2")
const startBtn = document.querySelector("#start-btn")
const questionContainer = document.querySelector("#question-container")
const nextBtn = document.querySelector("#next-btn")
const ul = document.querySelector(".letter-grid")
let round = 0
const originalBackG= document.body.style.background
let currentUser = null;
let score = 0



///insted of the start button///input filled to get user name
startBtn.addEventListener("click", startGame);


nextBtn.addEventListener("click", nextRound)





function nextRound() {
  round += 1
  ul.innerText = ""
  img1.removeAttribute("src")
  img2.removeAttribute("src")
  document.body.style.background = originalBackG;
  setTimeout(() => {

    startGame();
  }, 1000)

}




function startGame() {
  
  scoreTag.className = "scoreOn"
  scoreTag.innerText = `Score: ${score}`

  startBtn.setAttribute("class", "hide")
  nextBtn.setAttribute("class", "next-btn btn")
  nextBtn.disabled = true;
  ul.setAttribute("class", "letter-grid")
  questionContainer.removeAttribute("class", "hide");
  

  fetchCards().then(cards => appendCards(cards))

}




function appendCards(cards_array) {
  /// round is a variable that contain a number that start from 0
  const currentCard = cards_array[round]

  scoreTag.innerText = `Score: ${score}`

  appendImage(currentCard)
  appendOneCard(currentCard)

}

function appendImage(cards_Obj) {

  const image1 = cards_Obj.image1
  const image2 = cards_Obj.image2

  img1.setAttribute("src", image1)
  img2.setAttribute("src", image2)

}


function appendOneCard(card) {

  recognition.addEventListener("result", event => {

    guess = event.results[0][0].transcript.toLowerCase().trim().replace(/\s+/g, '');
    word = card.word.toLowerCase();
  
    console.log(guess, word)

    if (guess == word) {
      displayAllLetters(true, word.split(""));
      nextBtn.disabled = false;
      score ++
    } else {
      flashBackgroundRed()
    }

  })

  letters_array = card.word.split("")

  displayEmptySquare(letters_array);
  timerLetter(letters_array);

}






function flashBackgroundRed() {
  const prevBgColor = document.body.style.background;
  document.body.style.background = "red";
  setTimeout(() => {
    document.body.style.background = prevBgColor
  }, 500)
}




 //currect has a value of true or false
function displayAllLetters(correct, letters_array) {
  if (correct) {
    document.body.style.background = "green";

    appendAllLetters(letters_array)

  } else {
    document.body.style.background = "red";
    
  }

  appendAllLetters(letters_array)
 
}




///append all the letter once the time ends or the players guess the word
function appendAllLetters(letters_array){
  ul.innerText = ""
  letters_array.forEach(letter => {
  const li = document.createElement("li")
  li.setAttribute("class", "block")
  li.innerText = letter
  ul.append(li)
  clearTimeouts();
})

}


let timeouts = []

function clearTimeouts() {
  timeouts.forEach(timeout => clearTimeout(timeout))
  timeouts = []
}


function timerLetter(letters_array) {

  const letterIndexes = [0, 3, letters_array.length - 1]

  timeouts = letters_array
    .map((letter, i) => {
      if (letterIndexes.includes(i)) {
        return setTimeout(() => {
          const li = ul.getElementsByTagName("li")[i]

          li.innerText = letter
        }, 3000 + (letterIndexes.indexOf(i) * 1000))
      }
      return false
    })
    .filter(timeout => timeout !== false)


  const finalTimeout = setTimeout(() => {
    displayAllLetters(false, letters_array);
    nextBtn.disabled = false;
  }, 9000)

  timeouts.push(finalTimeout)

}


function displayEmptySquare(letters_array) {
  letters_array.forEach(letter => {
    const li = document.createElement("li")
    li.setAttribute("class", "block")
    ul.append(li)

  });
}







function fetchCards() {
  return fetch(CARDS_URL)
    .then(resp => resp.json())

}

