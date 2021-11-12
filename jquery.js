$(document).ready(function() {

var button1 = document.getElementById("button1"); // Get div ID "button1".

var unclickable = function(e) {	// Make Navigation Links unclickable when opacity is 0.
	if ($(this).css('opacity')==0) e.preventDefault();
	};	

var navcursor = function(event) { // TESTING TO MAKE BUTTON CURSOR DEFAULT
	event.preventDefault();
	if ($(".navlink").css('opacity') == 0) {
			$(".navlink").css('cursor', 'default');
	}
};

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

// Start of Nav Button Highlight.
	$(".navbuttonmain").click(function() {
		if ($(this).css("opacity") == 1) {
			$(this).animate({opacity:0.5}, 0);
		} else{
			$(this).animate({opacity:1}, 0);
		}
	});



// Navigation Fade in and fade out.
	document.getElementById("navbutton").onclick = function() {
		button1.className = button1.className ? "" : "fade";
		button2.className = button2.className ? "" : "fade";
		button3.className = button3.className ? "" : "fade";
		button4.className = button4.className ? "" : "fade";
		}

	$("#button1").click(unclickable);
	$("#button2").click(unclickable);
	$("#button3").click(unclickable);
	$("#button4").click(unclickable);
	
	// $("#button1").mouseover(navdefaultcursor); TESTING TO MAKE BUTTON CURSOR DEFAULT

//Start of Gallery Fade.	
	
	$(".yearbox1").click(function(e){    
		$("#containalbums, #year1").fadeOut("fast", function(){
			$("#year1album, #backbutton").fadeIn("slow");
		});
	});

	$("#backbutton").click(function(e){    
		$("#year1album, #backbutton").fadeOut("fast", function(){
			$("#containalbums, #year1").fadeIn("slow");
		});
	});

//YEAR 1 END

	$(".yearbox2").click(function(e){    
		$("#containalbums, #year2").fadeOut("fast", function(){
			$("#year2album, #backbutton").fadeIn("slow");
		});
	});

	$("#backbutton").click(function(e){    
		$("#year2album, #backbutton").fadeOut("fast", function(){
			$("#containalbums, #year2").fadeIn("slow");
		});
	});

// YEAR 2 END

	$(".yearbox3").click(function(e){    
		$("#containalbums, #year3").fadeOut("fast", function(){
			$("#year3album, #backbutton").fadeIn("slow");
		});
	});

	$("#backbutton").click(function(e){    
		$("#year3album, #backbutton").fadeOut("fast", function(){
			$("#containalbums, #year3").fadeIn("slow");
		});
	});


// YEAR 3 END

	
// MUSIC BUTTONS
	
$("#albumcontainer1").hover(function(){
    $("#interim").stop().animate({"opacity": "0.5"});
},function(){
    $("#interim").stop().animate({"opacity": "1"});
});


$( "#albumcontainer1" ).hover(function() {
		$( "#buttons1" ).slideToggle( "fast", function() {
  });
});

$("#albumcontainer2").hover(function(){
    $("#fragments").stop().animate({"opacity": "0.5"});
},function(){
    $("#fragments").stop().animate({"opacity": "1"});
});


$( "#albumcontainer2" ).hover(function() {
		$( "#buttons2" ).slideToggle( "fast", function() {
  });
});

function randomlinks() {
    var myrandom = Math.round(Math.random() * 2)
    var links = new Array()
    links[0] = "https://www.instagram.com/p/CWCeVWxBmYC/"
    links[1] = "https://www.instagram.com/p/CV1SHEphSB1/"
    links[2] = "https://www.instagram.com/p/CVokhk3hSNi/"

    window.location = links[myrandom]
};
	
});


