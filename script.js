"use strict";

const questions = [
  {
    question: "What country has the highest life expectancy?",
    options: ["Chinese", "England", "USA", "France", "Hong Kong"],
    answer: 4,
  },
  {
    question: "Who has won the most total Academy Awards?",
    options: [
      "Brad Pitt",
      "Robert Junior",
      "Walt Disney",
      "Drake",
      "Jenifer Lopez",
    ],
    answer: 2,
  },
  {
    question: "How many letters are there in the English alphabet?",
    options: ["25", "29", "28", "26", "27"],
    answer: 3,
  },
  {
    question: "How many colors are there in a rainbow?",
    options: ["7", "6", "8", "9", "10"],
    answer: 0,
  },
  {
    question:
      "Who found out that other galaxies are further and further from the Earth?",
    options: [
      "Stephen Hawking",
      "Edwin Hubble",
      "Roger Penrose",
      "Carl Sagan",
      "Richard Feynnman",
    ],
    answer: 1,
  },
  {
    question: "Which planet has the most moons?",
    options: ["Uranus", "Jupiter", "Mars", "Saturn", "Neptun"],
    answer: 3,
  },
  {
    question: "What country has won the most World Cups?",
    options: ["Brazil", "Argentina", "Italy", "France", "Spain"],
    answer: 0,
  },
  {
    question: "What country drinks the most coffee per capital?",
    options: ["Turkey", "Finland", "England", "Spain", "Chinese"],
    answer: 1,
  },
  {
    question: "Which planet in the Milky Way is the hottest?",
    options: ["Mercury", "Mars", "Venus", "Earth", "Uranus"],
    answer: 2,
  },
  {
    question: "Aureolin is a shade of what color?",
    options: ["Blue", "Red", "Green", "Pink", "Yellow"],
    answer: 4,
  },
  {
    question:
      "Which of the following languages does NOT use gender as a part of its grammar?",
    options: ["German", "Italian", "French", "Turkish", "Greek"],
    answer: 3,
  },
  {
    question: "Which color symbolises peace?",
    options: ["Black", "Yellow", "White", "Blue", "Gray"],
    answer: 2,
  },
  {
    question: "What is the primary colors?",
    options: [
      "Red, Green, Blue",
      "White, Blue, Yellow",
      "Black, White, Gray",
      "Orange, Aqua, Purple",
      "Yellow, Green, Blue",
    ],
    answer: 0,
  },
  {
    question: "Where do penguins live?",
    options: ["Africa", "Asia", "America", "Antarctica", "Europe"],
    answer: 3,
  },
  {
    question: "How many elements are there in the periodic table?",
    options: ["110", "120", "117", "118", "119"],
    answer: 3,
  },
  {
    question: "What year did the Berlin Wall fall?",
    options: ["1981", "1980", "1990", "1989", "1988"],
    answer: 3,
  },
  {
    question: "Which one is city of Turkey?",
    options: ["Spiderman", "Batman", "Superman", "Sandman", "Ironman"],
    answer: 1,
  },
  {
    question: `Which animal is known as the "Ship of the Desert?"`,
    options: ["Mammal", "Camel", "Scorpion", "Addax", "Dromedary"],
    answer: 1,
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Mercury", "Mars", "Pluton", "Uranus", "Neptun"],
    answer: 0,
  },
  {
    question: "Who is the first computer programmer in the history?",
    options: [
      "Nicola Tesla",
      "Linus Torvalds",
      "Bill Gates",
      "Ada Lovelace",
      "Steve Jobs",
    ],
    answer: 3,
  },
  {
    question: "What is the most common surname in the United States?",
    options: ["Johnson", "Smith", "Williams", "Brown", "Jones"],
    answer: 1,
  },
  {
    question: "Who was the first woman to win a Nobel Prize, in 1903?",
    options: [
      "Ada Lovelace",
      "Elizabeth Blackwell",
      "Jane Goodall",
      "Katherine Freese",
      "Marie Curie",
    ],
    answer: 4,
  },
  {
    question: "What was Meta Platforms Inc formerly known as",
    options: ["Microsoft", "Google", "Facebook", "Twitter", "Yandex"],
    answer: 2,
  },
  {
    question: "What is the capital of Finland?",
    options: ["Helsinki", "Kouvola", "Tempere", "Lappeenranta", "Espoo"],
    answer: 0,
  },
  {
    question: "What's the biggest animal in the world?",
    options: [
      "Whale",
      "Reptiles",
      "Elephant",
      "Blue Whale",
      "Saltware Crocodile",
    ],
    answer: 3,
  },
  {
    question: "How many continents are there in the world?",
    options: ["6", "7", "8", "9", "10"],
    answer: 1,
  },
  {
    question: "Which element is said to keep bones strong?",
    options: ["Carbon", "Magnesium", "Sulfur", "Chlorine", "Calcium"],
    answer: 4,
  },
  {
    question: "What is the author of Harry Potter?",
    options: [
      "Ernest Hemingway",
      "William Shakespeare",
      "George Orwell",
      "Lewis Carroll",
      "J.K Rowling",
    ],
    answer: 4,
  },
];

