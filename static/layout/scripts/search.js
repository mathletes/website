$(document).ready(function(){
	$("#searchbar").change(function(){
		query = $("#searchbar").val();
		if (query != ""){
			$("#searchdiv").slideDown(800);
			$.ajax({
				type:"POST",
				data:{'query':query},
				url:"/searchQuery",
				success: function(data){
					alert(data);
				}});
			$("#searchdiv").text("No results found for "+query);
		}
		else
			$("#searchdiv").slideUp(800);
	});
});