

$(document).ready(function () {
	$(".category").click(function(){
		$("li").toggle();

	});
	$(".category").mouseenter(function(){
		$(this).css("text-decoration", "underline");
	});
	$(".category").mouseleave(function(){
		$(this).css("text-decoration", "none");
	});
		


});
