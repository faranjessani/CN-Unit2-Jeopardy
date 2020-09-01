// TODO(faranjessani): Add instructions here.
function show_question_onclick(categoryIndex, questionValue) {
    let question = questions_by_category[categoryIndex][questionValue];
    $('#question-modal-title').html(categories[categoryIndex] + " - $" + questionValue);
    $('#question-modal-text').html(question.question_text);
    $('#question-modal-show-answer').click(() => show_answer_onclick(categoryIndex, questionValue)).show();
    $('#question-modal').modal('show');
    // TODO(faranjessani): Mark the question as complete, gray it out,  disable the click handler.
}

function show_answer_onclick(categoryIndex, questionValue) {
    let question = questions_by_category[categoryIndex][questionValue];
    $('#question-modal-show-answer').hide();
    $('#question-modal-text').html(question.answer_text);
}

function close_onclick() {
    $('#question-modal').modal('hide');
}
