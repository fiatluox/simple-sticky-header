/*! Simple fixed nav on scroll down based on #header element's height by cara-tm.com, MIT license */
var didScroll=false,nav=document.getElementById("menu"),header=document.getElementById("header");window.onscroll=doOnScroll;function doOnScroll(){didScroll=true;}setInterval(function(){if(didScroll){didScroll=false;var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,height=header.clientHeight;
if(top>height){addClass("fixed",nav)}else if(top<=height){nav.className=nav.className.replace(" fixed","")};};},70);
