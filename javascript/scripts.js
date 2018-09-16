// JavaScript Document

// Get the video
var video = document.getElementById("myVideo");
window.onscroll = function() {fixHeader()};

var header = document.getElementById("myHeader");
//var sticky = header.offsetTop;

function scrollToFunction() {
    var elmnt = document.getElementById("myVideo");
    const btn = document.getElementById('scrollBtn');

btn.addEventListener('click', () => window.scrollTo({
  top: elmnt.offsetHeight,
  behavior: 'smooth',
}));
}
// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function VideoPlayPause() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

function fixHeader() {
	
  if (window.pageYOffset > 190) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function fixHeader() {
	
  if (window.pageYOffset > 190) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function openNav() {
		 document.getElementById("nav-menu").style.width = "0";
	document.getElementById("nav-menu").style.display = "none";
    document.getElementById("mySidenav").style.width = "250px";

	
}

function closeNav() {
  
	 document.getElementById("nav-menu").style.width = "26px";
	document.getElementById("nav-menu").style.display = "block";
	  document.getElementById("mySidenav").style.width = "0";
}