function initCarousel(){function a(){for(f=(f+1)%e,i=0;i<e;i++)i==f?d.eq(i).children("img").removeClass("hidden"):d.eq(i).children("img").addClass("hidden")}function b(){for(clearInterval(h),f=(f+1)%e,i=0;i<e;i++)i==f?d.eq(i).children("img").removeClass("hidden"):d.eq(i).children("img").addClass("hidden");h=setInterval(function(){a()},g)}function c(){for(clearInterval(h),f=(f+1)%e,i=0;i<e;i++)i==f?d.eq(i).children("img").removeClass("hidden"):d.eq(i).children("img").addClass("hidden");h=setInterval(function(){a()},g)}var d=$(".panes").children(),e=d.length,f=0,g=6e3,h=setInterval(function(){a()},g);$("#prev").click(function(){c()}),$("#next").click(function(){b()})}$(document).ready(function(){initCarousel()}),$(window).scroll(function(){var a=300,b=window.pageYOffset||document.documentElement.scrollTop;b>=a?$("header").addClass("shrunk"):$("header").removeClass("shrunk");var c=$("header nav").children("a"),d=$("main").children("section").not("#summary"),e=d.length;if(b>=$(document).height()-$(window).height())$("header nav a").removeClass("currentSection"),c.eq(e-1).addClass("currentSection");else for(i=0;i<e-1;i++)b>=d.eq(i).offset().top-60&&($("header nav a").removeClass("currentSection"),c.eq(i).addClass("currentSection"));b<d.eq(0).offset().top-60&&$("header nav a").removeClass("currentSection")}),$("#button").click(function(){$("html, body").animate({scrollTop:$("#myDiv").offset().top},2e3)}),$("header nav a").click(function(){$("html, body").animate({scrollTop:$("#"+$(this).text()).offset().top-60},1e3,"easeInOutCubic")}),$("header h1").click(function(){$("html, body").animate({scrollTop:0},1e3,"easeInOutCubic")});