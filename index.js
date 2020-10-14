import { QuestionAnswer } from './question-answer.js';

const burger = document.querySelector("#burger");
const body = document.querySelector("body");

burger.addEventListener ('click', verticalMenu);

body.addEventListener ('click', hideVerticalMenu);

function verticalMenu() {
    var navMenu = document.querySelector("#nav");
    navMenu.classList.toggle("nav-opened", true);
  }

function hideVerticalMenu () {
    var navMenu = document.querySelector("#nav");
    navMenu.classList.toggle ("nav-opened", false);
}
// --------- show answers -------
const questionsAnswers = document.querySelectorAll(".question-answer-container");
questionsAnswers.forEach(questionAnswer => new QuestionAnswer(questionAnswer))


// questionsAnswers.forEach(singleAnswerQuetion => {
//     const question = singleAnswerQuetion.querySelector(".question");
//     question.addEventListener('click', toggleAnswer);
// });sa

// function toggleAnswer (event) {
//     const toggledAnser = event.currentTarget.parentNode;;
//     toggledAnser.classList.toggle("opened-question-answer")
// };
// // ---------------------------------------
