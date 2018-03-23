var viewport = $(window).width();

if(viewport <= 1200) {
    $(".xl-only").remove();
}
else {
    $(".xl-hide").remove();
}

if(viewport <= 767) {
    $('video source').each(function(){
	    $(this).attr('src', '');
    });
    
    $(".desktop-only").remove();
}
else {
    $(".mobile-only").remove();
}

// This is a fallback for IE10 and earlier that don't support .remove() in vanilla js
if(window.location.href.indexOf("low-tide") > -1 && $(".service-overview").length) {
   $(".service-overview").remove();
}
    
$( function() {
	
	$.slidebars();
	
	$('#fullpage').fullpage({
	    navigation: true,
	    navigationPosition: 'right',
	    normalScrollElements: '.normal-scroll',
	    onLeave: function(){
		    var video = $(this).find(".fg-vid, .bg-fg-vid");
            if(video.length && video.hasClass("playing")){
				video.find(".vid-pause-btn").click();
            }
        }
	});
	
	
	// Setting height of Sidebar based on # of slides
	var sectionHeight = $("section.section").height() - $("header").height();
	var sectionCount = $("section.section").length;
	var sidebarHeight = sectionHeight / sectionCount;
		
	if(sectionCount > 1) {
		$("#fp-nav ul li").add("#fp-nav ul li a span").height(sidebarHeight);
		// Reposition #fp-nav so it's within #sb-site
		$("#fp-nav").remove().appendTo("#sb-site");
	}
	else {
		// Hide Scrollbar if there is only one slide
		$("#fp-nav").detach();
	}
	
	var $dropdown = $('#cd-dropdown').dropdown( {
		gutter : 0,
		stack : false,
		slidingIn : 300
	});
	
	if(viewport <= 767) {
	    $(".cd-dropdown > span").empty();
	}
	
	$('.cd-dropdown ul li').click(function() {
		if(viewport <= 767) {
			$(".cd-dropdown > span").empty();
		}
		var url = $(this).attr('data-url');
		location.assign(url);
	});
	
	$('.menu').click(function() {
		if($('html').hasClass('no-touch')) {
			$('.menu .menu-icon').toggleClass('menu-icon--close');
		}
	});
	
	$('#sb-site, .sb-site-container').click(function() {
		if($('html').hasClass('sb-active') && $('.menu .menu-icon').hasClass('menu-icon--close')) {
			$('.menu .menu-icon').removeClass('menu-icon--close');
		}
		if( $('.cd-dropdown').hasClass('cd-active') ) { // If .cd-dropdown is active
			$dropdown.close(); // close it
		}
	});
	
	$(".scroll-down-arrow").click(function() {
		$.fn.fullpage.moveSectionDown();
	});
	
	
	// Overlay toggle for Foreground Videos
	
	$(".fg-vid .vid-play-btn").click(function(e) {
		$(this).siblings("video").get(0).play();
		$(this).add(".vid-pause-btn, .pause-screen, header, .scroll-down-arrow, #fp-nav").fadeToggle("fast");
		$(e.target).parent(".fg-vid").addClass("playing");
	});
	
	$(".fg-vid .vid-pause-btn").click(function(e) {
		$(this).siblings("video").get(0).pause();
		$(this).add(".vid-play-btn, .pause-screen, header, .scroll-down-arrow, #fp-nav").fadeToggle("fast");
		$(e.target).parent(".fg-vid").removeClass("playing");
	});
	
	// Overlay toggle for Foreground Videos with looping Background Video
	
	$(".bg-fg-vid .vid-play-btn").click(function(e) {
		$(this).siblings("video.feature-vid").get(0).play();
		$(this).add(".vid-pause-btn, .pause-screen, header, .scroll-down-arrow, #fp-nav").fadeToggle("fast");
		$(e.target).parent(".bg-fg-vid").addClass("playing");
	});
	
	$(".bg-fg-vid .vid-pause-btn").click(function(e) {
		$(this).siblings("video.feature-vid").get(0).pause();
		$(this).add(".vid-play-btn, .pause-screen, header, .scroll-down-arrow, #fp-nav").fadeToggle("fast");
		$(e.target).parent(".bg-fg-vid").removeClass("playing");
	});
	
	
	// Overlay toggle for Crew Videos on About Page
	
	function playVideo() {  
	    $('video', this).get(0).play(); 
	}
	
	function pauseVideo() {
	    $('video', this).get(0).pause(); 
	}
	
	$(".crew-vid").hover( playVideo, pauseVideo );
	
	
	// Modals
	
	$('.modal').addClass("loaded");
	
	$('.share-btn').click(function() {
		$('.modal').addClass("active");
	});
	
	$('.inbound-btn').click(function() {
		$('#inbound-modal').addClass("active");
	});
	
	$('#inbound-modal form').submit(function() {
		$(".pdf-download")[0].click();
	});
	
	$('#careers-btn').click(function() {
		$('#careers-modal').addClass("active");
	});
	
	$('#contact-btn, #nav-contact-btn').click(function() {
		$('#contact-modal').addClass("active");
	});
	
	$('.close-modal').click(function() {
		$('.modal').removeClass("active");
	});
	
	
	// Dropdown Nav Flip Animation
	
	if($('.cd-dropdown').length) {
		$('.cd-dropdown').addClass('loaded');
	}
	
	
	// Slide Animations
	
	function hoverChildSlideLeft() {  
	    $('.hover-child', this).removeClass('slide-right').addClass('slide-left'); 
	}
	
	function hoverChildSlideRight() {
	    $('.hover-child', this).removeClass('slide-left').addClass('slide-right');
	}
	
	$('.hover-parent.active-slide-left').hover( hoverChildSlideLeft, hoverChildSlideRight );
	$('.hover-parent.active-slide-right').hover( hoverChildSlideRight, hoverChildSlideLeft );
	
	
	// Forms
	
	$('form input, form textarea').keyup(function() {
		var valid = true;
		$(this).parent('form').children('input[required], textarea[required]').each(function() {
			if($(this).prop("value") == "" || $(this).siblings('input[class="hidden"]').prop("value") != "") {
				valid = false;
			}
		});
		if(valid == false) {
			$(this).siblings('input[type="submit"]').prop("disabled", true);
		}
		else {
			$(this).siblings('input[type="submit"]').prop("disabled", false);
		}
	});
	
	$('.inbound-form').submit(function() {
		window.location.assign("/success/resources.html");
	});
	
	$('.careers-form').submit(function() {
		window.location.assign("/success/careers.html");
	});
	
	// Refresh When Resizing Past Breakpoint
	
	var timer;
	
	$(window).resize(function() {
	    clearTimeout(timer);
	    timer = setTimeout(doneResizing, 500);
	});
	 
	 
	function doneResizing(){
	    var newViewport = $(window).width();

		if(viewport > 1200 && newViewport <= 1200 || viewport > 920 && newViewport <= 920 || viewport > 767 && newViewport <= 767 || viewport <= 1200 && newViewport > 1200 || viewport <= 920 && newViewport > 920 || viewport <= 767 && newViewport > 767) {
			window.location.reload();
		}
	}
});	