function renderScoringButtons() {
    $("#question-modal-show-answer").click(() => {
        $("#question-modal-actions").hide();
        $("#scoring").show();
    });
    $("#correct-button").click(() => correctOnClick(currentQuestion.value));
    $("#wrong-button").click(() => wrongOnClick(currentQuestion.value));
    $("#score").show(); 
}

function correctOnClick(value) {
    let currentScore = parseInt($("#current-score").html().replace(/[^0-9.-]+/g,""));
    let newScore = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(currentScore + value);
    $("#current-score").html(newScore);
    $(".score-button").prop("disabled", true);
    hideQuestionPopup();
}

function wrongOnClick(value) {
    let currentScore = parseInt($("#current-score").html().replace(/[^0-9.-]+/g,""));
    let newScore = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(currentScore - value);
    $("#current-score").html(newScore);
    $(".score-button").prop("disabled", true);
    hideQuestionPopup();
}

$('#question-modal').on('hidden.bs.modal', function () {
    $(currentQuestion.element).addClass('disabled-question-cell').removeClass('question-cell').unbind().html("");
    $(".score-button").prop("disabled", false);
    $("#question-modal-actions").show();
    $("#scoring").hide();
})
