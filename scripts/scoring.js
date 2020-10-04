/* TODO: Program the following:
 *  Update the Jeopardy game to keep score.
 *
 * 1. Get the `#score` div to show up.
 *      HINT: Use the show() method in jQuery();
 *      Need more help? Check out https://api.jquery.com/show/ or ask a volunteer.
 * 2. Attach click handlers to `#correct-button` and `#incorrect-button` to update the score.
 *      HINT: Finish the `updateScore` helper method below first!
 *      SECOND HINT: The `currentQuestionValue`
 *      Need more help? 
 * 1. 
 * 4. Use jQUery's append function to add your HTML string to the #categories div.
 *      HINT: Use $(selector).append(html);
 *      Need more help? Check out https://api.jquery.com/append/ or ask a volunteer.
 *
 * BONUS: Make all the category names UPPERCASE.
 *      HINT: Use the toUpperCase() function.
 *      TRIVIA: Why is it called UPPERCASE? 
 *      Answer: https://bit.ly/3gOwrga
 */
// 1. Change what "question-modal-show-answer" does from showing question-modal-actions to scoring-actions.
// 2. Bind correct-button

function renderScoringButtons() {
    $("#question-modal-show-answer").click(() => {
        $("#question-modal-actions").hide();
        $("#scoring-actions").show();
    });
    $("#correct-button").click(() => addToScore());
    $("#incorrect-button").click(() => subtractFromScore());
    $("#score").show(); 
}

/* TODO: Program the following:
 *  Calculate the new score.
 *
 * 1. Get the current score using getCurrentScore().
 * 2. Compute the new score.
 *      HINT: For wrongOnClick, subtract `value` from `currentScore` and do the opposite for correctOnClick.
 * 3. Update the game with the new score.
 *      HINT: The score is in the '#current-score' span.
 * 4. Call hideQuestionPopup().
 * 
 * BONUS: Use getFormattedScore(score) to format your score before changing the text.
 *      HINT: Use the toUpperCase() function.
 *      TRIVIA: Why is it called UPPERCASE? 
 *      Answer: https://bit.ly/3gOwrga
 *
 * BONUS 2: Move the common code from addToScore and subtractFromScore to a helper function!
 *      HINT: 
*/
function subtractFromScore() {
    let currentScore = getCurrentScore();
    let newScore = getFormattedScore(currentScore - currentQuestionValue);
    $("#current-score").html(newScore);
}

function addToScore() {
    let currentScore = getCurrentScore();
    let newScore = getFormattedScore(currentScore - currentQuestionValue);
    $("#current-score").html(newScore);
}
