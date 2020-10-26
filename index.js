import { QuestionAnswer } from './question-answer.js';
import './css/index.css';
import './css/faq.css';

const burger = document.querySelector('#burger');
const body = document.querySelector('body');

burger.addEventListener ('click', verticalMenu);

body.addEventListener ('click', hideVerticalMenu);

function verticalMenu() {
    var navMenu = document.querySelector('#nav');
    navMenu.classList.toggle('nav-opened', true);
}

function hideVerticalMenu () {
    var navMenu = document.querySelector('#nav');
    navMenu.classList.toggle ('nav-opened', false);
}

// --------- show answers -------
const questionsAnswers = document.querySelectorAll('.question-answer-container');
questionsAnswers.forEach(questionAnswer => new QuestionAnswer(questionAnswer));
