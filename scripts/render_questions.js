let numCategories = categories.length;
let questionValues = [100, 200, 300, 400, 500];

/* TODO: Program the following: 
 *  Print a column of questions for each category.
 *
 * 1. Loop over each category.
 *      HINT: Loop from 0 till numCategories using a for loop.
 *      Need more help? Check out https://mzl.la/2YSY7ud or ask a volunteer.
 * 
 * 2. Inside the category loop, loop over the `questionValues` array.
 *      HINT: Use a for/of loop 
 *      Need more help? Check out https://mzl.la/3lDHxIq or ask a volunteer.
 * 
 * 3. Create an HTML string for each question. It should look like this:
 *      <div class='question'><div class='question-title'>VALUE</div></div>
 * 
 * 4. Replace VALUE in each string with the question's value.
 *      For example, the $500 question would be:
 *          <div class='question'><div class='question-title'>$500</div></div>
 *      HINT: Use the + operator on a string and a variable to join them!
 *      Need more help? Check out https://bit.ly/2EIsD3b or ask a volunteer.
 * 
 * 5. Use jQUery's append function to add your HTML string to the #questions div.
 *      HINT: Use $(tag).append(html);
 *      Need more help? Check out https://api.jquery.com/append/ or ask a volunteer.
 */
function renderQuestions() {
    for (let i = 0; i < numCategories; i++) {
        let questionHtml = "<div class='questions-column'>";
        for (let questionValue of questionValues) {
            questionHtml += "<div class='question-cell'>$" + questionValue + "</div>";
        }
        questionHtml += "</div>";
        $("#questions").append(questionHtml);
    }
}