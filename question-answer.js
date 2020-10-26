export class QuestionAnswer {
    constructor(questionAnswer) {
        this.questionAnswer = questionAnswer;
        const question = questionAnswer.querySelector('.question');
        question.addEventListener('click', this._toggleAnswer.bind(this));
    }

    _toggleAnswer() {
        this.questionAnswer.classList.toggle('opened-question-answer');
    }
}