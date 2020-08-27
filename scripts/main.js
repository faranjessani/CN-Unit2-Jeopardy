$(function(){
    function resizeFunction() {
        var textHeight = Math.max.apply(null, ($('.category-title').map(function(){return $(this).height();})));
	    var width = Math.max.apply(null, ($('.category-title').map(function(){return $(this).parent().width();})));
	    var aspectRatioHeight = width * (9 / 16);
	    var height = Math.max(textHeight, aspectRatioHeight);
	    $('.category-title').height(height).width(width);
    };
    $(window).resize(resizeFunction);
    resizeFunction();
});