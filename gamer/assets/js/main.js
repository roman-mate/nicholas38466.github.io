/*toogle share-popup */
var shareButton = document.querySelector('.btn--open-share'),
	sharePopup = document.querySelector('.share__popup'),
	closePopup = document.querySelector('#btn_close_popup');

	shareButton.onclick = function() {
		sharePopup.classList.toggle('open');
	}
	closePopup.onclick = function() {
		sharePopup.classList.remove('open');
	}
/* end toogle share-popup */


/*mobile slider*/
var links = document.querySelector('.prod-list__item');
var slide = document.querySelector('.js-slide');
var btnL = document.querySelector('.js-prev');
var btnR = document.querySelector('.js-next');
var current = 0;

btnR.addEventListener('click',function(){
	current++;
	if(current < 6){
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
	} else {
		current = 0;
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
	}
})

btnL.addEventListener('click',function(){
	current--;
	if(current >= 0){
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
	} else {
		current = 6 -1;
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
	}
})
/*end mobile slider*/