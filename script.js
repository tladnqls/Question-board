// scripts.js
function postQuestion() {
    const questionInput = document.getElementById('question-input');
    const questionText = questionInput.value.trim();
    if (questionText !== "") {
        const questionList = document.getElementById('questions-list');

        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = questionText;

        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.placeholder = '답변을 입력하세요...';

        const answerButton = document.createElement('button');
        answerButton.textContent = '답변 달기';
        answerButton.onclick = () => postAnswer(answerInput, questionDiv);

        questionDiv.appendChild(questionTitle);
        questionDiv.appendChild(answerInput);
        questionDiv.appendChild(answerButton);
        questionList.appendChild(questionDiv);

        questionInput.value = "";
    }
}

function postAnswer(inputElement, questionDiv) {
    const answerText = inputElement.value.trim();
    if (answerText !== "") {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer';
        answerDiv.textContent = answerText;
        questionDiv.appendChild(answerDiv);
        inputElement.value = "";
    }
}
