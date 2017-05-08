$(document).ready(function(){
	$("#searchbar").change(function(){
		query = $("#searchbar").val();
		if (query != ""){
			$("#searchdiv").slideDown(800);
			$("#searchdiv").text("No results found for "+query);
		}
		else
			$("#searchdiv").slideUp(800);
	});
});