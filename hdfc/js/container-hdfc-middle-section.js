!function(){"use strict";var t=b$.bdom.getNamespace("http://backbase.com/2013/portalView").getClass("container");t.extend(function(){t.apply(this,arguments),this.isPossibleDragTarget=!0},{localName:"templateHdfcMiddleSection",namespaceURI:"templates_templateHdfcMiddleSection"},{template:function(t){var i={item:t.model.originalItem};return window[this.namespaceURI][this.localName](i)},handlers:{DOMReady:function(){var v=this,x=this.getPreference("stickyScroll"),b=$(v.htmlNode).find(".left-side-scroll-fix"),W=$(v.htmlNode).find(".right-side-scroll-fix"),N=$(v.htmlNode).find(".large-side-scroll-fix"),I=$(".sticky-footer"),P=$(".sticky-footer-generic"),A=$(".max-header-banner"),T=$(".top-lead-section"),s=$(".learning-article-container");$(window).load(function(){setTimeout(function(){var t=$(".large-side-scroll-fix .carousel-heading");if(0!=W.length&&0!=N.length&&0<t.length&&$(window).outerWidth()<768){var i=N.children().last(),e=W.children().last();0<s.length?(i.css("margin-bottom","20px"),i.insertBefore(e)):W.append(i)}},1e3)}),$(document).ready(function(){var t=0,i=0,s=0,l=0,o=0,c=0,n=window.pageYOffset,r=!1,h=!1,d=!1,a=!1,f=0,g=0,k=!1,e=0;0==T.length&&0==A.length||($(".container.breadcrum-container.needed").css("margin-top","0px"),$(window).outerWidth()<768?$("ul.breadcrumb.hdfc-portal-breadcrum.no-padding").css("margin-top","16px"):$("ul.breadcrumb.hdfc-portal-breadcrum.no-padding").css("margin-top","9px")),setTimeout(function(){var t=[];if(0==(t=$(".dynamic-position").parents(".bp-widget").toArray().reverse()).length&&(t=$(".dynamic-position").parents(".re-order-container").toArray().reverse()),$(window).outerWidth()<768&&0!=t.length)for(var l=1;l<=t.length;l++)$.each(t,function(t,i){var e=$(i).find(".dynamic-position").text().trim();if(l==e){var s=[];0==(s=$(".dynamic-position").parents(".bp-widget").toArray().reverse()).length&&(s=$(".dynamic-position").parents(".re-order-container").toArray().reverse()),$(i).insertBefore(s[l-1])}})},2e3),require(["containers/%5BBBHOST%5D/container-hdfc-middle-section/scripts/stickyfill"],function(){var t=navigator.userAgent.toLowerCase();-1!=t.indexOf("safari")&&(-1<t.indexOf("chrome")||$.browser.chrome||$.browser.safari&&parseInt($.browser.version)<602&&(r=!0));void 0!==$.browser&&($.browser.chrome&&parseInt($.browser.version.split(".")[0])<56&&(r=!0));(document.documentMode||/Edge/.test(navigator.userAgent)||navigator.userAgent.indexOf("MSIE "))&&S(),("Microsoft Internet Explorer"==navigator.appName||navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/)||void 0!==$.browser&&1==$.browser.msie)&&(h=r=!0);var i=null!=navigator.userAgent.match(/iPad/i),e=null!=navigator.userAgent.match(/iPhone/i);(i||e)&&(r=!0,W.css("transform","translate3d(0,0,0)")),0!=A.length&&(f=450),x&&(r&&(f=170),A.push("dummy")),r&&(768<=$(window).outerWidth()&&(0!=W.length&&(Stickyfill.add(W[0]),s+W.outerHeight()>window.outerHeight?W.css("top",0):Stickyfill.stickies[Stickyfill.stickies.length-1].limit.start=0),0!=N.length&&0!=W.length?(Stickyfill.add(N[0]),s+N.outerHeight()>window.outerHeight?N.css("top",0):Stickyfill.stickies[Stickyfill.stickies.length-1].limit.start=0):0!=N.length&&N.css("top",0)),960<=$(window).outerWidth()&&0!=b.length&&(Stickyfill.add(b[0]),Stickyfill.stickies[Stickyfill.stickies.length-1].limit.start=0),$(window).outerWidth()),setTimeout(function(){0==I.length&&0==P.length||"none"!=$(".sticky-footer").css("display")&&(f=60,0!=A.length&&(f=450,x&&(f=170)),g=140,k=!0),0!=W.length&&(a||(s=W.parent().offset().top),$(window).outerWidth()<768&&(d=!0),s+W.outerHeight()>window.outerHeight?2<=Stickyfill.stickies.length&&(l=W.outerHeight()-$(window).outerHeight(),c=s+W.parent().outerHeight()-$(window).outerHeight(),768<=$(window).outerWidth()&&2<=Stickyfill.stickies.length&&(Stickyfill.stickies[0].limit.end=c),l+=f,c+=f,2<=Stickyfill.stickies.length&&(l<0?(l*=-1,Stickyfill.stickies[0].css.top=l+"px"):Stickyfill.stickies[0].css.top="-"+l+"px",Stickyfill.stickies[0].limit.start=l+100+f),0===(n<=Stickyfill.stickies[0].limit.start?0:n>=Stickyfill.stickies[0].limit.end?2:1)&&(Stickyfill.stickies[0].offset.top=0)):2<=Stickyfill.stickies.length&&(Stickyfill.stickies[0].limit.end=W.parent().outerHeight()+g-W.outerHeight(),Stickyfill.stickies[0].css.top="120px",Stickyfill.stickies[0].limit.start=W.parent().offset().top-146),s+N.outerHeight()>window.outerHeight?2<=Stickyfill.stickies.length&&(l=N.outerHeight()-$(window).outerHeight(),c=s+W.parent().outerHeight()-$(window).outerHeight(),768<=$(window).outerWidth()&&2<=Stickyfill.stickies.length&&(Stickyfill.stickies[1].limit.end=c),l+=f,c+=f,2<=Stickyfill.stickies.length&&(l<0?(o=-1*l,Stickyfill.stickies[1].css.top=o+"px",Stickyfill.stickies[1].limit.start=o+80+f):(Stickyfill.stickies[1].css.top="-"+l+"px",Stickyfill.stickies[1].limit.start=l+80+f)),0===(n<=Stickyfill.stickies[1].limit.start?0:n>=Stickyfill.stickies[1].limit.end?2:1)&&(Stickyfill.stickies[1].offset.top=0)):2<=Stickyfill.stickies.length&&(Stickyfill.stickies[1].limit.end=N.parent().outerHeight()+g-N.outerHeight(),Stickyfill.stickies[1].css.top="120px",Stickyfill.stickies[1].limit.start=N.parent().offset().top-146),r||($(window).outerWidth()<768?(0!=N.length&&N.css("position","static"),0!=W.length&&W.css("position","static")):(0!=N.length&&N.css("position",""),0!=W.length&&W.css("position","")),$(window).outerWidth()<960?0!=b.length&&b.css("position","static"):0!=b.length&&b.css("position","")))},1e3)}),$(window).outerWidth()<960&&0!=b.length&&b.css("position","static"),$(window).outerWidth()<768&&0!=N.length&&N.css("position","static");$(window).on("resize",function(){r||($(window).outerWidth()<768?0!=N.length&&N.css("position","static"):0!=N.length&&N.css("position",""),$(window).outerWidth()<960?0!=b.length&&b.css("position","static"):0!=b.length&&b.css("position","")),r&&(960<=$(window).outerWidth()?0!=b.length&&(Stickyfill.add(b[0]),Stickyfill.stickies[Stickyfill.stickies.length-1].limit.start=0):0!=b.length&&Stickyfill.remove(b[0]),768<=$(window).outerWidth()?0!=W.length&&Stickyfill.stickies.length<2&&(Stickyfill.add(W[0]),Stickyfill.add(N[0])):0!=W.length&&(Stickyfill.remove(W[0]),Stickyfill.remove(N[0]),W.css("top","auto"),N.css("top","auto")))});var p=function(){0!=W.length?(r||(s=$(W[0]).parent().offset().top,a=!0,768<=$(window).outerWidth()&&d&&(s=$(W[0]).parent().offset().top),s+b.outerHeight()>window.outerHeight?(i=window.outerHeight,s+b.outerHeight()>i&&(t=b.outerHeight()-i+60+f,b.css("top",-t))):0!=b.length&&b.css("top",0),s+W.outerHeight()>window.outerHeight?(i=window.outerHeight,s+W.outerHeight()>i&&(t=W.outerHeight()-i+60+f,W.css("top",-t))):0!=W.length&&W.css("top",0),s+N.outerHeight()>window.outerHeight?N.css("top",0):0!=N.length&&N.css("top",0)),r&&768<=$(window).outerWidth()&&(a||(a=!1,k&&(e=W.outerHeight()>N.outerHeight()?W.outerHeight():N.outerHeight(),W.parent().css("height",e),W.parent().css("overflow","hidden"),960<=$(window).outerWidth()&&0!=b.length&&(Stickyfill.remove(b[0]),Stickyfill.add(b[0]),Stickyfill.stickies[Stickyfill.stickies.length-1].limit.start=0))),k||(u(),e=W.outerHeight()>N.outerHeight()?W.outerHeight():N.outerHeight(),W.parent().css("height",e),W.parent().css("overflow","hidden"),960<=$(window).outerWidth()&&0!=b.length&&(Stickyfill.remove(b[0]),Stickyfill.add(b[0]),Stickyfill.stickies[Stickyfill.stickies.length-1].limit.start=0)),n=window.pageYOffset,setTimeout(function(){0!=W.length&&(e=W.parent().outerHeight(),s=$(W[0]).parent().offset().top,768<=$(window).outerWidth()&&d&&(s=$(W[0]).parent().offset().top),s+W.outerHeight()>window.outerHeight?2<=Stickyfill.stickies.length&&(l=W.outerHeight()-$(window).outerHeight(),c=s+e-$(window).outerHeight(),768<=$(window).outerWidth()&&2<=Stickyfill.stickies.length&&(Stickyfill.stickies[0].limit.end=c,s+N.outerHeight()>window.outerHeight&&(Stickyfill.stickies[1].limit.end=c)),l+=f,0!=A.length&&(f=450,x&&(f=170)),c-=f+g,2<=Stickyfill.stickies.length&&(l<0?(l*=-1,Stickyfill.stickies[0].css.top=l+"px",Stickyfill.stickies[0].limit.start=l+100+f,x&&(Stickyfill.stickies[0].css.top=l+f+"px")):(Stickyfill.stickies[0].css.top="-"+l+"px",Stickyfill.stickies[0].limit.start=l+100+f,x&&(Stickyfill.stickies[0].css.top="-"+l-f+300+"px")))):2<=Stickyfill.stickies.length&&(Stickyfill.stickies[0].limit.end=W.parent().outerHeight()-W.outerHeight()+(W.parent().offset().top-120),Stickyfill.stickies[0].css.top="120px",Stickyfill.stickies[0].limit.start=W.parent().offset().top-120),s+N.outerHeight()>window.outerHeight?2<=Stickyfill.stickies.length&&(l=N.outerHeight()-$(window).outerHeight(),c=s+e-$(window).outerHeight(),768<=$(window).outerWidth()&&2<=Stickyfill.stickies.length&&(Stickyfill.stickies[1].limit.end=c,s+W.outerHeight()>window.outerHeight&&(Stickyfill.stickies[0].limit.end=c)),l+=f,c-=f+g,2<=Stickyfill.stickies.length&&(l<0?(o=-1*l,Stickyfill.stickies[1].css.top=o+"px",0!=A.length?(Stickyfill.stickies[1].limit.start=l+100+f,x&&(Stickyfill.stickies[1].css.top=o+f+"px")):Stickyfill.stickies[1].limit.start=o+80+g):(Stickyfill.stickies[1].css.top="-"+l+"px",0!=A.length?(Stickyfill.stickies[1].limit.start=l+100+f,x&&(Stickyfill.stickies[1].css.top=o+f+"px")):Stickyfill.stickies[1].limit.start=l+80+g))):2<=Stickyfill.stickies.length&&(Stickyfill.stickies[1].limit.end=N.parent().outerHeight()+g-N.outerHeight(),Stickyfill.stickies[1].css.top="120px",Stickyfill.stickies[1].limit.start=N.parent().offset().top-146))},300))):0!=N.length&&r&&(e=N.outerHeight(),N.parent().css("height",e),N.parent().css("overflow","hidden"),960<=$(window).outerWidth()&&0!=b.length&&(Stickyfill.remove(b[0]),Stickyfill.add(b[0]),Stickyfill.stickies[Stickyfill.stickies.length-1].limit.start=0))},u=function(){e=W.outerHeight()>N.outerHeight()?W.outerHeight():b.outerHeight()>N.outerHeight()?b.outerHeight():N.outerHeight(),W.parent().css("height",e),W.parent().css("overflow","hidden"),960<=$(window).outerWidth()&&0!=b.length&&(Stickyfill.remove(b[0]),Stickyfill.add(b[0]),Stickyfill.stickies[Stickyfill.stickies.length-1].limit.start=0)};$(window).scroll(function(){if(p(),h)var e=setInterval(function(){if(N!=$(v.htmlNode).find(".large-side-scroll-fix")){var t=$(v.htmlNode).find(".large-side-scroll-fix").height(),i=$(v.htmlNode).find(".right-side-scroll-fix").height();clearInterval(e),p(),i<t?$(".c-template-hdfc-middle-section .bp-container.HPD-template-hdfc-9-3 > .row").css("height",t+"px"):t<i&&$(".c-template-hdfc-middle-section .bp-container.HPD-template-hdfc-9-3 > .row").css("height",i+"px")}},1e3)}),gadgets.pubsub.subscribe("Iescroll",function(){setTimeout(function(){p()},1e3)}),gadgets.pubsub.subscribe("change-height",function(){u()});var m=0,w=0,y=setInterval(S,100);function S(){m=$(v.htmlNode).find(".large-side-scroll-fix").height(),w=$(v.htmlNode).find(".right-side-scroll-fix").height(),e=$(".c-template-hdfc-middle-section").outerHeight(),"complete"===document.readyState&&(e<m||e<w)&&(p(),clearInterval(y))}var H=setInterval(function(){"complete"===document.readyState&&(clearInterval(H),p())},100);gadgets.pubsub.subscribe("calculateClicked",function(){if(h)var e=setInterval(function(){if(N!=$(v.htmlNode).find(".large-side-scroll-fix")){var t=$(v.htmlNode).find(".large-side-scroll-fix").height(),i=$(v.htmlNode).find(".right-side-scroll-fix").height();clearInterval(e),p(),i<t?$(".c-template-hdfc-middle-section .bp-container.HPD-template-hdfc-9-3 > .row").css("height",t+"px"):t<i&&$(".c-template-hdfc-middle-section .bp-container.HPD-template-hdfc-9-3 > .row").css("height",i+"px")}},1e3)})}),this.getPreference("isNewProductPageTemplate")&&$(window).outerWidth()<768&&($(v.htmlNode).find(".container").css("margin-top","10px"),$(v.htmlNode).find(".container").css("padding-left","0px"),$(v.htmlNode).find(".container").css("padding-right","0px")),1==this.getPreference("isMicrosite")&&$(v.htmlNode).find(".bp-area.c-template-hdfc-middle-section--area").css("background-color","#FFFF"),1==this.getPreference("bgWhite")&&$(v.htmlNode).css("background-color","#FFFFFF"),1==this.getPreference("removeTopMargin")&&$(v.htmlNode).find(".container").css("margin-top","0")},preferencesSaved:function(t){t.target===this&&this.refreshHTML(function(t){})}}})}();