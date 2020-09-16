// Instructions:
// #1: Read through the helper functions you have below.  Make sure you are familiar with
// what they do, you will need to use them later.
//
// #2: It looks like someone forgot to add a click handler to the jeopardy boxes!
// Check out line 80, which says "add click handler to display question".
// Call the show_question_onclick helper function here to display the question.
//
// #3: INCREMENTAL DEVELOPMENT.  Check to make sure that your code change works.
// Click on a box on the jeopardy board.  If you see a pop up with the question,
// category, and $ amount, then you're ready to move on to step 4.
//
// #4: Oh no!  It looks like the previous engineer also forgot to add a click handler
// for displaying the answer in the jeopardy box.  Check out line 49, and replace the
// console.log with the helper function that displays the answer.  It's up to you to
// identify the correct helper function.
//
// #5: INCREMENTAL DEVELOPMENT.  Check to make sure that your code change works.
// Click a square on the jeopardy board to bring up a question, then click "show answer".
// If you see the answer is displayed, then you're ready to move on.
//
// #6: Challenge!!!!! Click on a square on the jeopardy board.  Notice how the "close" button
// doesn't work!
// #7: Read through the code and identify where the click handler is added to the close button.
// #8: Call the appropriate helper function in the close button's click handler.

// This helper function uses the categoryIndex and moneyValue to return the question.
// TODO(volunteers)(remove the placeholder logic once questions are actually set up)
function getQuestion(categoryIndex, moneyValue) {
  return (
    (questions_by_category[categoryIndex] &&
      questions_by_category[categoryIndex][moneyValue]) || {
      question_text: "Question text placeholder",
      answer_text: "Answer text placeholder"
    }
  );
}

// Displays a jeopardy question.  Uses categoryIndex and question value to
// pick the correct question.
function show_question_onclick(categoryIndex, questionValue) {
  let question = getQuestion(categoryIndex, questionValue);
  $("#question-modal-title").html(
    categories[categoryIndex] + " - $" + questionValue
  );
  $("#question-modal-text").html(question.question_text);
  $("#question-modal-show-answer")
    .click(() => {
      // TODO(replace with function to display the answer)
      console.log("display answer button clicked!");
    })
    .show();

  $("#question-modal-close").click(() => {
    console.log("close button clicked");
  });
  $("#question-modal").modal("show");
}

// Hides the quesiton popup.
function hide_question_popup() {
  $("#question-modal").modal("hide");
}

// This function is the click handler for the "show answer" button.
function show_answer_onclick(categoryIndex, moneyValue) {
  let question = getQuestion(categoryIndex, moneyValue);
  $("#question-modal-show-answer").hide();
  $("#question-modal-text").html(question.answer_text);
}

// This function is called in main.js, after other parts of the page have loaded.
// Do not change the name of this function.
function attachClickHandlers() {
  $(".question-cell").each((index, questionElement) => {
    // categoryIndex is used to look up the jeopardy question for this element.
    let categoryIndex = $(questionElement).attr("data-category");
    let moneyValue = $(questionElement).text().replace("$", "");
    $(questionElement).click(() => {
      // TODO(add click handler to display question)
      // console.log("Clicked category index is:" + categoryIndex);
      // console.log("Clicked question's money value is:" + moneyValue);
    });
  });
}
