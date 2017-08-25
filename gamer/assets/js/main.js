/*toogle share-popup */
var shareButton = document.querySelector('.btn--open-share'),
    sharePopup = document.querySelector('.share__popup'),
    closePopup = document.querySelector('#btn_close_popup'),
    current = 0;

if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(obj, start) {
            for (var i = (start || 0), j = this.length; i < j; i++) {
                if (this[i] === obj) { return i; }
            }
            return -1;
        }
    }

shareButton.onclick = function() {
	var classList = sharePopup.getAttribute('class').split(' ');
	if(classList.indexOf('open') >= 0) {
		classList.splice(classList.indexOf('open'), 1);
		classList = classList.join(' ');
		sharePopup.setAttribute('class', classList);
	} else {
		classList.push('open');
		classList = classList.join(' ');
		sharePopup.setAttribute('class', classList);
    }
}
closePopup.onclick = function() {
	var classList = sharePopup.getAttribute('class').split(' ');
    if(classList.indexOf('open') >= 0) {
        classList.splice(classList.indexOf('open'), 1);
        classList = classList.join(' ');
        sharePopup.setAttribute('class', classList);
    }
/* end toogle share-popup */

/*mobile slider*/
var links = document.querySelector('.prod-list__item'),
	slide = document.querySelector('.js-slide'),
	btnL = document.querySelector('.js-prev'),
	btnR = document.querySelector('.js-next');


function slideProductsOnMobile(initElement, btnL, btnR) {
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
}
slideProductsOnMobile(slide, btnL, btnR);
/*end mobile slider*/

/*fix resizing slider*/
window.addEventListener("resize", function() {
    if(window.innerWidth > 679) {
        var el = document.querySelector('.prod-list__item.js-slide');
        el.removeAttribute('style')
    }
})
};
/*END fix resizing slider*/
