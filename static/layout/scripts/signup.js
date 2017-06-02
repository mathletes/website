$(document).ready(function(){
	var flagimg = true;
	var flagroll = false;
	var flagpassword = false;
	var flagfirstname = false;
	var flaglastname = false;
	var flaghometown = false;
	var flagcellno = false;
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
    	if(1000000000<$(this).val() && $(this).val()<9999999999) flagcellno = true;
    	else {
    		flagcellno = false;
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
    	if(flagroll == false)
    		$(this).val("");
    });

    $("#repassword").change(function(){
    	if($("#repassword").val()===$("#password").val())
    		flagpassword = true;
    	else 
    	{
    		flagpassword = false;
    		$("#password").val("");
    		$("#repassword").val("");
		}
    	if($("repassword").val()=="")
    		flagpassword = false;
    		alert (flagpassword);
    });

  	$(".letter").change(function(){
  		alert($(this).val());
  		var checkname = $(this).val();
  		var fieldname = $(this).attr("placeholder");
  		if (allLetter(checkname)==true)
  		{
  			if(fieldname == "First Name")
  			{
  				flagfirstname = true;
  			}
  			if(fieldname == "Last Name")
  			{
  				flaglastname = true;
  			}
  			if(fieldname == "Hometown")
  			{
  				flaghometown = true;
  			}
  		}
  		else
  		{
  			if(fieldname == "First Name")
  			{
  				flagfirstname = false;
  			}
  			if(fieldname == "Last Name")
  			{
  				flaglastname = false;
  			}
  			if(fieldname == "Hometown")
  			{
  				flaghometown = false;
  			}
  		}
  	});

  	function allLetter(inputtxt)  
  	{  
   		var letters = /^[A-Z a-z]+$/;  
   		if(inputtxt.match(letters))  
     	{  
      		return true;  
     	}  
   		else  
     	{    
     		return false;  
     	}  
  	}

    $("#submitbutton").click(function(){
      if(flagimg && flaghometown && flagroll && flagcellno && flagfirstname && flaglastname && flagpassword && flagdob && flaghall){
      }
    });  
});