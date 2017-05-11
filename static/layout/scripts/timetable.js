$(document).ready(function(){
	$(".yeartable").click(function(){
		yearOfStudy = $(this).text();
		filename = yearOfStudy[0]+"Year.html"
		$.ajax({
				type:"GET",
				url:"static/timetable/autumn/"+filename,
				success: function(data){
					$(".timetable").html(data);
				}});
		$(".timetable").css("display", "block");
	});
});