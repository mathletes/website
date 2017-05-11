$(document).ready(function(){
	
	$(".semmaterials").click(function(){
		$(".hide").hide();
		$(".materialselect").show();
	});

	$(".level1 button").click(function(){
		$(".level1 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
		$(this).css({"backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)"});
		$(".materialselect .level2").show();
		$(".materialselect .level3").hide();
	});

	$(".level2 button").click(function(){
		$(".level2 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
		$(this).css({"backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)"});
		$(".materialselect .level3").show();
	});

	$("#closematerialselect").click(function(){
		$(".level1 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
		$(".level2 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
		$(".materialselect .level3").hide();
		$(".materialselect .level2").hide();
		$(".hide").show();
		$(".materialselect").hide();
	});
});