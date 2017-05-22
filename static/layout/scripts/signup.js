$(document).ready(function(){
	var flagimg = true;
	var flagroll = false;
	var currentDate = new Date();
	$("#imageloader").click(function(){
		$("#userimage").trigger("click");
	});

	$("#userimage").css("display", "none");
	
	$("#userimage").change(function(){
		alert(this.files[0].type);
		var file_type = this.files[0].type;
		if (file_type=="image/png"||file_type=="image/jpeg"||file_type=="image/jpg") 
		{
			var reader = new FileReader();
			reader.onload = function(e){
				$("#imageloader").css("backgroundImage", "url("+e.target.result+")");
			};
			reader.readAsDataURL(this.files[0]);
			flagimg = true;
		}
		else
		{
			alert("Please input a valid image type.");
			flagimg = false;
			//$("#userimage").trigger("click");
		}
	});

	$('form').on('focus', '#cellno', function(e) {
    	$(this).on('wheel', function(e) {
            e.preventDefault();
        });
    });

    $("#cellno").change(function(){
    	alert($(this).val());
    	if( 1000000000<$(this).val() && $(this).val()<9999999999) alert("Working");
    	else {
    		alert("Please enter a valid number.");
    		$(this).val("");
    	}
    });

    $("#rollno").change(function(){
    	var roll_number = $(this).val();
    	if (roll_number.length == 9){
    		if(roll_number.substring(2,4).toUpperCase() == "MA")
    		{
    			var enrolledYear = Number(roll_number.substring(0,2));
    			var currentYear = currentDate.getFullYear();
    			var maxBatchStrength = 70;
    			var someYear = Number(roll_number.slice(4,6));
    			currentYear = currentYear%100;
    			if(currentYear-5 < enrolledYear && enrolledYear < currentYear+1)
    				if(Number(roll_number.slice(6))<maxBatchStrength)
    					flagroll = true;
    		}
    	}
    });

});