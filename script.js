
const allQuestion = document.querySelectorAll('.js-question');

allQuestion.forEach( question => {
    question.addEventListener('click', toggleHideAnswer);
})

function toggleHideAnswer({ target }) {

    const answer = target.parentNode.querySelector('.js-answer');

    answer.classList.toggle('answer-hide');

    console.log(target)

}