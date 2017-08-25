$(document).ready(function(){

	$('#btn--open-sidebar').on('click', function(){
		$('.sidebar').toggleClass('closed');
		$(this).toggleClass('rotate');
	});

	$('#dashboard-btn').on('click', function(){
		$('.dashboard-list').toggleClass('hidden');
		$(this).toggleClass('active');
	});

	$('#layouts-btn').on('click', function(){
		$('.layouts-list').toggleClass('hidden');
		$(this).toggleClass('active');
	});

	$('#pages-btn').on('click', function(){
		$('.pages-list').toggleClass('hidden');
		$(this).toggleClass('active');
	});

	$('#message-btn').on('click', function(){
		$('.message-list').toggleClass('hidden');
		$(this).toggleClass('active');
	});

	$('.btn--mobile').on('click', function(){
		$('.sidebar').toggleClass('visible');
		$(this).toggleClass('rotate');
	});
});