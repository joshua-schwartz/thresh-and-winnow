$( function() {
	$('.subcat-scroll-btn').click(function() {
		$.fn.fullpage.moveSectionDown();
	});
	
	// Dealing with button active styles and switching out whole subcategories
	
	$('#subcat-1-btn, #subcat-1-scroll-btn').click(function() {
		$('.subcat-btn').removeClass("active");
		$('#subcat-1-btn').addClass("active");
		$(".services-subcat").hide();
		$("#subcat-1").show();
	});
	
	$('#subcat-2-btn, #subcat-2-scroll-btn').click(function() {
		$('.subcat-btn').removeClass("active");
		$('#subcat-2-btn').addClass("active");
		$(".services-subcat").hide();
		$("#subcat-2").show();
	});
	
	$('#subcat-3-btn, #subcat-3-scroll-btn').click(function() {
		$('.subcat-btn').removeClass("active");
		$('#subcat-3-btn').addClass("active");
		$(".services-subcat").hide();
		$("#subcat-3").show();
	});
	
	$('#subcat-4-btn, #subcat-4-scroll-btn').click(function() {
		$('.subcat-btn').removeClass("active");
		$('#subcat-4-btn').addClass("active");
		$(".services-subcat").hide();
		$("#subcat-4").show();
	});
	
	// Dealing with button active styles and switching out individual content pages within a subcategory
	
	$('#subcat-1-btn-1').click(function() {
		$('#subcat-1 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-1 .subcat-content").removeClass("active");
		$("#subcat-1-content-1").addClass("active");
	});
	
	$('#subcat-1-btn-2').click(function() {
		$('#subcat-1 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-1 .subcat-content").removeClass("active");
		$("#subcat-1-content-2").addClass("active");
	});
	
	$('#subcat-1-btn-3').click(function() {
		$('#subcat-1 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-1 .subcat-content").removeClass("active");
		$("#subcat-1-content-3").addClass("active");
	});
	
	$('#subcat-2-btn-1').click(function() {
		$('#subcat-2 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-2 .subcat-content").removeClass("active");
		$("#subcat-2-content-1").addClass("active");
	});
	
	$('#subcat-2-btn-2').click(function() {
		$('#subcat-2 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-2 .subcat-content").removeClass("active");
		$("#subcat-2-content-2").addClass("active");
	});
	
	$('#subcat-2-btn-3').click(function() {
		$('#subcat-2 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-2 .subcat-content").removeClass("active");
		$("#subcat-2-content-3").addClass("active");
	});
	
	$('#subcat-3-btn-1').click(function() {
		$('#subcat-3 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-3 .subcat-content").removeClass("active");
		$("#subcat-3-content-1").addClass("active");
	});
	
	$('#subcat-3-btn-2').click(function() {
		$('#subcat-3 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-3 .subcat-content").removeClass("active");
		$("#subcat-3-content-2").addClass("active");
	});
	
	$('#subcat-3-btn-3').click(function() {
		$('#subcat-3 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-3 .subcat-content").removeClass("active");
		$("#subcat-3-content-3").addClass("active");
	});
	
	$('#subcat-4-btn-1').click(function() {
		$('#subcat-4 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-4 .subcat-content").removeClass("active");
		$("#subcat-4-content-1").addClass("active");
	});
	
	$('#subcat-4-btn-2').click(function() {
		$('#subcat-4 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-4 .subcat-content").removeClass("active");
		$("#subcat-4-content-2").addClass("active");
	});
	
	$('#subcat-4-btn-3').click(function() {
		$('#subcat-4 .btn-rnd-row button').removeClass("active");
		$(this).addClass("active");
		$("#subcat-4 .subcat-content").removeClass("active");
		$("#subcat-4-content-3").addClass("active");
	});
	
	// Modals
	
	$('#subcat-1-modal-btn-1').click(function() {
		$('#subcat-1-modal-1').addClass("active");
	});
	
	$('#subcat-1-modal-btn-2').click(function() {
		$('#subcat-1-modal-2').addClass("active");
	});
	
	$('#subcat-1-modal-btn-3').click(function() {
		$('#subcat-1-modal-3').addClass("active");
	});
	
	$('#subcat-2-modal-btn-1').click(function() {
		$('#subcat-2-modal-1').addClass("active");
	});
	
	$('#subcat-2-modal-btn-2').click(function() {
		$('#subcat-2-modal-2').addClass("active");
	});
	
	$('#subcat-2-modal-btn-3').click(function() {
		$('#subcat-2-modal-3').addClass("active");
	});
	
	$('#subcat-3-modal-btn-1').click(function() {
		$('#subcat-3-modal-1').addClass("active");
	});
	
	$('#subcat-3-modal-btn-2').click(function() {
		$('#subcat-3-modal-2').addClass("active");
	});
	
	$('#subcat-3-modal-btn-3').click(function() {
		$('#subcat-3-modal-3').addClass("active");
	});
	
	$('#subcat-4-modal-btn-1').click(function() {
		$('#subcat-4-modal-1').addClass("active");
	});
	
	$('#subcat-4-modal-btn-2').click(function() {
		$('#subcat-4-modal-2').addClass("active");
	});
	
	$('#subcat-4-modal-btn-3').click(function() {
		$('#subcat-4-modal-3').addClass("active");
	});
});

// Waves

$(window).load(function() {
	$(".waves").animate({
		top: '-60%'
	}, 2500);
});