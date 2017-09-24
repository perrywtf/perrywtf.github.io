$(document).ready(function() {

// Start of Page fade in & fade out.
	$("body").fadeIn(300);


	$(".pagebutton").click(function(event) {

		event.preventDefault();

		newLocation = this.href;

		$("body").fadeOut(500, newpage);

	});

	function newpage() {

	window.location = newLocation;

	};
	
// End of Page Fade.

// Start of Nav Button Highlight.
	$(".navbuttonmain").click(function() {
		if ($(this).css("opacity") == 1) {
			$(this).animate({opacity:0.5}, 0);
		} else{
			$(this).animate({opacity:1}, 0);
		}
	});
//End of Nav Button Highlight.

// Navigation Fade in and fade out.
	var button1 = document.getElementById("button1"); 

		document.getElementById("navbutton").onclick = function() {
			button1.className = button1.className ? "" : "fade";
			button2.className = button2.className ? "" : "fade";
			button3.className = button3.className ? "" : "fade";
		}

// End of Navigation Fade.		
		
		
//Start of Album Fade.	
	
	$("#year1").click(function(e){    
		$("#containalbums, #year1").fadeOut("slow", function(){
			$("#year1album, #backbutton").fadeIn("slow");
		});
	});

	$("#backbutton").click(function(e){    
		$("#year1album, #backbutton").fadeOut("fast", function(){
			$("#containalbums, #year1").fadeIn("slow");
		});
	});

//YEAR 1 END

	$("#year2").click(function(e){    
		$("#containalbums, #year2").fadeOut("slow", function(){
			$("#year2album, #backbutton").fadeIn("slow");
		});
	});

	$("#backbutton").click(function(e){    
		$("#year2album, #backbutton").fadeOut("slow", function(){
			$("#containalbums, #year2").fadeIn("slow");
		});
	});

// YEAR 2 END

	$("#year3").click(function(e){    
		$("#containalbums, #year3").fadeOut("slow", function(){
			$("#year3album, #backbutton").fadeIn("slow");
		});
	});

	$("#backbutton").click(function(e){    
		$("#year3album, #backbutton").fadeOut("slow", function(){
			$("#containalbums, #year3").fadeIn("slow");
		});
	});


// YEAR 3 END


//End of Album Fade.
	
});


