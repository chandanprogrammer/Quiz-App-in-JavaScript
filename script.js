const questions = [
    {
        'que': 'How many sizes of headers are available in HTML by default?',
        'a': '5',
        'b': '1',
        'c': '3',
        'd': '6',
        'correct': 'd'
    },
    {
        'que': 'What is the smallest header in HTML by default?',
        'a': 'h1',
        'b': 'h2',
        'c': 'h6',
        'd': 'h4',
        'correct': 'c'
    },
    {
        'que': 'How to create an ordered list in HTML?',
        'a': '<ul>',
        'b': '<ol>',
        'c': '<href>',
        'd': '<b>',
        'correct': 'b'
    },
]
let index = 0;
let totalQue = questions.length;
let rightQue = 0;

const question = document.getElementById('question');
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index == totalQue) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    question.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        rightQue++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <div style="text-align: center">
    <h2> Thank You for Playing the Quiz. </h2>
    <h3> ${rightQue}/${totalQue} are correct answer. </h3>
    </div>
    `;
}

loadQuestion();


