$(function() {
	$("#panel").on("mouseenter", function(){
			//console.log("panel-event hover");
			$("#tete-chat").addClass("active");
		});
	$("#panel").on("mouseleave", function(){
		//console.log("panel-event out");
		$("#tete-chat").removeClass("btn-active");
	});
	});
