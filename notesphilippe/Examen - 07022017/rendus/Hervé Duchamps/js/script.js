$(function() {
	$(".description").on("mouseover", function() {
		$("#tete").css({
			"background":"#061339",
		});
	});
	$(".description").on("mouseout", function() {
		$("#tete").css({
			"background":"#7885A5",
		});
	});
});

