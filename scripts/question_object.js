function question(category, question, answer, value) {
    return {
        category: category,
        question_text: question,
        answer_text: answer,
        value: value
    };
}

let questions = [
    question("Robots", "What is a robot?", "A human-like machine", 100),
]

function my_onclick(question) {
    $('#question-modal #question-modal-title').html(question.category + " - $" + question.value);
    $('#question-modal #question-modal-text').html(question.question_text);
    $('#question-modal #question-modal-actions #question-modal-show').click(click_show(question));
    $('#question-modal').modal('show');
}

function click_show(question) {
    return function () {
        $('#question-modal #question-modal-text').html(question.answer_text);
        $('#question-modal #question-modal-actions #question-modal-show').html("Close");
        $('#question-modal #question-modal-actions #question-modal-show').click(() => $('#question-modal').modal('hide'));
    }
}