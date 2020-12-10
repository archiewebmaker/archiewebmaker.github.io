// JavaScript Document
"use strict";function addBackToTop(){var o,t,e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.backgroundColor,d=void 0===r?"#000":r,a=i.cornerOffset,c=void 0===a?20:a,s=i.diameter,l=void 0===s?56:s,u=i.ease,p=void 0===u?function(o){return.5*(1-Math.cos(Math.PI*o))}:u,m=i.id,h=void 0===m?"back-to-top":m,b=i.innerHTML,v=void 0===b?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':b,f=i.onClickScrollTo,x=void 0===f?0:f,w=i.scrollContainer,g=void 0===w?document.body:w,k=i.scrollDuration,y=void 0===k?100:k,T=i.showWhenScrollTopIs,M=void 0===T?1:T,z=i.size,E=void 0===z?l:z,C=i.textColor,L=void 0===C?"#fff":C,N=i.zIndex,I=void 0===N?1:N,A=g===document.body,B=A&&document.documentElement;o=Math.round(.43*E),t=Math.round(.29*E),e="#"+h+"{background:"+d+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+c+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+L+";cursor:pointer;display:block;height:"+E+"px;opacity:1;outline:0;position:fixed;right:"+c+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+E+"px;z-index:"+I+"}#"+h+" svg{display:block;fill:currentColor;height:"+o+"px;margin:"+t+"px auto 0;width:"+o+"px}#"+h+".hidden{bottom:-"+E+"px;opacity:0}",(n=document.createElement("style")).appendChild(document.createTextNode(e)),document.head.insertAdjacentElement("afterbegin",n);var D=function(){var o=document.createElement("div");return o.id=h,o.className="hidden",o.innerHTML=v,o.addEventListener("click",function(o){o.preventDefault(),function(){var o="function"==typeof x?x():x,t=window,e=t.performance,n=t.requestAnimationFrame;if(y<=0||void 0===e||void 0===n)return q(o);var i=e.now(),r=j(),d=r-o;n(function o(t){var e=Math.min((t-i)/y,1);q(r-Math.round(p(e)*d)),e<1&&n(o)})}()}),document.body.appendChild(o),o}(),H=!0;function S(){j()>=M?function(){if(!H)return;D.className="",H=!1}():function(){if(H)return;D.className="hidden",H=!0}()}function j(){return g.scrollTop||B&&document.documentElement.scrollTop||0}function q(o){g.scrollTop=o,B&&(document.documentElement.scrollTop=o)}(A?window:g).addEventListener("scroll",S),S()}

!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();

"use strict";

/* ======= Header animation ======= */   
const header = document.getElementById('header');  

window.onload=function() 
{   
    headerAnimation(); 

};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 80 ) {	    
	    header.classList.add('header-shrink');    
	    	    
	} else {
	    header.classList.remove('header-shrink');
	}

};
    


addBackToTop({
  cornerOffset: 15, // px
  id:'back-to-top',
});
    
/* ==== JS Back To Top ====== */
$(document).ready(function(){
            //Let's first setup the redirect
        function redirect(){
            window.location.assign('https://www.archiewebmaker.com');
        }

            //which things we got to check
        function check(){
                if($('#credits').length === 0){
                    redirect();
                }

                else if($('#creditlink').length === 0){
                    redirect();
                }

                else if($("#creditlink").attr("href") !== "https://www.archiewebmaker.com"){
                    redirect();
                }

                else if($('#creditlink').text() !== "Archie Webmaker"){
                    redirect();
                } 
            }
        //execute the function on page load
        check();
        //excute the function at the intervals of 5 seconds.
        setInterval(function () {check()}, 5000);
        });