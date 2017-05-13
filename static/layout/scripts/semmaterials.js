$(document).ready(function(){
	
	$(".semmaterials").click(function(){
		$(".hide").hide();
		$(".materialselect").show();
	});

/*	$(".level1 button").click(function(){
		$(".level1 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
		$(this).css({"backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)"});
		$(".materialselect .level2").show();
		$(".materialselect .level3").hide();
	});*/

/*	$(".level2 button").click(function(){
		$(".level2 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
		$(this).css({"backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)"});
		$(".materialselect .level3").show();
	});*/

	$("#closematerialselect").click(function(){
		$(".level1 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
		$(".level2 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
		$(".materialselect .level3").hide();
		$(".materialselect .level2").hide();
		$(".hide").show();
		$(".materialselect").hide();
	});

	var buttoncontent;

	$(".materialselect button").hover(function(){
		buttoncontent = $(this).html();
		$(this).html("<button class=\"tempbuttons\">Download</button><button class=\"tempbuttons\">Open</button>");
		$(".tempbuttons").css({"width":"50%", "backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)", "margin":"0px 0px 0px 0px"});
		$(".tempbuttons").click(function(){
			if($(this).text()=="Download"){
			/*A download request would be sent here*/
				alert("Downloading");
				if(0 < buttoncontent[0] && buttoncontent[0] < 10){
					$(".level3 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
					$(".level2 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
					$(".level1 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
					$(".materialselect .level3").hide();
					$(".materialselect .level2").hide();
					$(this).parent().css({"backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)"});	
				}
				else if (buttoncontent=="Assignments"||buttoncontent=="Books"||buttoncontent=="Notes"||buttoncontent=="Question Papers"){
						$(".level3 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
						$(this).parent().css({"backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)"});
					}
					else{
						$(".level3 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
						$(".level2 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
						$(this).parent().css({"backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)"});
						$(".materialselect .level3").hide();
					}
			}
			else{
				if(0 < buttoncontent[0] && buttoncontent[0] < 10){
					$(".level1 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
					$(".level2 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
					$(".level3 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
					$(this).parent().css({"backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)"});
					
					var sublistno = buttoncontent[0];
					if(buttoncontent[0]==1){			//Different cases for first and tenth semester, both have 1 as buttoncontent[0]
						if(buttoncontent[1]==0){
							sublistno = "10";
						}
						else{
							sublistno = "1";
						}
					}

					/*$.ajax({
					type:"GET",
					url:"static/subjectlist/sem"+sublistno+".html",
						success: function(data){
						$(".level2").html(data);
					}});*/
					
					$(".materialselect .level2").show();
					$(".materialselect .level3").hide();
					}
				else{
					if(buttoncontent=="Assignments"||buttoncontent=="Books"||buttoncontent=="Notes"||buttoncontent=="Question Papers"){
						$(".level3 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
						$(this).parent().css({"backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)"});
					}
					else{
						$(".level2 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
						$(".level3 button").css({"backgroundColor":"#562351", "borderStyle":"none", "color":"white"});
						$(this).parent().css({"backgroundColor":"white", "border":"1px solid rgb(71,71,71)", "color":"rgb(71,71,71)"});
						$(".materialselect .level3").show();
					}
				}
			}
	});
	}, function(){
		$(this).html(buttoncontent);
	});
});