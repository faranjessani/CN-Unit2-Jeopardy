$(function() {
    function resizeFunction() {
        var textHeight = Math.max.apply(null, ($('.category-cell').map(function() { return $(this).height(); })));
        var width = Math.max.apply(null, ($('.category-cell').map(function() { return $(this).parent().width(); })));
        var aspectRatioHeight = width * (9 / 16);
        var height = Math.max(textHeight, aspectRatioHeight);
        $('.category-cell').height(height).width(width);
    };
    $(window).resize(resizeFunction);
    renderCategories();
    renderQuestions();
    resizeFunction();
    my_onclick(questions[0]);
});