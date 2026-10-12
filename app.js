document.documentElement.classList.add("js");
(function(){
var h=document.querySelector(".site-h"),b=document.querySelector(".menu-btn"),n=document.getElementById("menu");
if(b&&n){b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});}
if(h){var f=function(){h.classList.toggle("scrolled",window.scrollY>8)};f();window.addEventListener("scroll",f,{passive:true});}
var els=document.querySelectorAll(".rv");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px"});els.forEach(function(e){io.observe(e)});}
else{els.forEach(function(e){e.classList.add("in")});}
var form=document.getElementById("form-piloto");
if(form){form.addEventListener("submit",function(e){e.preventDefault();var err=document.getElementById("error");if(!form.checkValidity()){err.hidden=false;var bad=form.querySelector(":invalid");if(bad)bad.focus();return}err.hidden=true;form.hidden=true;var g=document.getElementById("gracias");g.hidden=false;g.focus()});}
})();
