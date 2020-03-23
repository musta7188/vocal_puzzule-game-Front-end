const startBtn = document.querySelector("#start-btn")
const questionContainer = document.querySelector("#question-container")
const nextBtn = document.querySelector("#next-btn")
const ul = document.querySelector(".letter-grid")
startBtn.addEventListener("click", startGame);

function startGame(){
  startBtn.setAttribute("class", "hide")
  nextBtn.setAttribute("class", "next-btn btn")
  ul.setAttribute("class", "letter-grid")
  questionContainer.removeAttribute("class", "hide")

}


