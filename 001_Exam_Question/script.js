function checkAnswers() {
    const form = document.getElementById('examForm');
    const answers = {
        q1: 'b', // The correct answer for question 1
        q2: 'a', // The correct answer for question 2
        // Add more answers for other questions here
    };
    let score = 0;

    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        if (element.type === 'radio' && element.checked) {
            const name = element.name;
            const value = element.value;

            if (answers[name] === value) {
                score++;
            }
        }
    }

    // const resultElement = document.getElementById('result');
    // resultElement.innerHTML = `Your score: ${score} out of ${Object.keys(answers).length}`;

    document.getElementById('result').innerHTML = `Your score: ${score} out of ${Object.keys(answers).length}`;
}
