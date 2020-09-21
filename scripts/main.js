$(function() {
    $(window).resize(resizeFunction);
    renderCategories();
    renderQuestions();
    resizeFunction();
    attachClickHandlers();
});

// function attachClickHandlers() {
//     $('.question-cell').each((index, question) => {
//         let categoryIndex = $(question).attr("data-category");
//         let value = $(question).text().replace("$", '');
//         $(question).click(() => show_question_onclick(categoryIndex, value));
//     });
// }

function resizeFunction() {
    var textHeight = Math.max.apply(null, ($('.category-cell').map(function() { return $(this).height(); })));
    var width = Math.max.apply(null, ($('.category-cell').map(function() { return $(this).parent().width(); })));
    var aspectRatioHeight = width * (9 / 16);
    var height = Math.max(textHeight, aspectRatioHeight);
    $('.category-cell').height(height).width(width);
};