const labelQuestion = document.querySelector("#label-question");
const labelTimer = document.querySelector("#label-timer");
const cardBody = document.querySelector(".card-body");
const btnsAnswer = document.querySelectorAll(".btn-answer");
const cardFooter = document.querySelector(".card-footer");
const dots = document.querySelector(".dots");
const allDot = document.querySelectorAll(".dot");
const btnsRestart = document.querySelectorAll(".btn-restart");

const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const btnTimes = document.querySelector("#btn-times");
const modalText = document.querySelector(".modal-text");

const rndQuestion = () => Math.floor(Math.random() * questions.length);

let currentQuestion,
  prevQuestions = [],
  counter = 0,
  numberCorrect = 0,
  numberWrong = 0;

const setDots = () => dots.children[counter].classList.add("bg-primary");

function showModal(title, text) {
  $(".modal").modal("show");
  [modalTitle.textContent, modalText.innerHTML] = [title, text];
}

const calcPoint = () => `
<p class="mb-0 fs-4">Number of correct answer: ${numberCorrect} 😀</p>
<p class="mb-0 fs-4">Number of wrong answer: ${numberWrong} 😏</p>
<p class="mb-0 fs-4">Your point is ${numberCorrect * 20} 🥳<p>
`;

function timer() {
  let time = 20;
  function tick() {
    labelTimer.textContent = time;
    time--;
    if (time < 0 || counter > 5) {
      btnsAnswer.forEach((btnAnswer) => (btnAnswer.disabled = true));
      time < 0
        ? showModal("TIME UP!", "You haven't replied in enough time. 😏")
        : showModal("GAME OVER", calcPoint());
      clearInterval(timerInterval);
    }
  }
  tick();
  const timerInterval = setInterval(tick, 1000);
}

function askQuestion() {
  currentQuestion = rndQuestion();
  while (prevQuestions.some((prevQuestion) => currentQuestion === prevQuestion))
    currentQuestion = rndQuestion();
  setDots();
  counter++;
  if (counter > 5) showModal("GAME OVER!", calcPoint());
  else {
    labelQuestion.textContent = questions[currentQuestion].question;
    btnsAnswer.forEach((btnAnswer, index) => {
      btnAnswer.textContent = questions[currentQuestion].options[index];
      btnAnswer.disabled = false;
      btnAnswer.className = "btn btn-light btn-answer rounded w-100 py-4 my-3";
    });
  }
  prevQuestions.push(currentQuestion);
}

(() => {
  timer();
  askQuestion();
})();

function nextQuestion() {
  setTimeout(() => askQuestion(), 500);
  btnsAnswer.forEach((btnAnswer) => (btnAnswer.disabled = true));
}

cardBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-answer")) {
    e.target.classList.remove("btn-light");
    if (
      e.target.textContent ===
      questions[currentQuestion].options[questions[currentQuestion].answer]
    ) {
      e.target.classList.add("btn-success");
      numberCorrect++;
    } else {
      e.target.classList.add("btn-danger");
      numberWrong++;
    }
    nextQuestion();
  }
});

btnsRestart.forEach((btnRestart) =>
  btnRestart.addEventListener("click", function () {
    cardFooter.classList.add("d-none");
    currentQuestion = rndQuestion();
    counter = numberCorrect = numberWrong = 0;
    allDot.forEach((dot) => dot.classList.remove("bg-primary"));
    prevQuestions = [];
    askQuestion();
    timer();
  })
);

btnTimes.addEventListener("click", function (e) {
  cardFooter.classList.remove("d-none");
});
