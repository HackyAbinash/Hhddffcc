var b$=b$||{};b$.universal=b$.universal||{},b$.universal.widgets=b$.universal.widgets||{},b$.universal.widgets.StructuredContentWidgetannual=function(b){"use strict";require(["features/%5BBBHOST%5D/feature-hdfc-download-pdf/scripts/video"],function(i){define("one-slide-video",function(o,e,n){b.fn.createVideo=function(e){var n=e+"?enablejsapi=1",o=b("<iframe></iframe>").attr({src:n,id:"player123"});this.append(o)};n.exports={oneSlide:function(t,e,n){b("head").append('<link rel="stylesheet" href="'+n+'/static/features/%5BBBHOST%5D/feature-hdfc-slick-slider/css/slick.css" type="text/css">'),o(["features/%5BBBHOST%5D/feature-hdfc-slick-slider/scripts/slick"],function(){b(".one-slide").slick({infinite:!1,slidesToShow:1,slidesToScroll:1,variableWidth:!0,arrows:!0,centerPadding:"10px",responsive:[{breakpoint:549,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0}}]})}),b.ajax({url:e,success:function(e){var n=b(".one-videos-parent .videos-sub-parent h2").text().trim();b(t.htmlNode).find(".play-button").on("click",function(){var e=b(t.htmlNode).find(".slick-current.slick-active .video-url").text().trim();b(t.htmlNode).find(".video-player").empty(),b(t.htmlNode).find(".video-player").createVideo(e),b("body").addClass("no-scroll"),b(t.htmlNode).find(".cover-video").css("display","block"),b(t.htmlNode).find(".popup-container-video").addClass("opened"),i.track(n)});var o=b$.portal.portalModel.serverURL+"/static/features/%5BBBHOST%5D/feature-hdfc-slick-slider/media/pop-close.png";b(".close-icon-url").attr("src",o),b(t.htmlNode).find(".close-button").on("click",function(){b("body").removeClass("no-scroll"),b(t.htmlNode).find(".cover-video").css("display","none"),b(t.htmlNode).find(".popup-container-video").removeClass("opened"),i.trackOnClose(n)})},error:function(e){}})}}})}),define("BankingOmbudsman",function(e,n,o){o.exports={BankingOmbudsman:function(o,e){setTimeout(function(){b.ajax({url:e,success:function(e){var n=e;b(o.htmlNode).find("ul.links li .pop-up").on("click",function(){var e=b(this).parent("li").index();n.ImageLink[e].overlayRequired&&(b(".pop-up-BankingOmbudsman").css("display","block"),b("body").addClass("no-scroll")),b(".close-button").on("click",function(){b(".pop-up-BankingOmbudsman").css("display","none"),b("body").removeClass("no-scroll")})})}})},100)}}}),define("annual-reports",function(e,n,o){o.exports={annual:function(e,n){b(".annual-reports .accordian-wrapper .awards-accordion-super").css("display","none");var o=b("<div></div>").addClass("accdiv"),t=[],i=b(".accord-head.add-cursor-pointer h2");for(a=0;a<i.length;a++){var s=b(".accord-head.add-cursor-pointer h2").eq(a).text().split("-")[1];t.push(s++)}t.sort(function(e,n){return e-n});for(var a=t.length-1;0<=a;a--){for(var r=0;r<i.length;r++)if(t[a]==parseInt(i[r].textContent.split("-")[1])){var c=b(i[r]).closest(".accordion-container");o.append(c.parent(".awards-accordion-super").html())}b(".parentAccSortDiv").append(o)}b(".accordion-container").wrap(b("<div></div>").addClass("awards-accordion-super")),b(".accordion-container .accord-head").on("click",function(){b(".press-year-sub-content .press-icon").hasClass("icon-up-open-big")&&(b(".pressAccSortDiv .pressAccDiv").css("display","none"),b(".press-year-sub-content .press-icon").removeClass("icon-up-open-big"),b(".press-year-sub-content .press-icon").addClass("icon-down-open-big")),b(".plus-arrow-icon").hasClass("icon-up-open-big")&&(b(".plus-arrow-icon").removeClass("icon-up-open-big"),b(".plus-arrow-icon").addClass("icon-down-open-big"),b(".press-text").css("display","none"));var e=b(this).next();"none"===e.css("display")&&b(".accord-body").each(function(e,n){"block"===b(n).css("display")&&(b(n).slideToggle(300,"swing"),b(n).prev().find(".main-arrow-icon").toggleClass("icon-up-open-big"),b(n).prev().find(".main-arrow-icon").toggleClass("icon-down-open-big"))}),e.slideToggle(300)}),b(".annual-reports .accordian-wrapper .press-Content").css("display","none");var d=b("<div></div>").addClass("pressAccDiv"),l=[],p=b(".quater-sub-content h4");for(a=0;a<p.length;a++){var f=b(".quater-sub-content h4").eq(a).text().split("-")[1];l.push(f++)}l.sort(function(e,n){return e-n});for(a=l.length-1;0<=a;a--){for(r=0;r<p.length;r++)if(l[a]==parseInt(p[r].textContent.split("-")[1])){var u=b(p[r]).closest(".quater-content");d.append(u.html())}b(".pressAccSortDiv").append(d)}b(".pressAccSortDiv").prepend('<div class="press-year-sub-content"></div>'),b(".press-year-sub-content").prepend("<h2>Archives</h2>"),b(".press-year-sub-content").prepend('<span class="press-icon glyphicon icon-down-open-big"></span>'),b(".pressAccSortDiv").wrap(b("<div></div>").addClass("press-content")),b(".press-text table td a").addClass("exclude-me"),b(".press-year-sub-content").on("click",function(){var e=b(this).find("span.press-icon");e.hasClass("icon-down-open-big")?(e.removeClass("icon-down-open-big"),e.addClass("icon-up-open-big")):e.hasClass("icon-up-open-big")&&(e.removeClass("icon-up-open-big"),e.addClass("icon-down-open-big"))}),b(".accord-head").on("click",function(){b(this).find("span").hasClass("icon-down-open-big")?(b(this).find("span").removeClass("icon-down-open-big"),b(this).find("span").addClass("icon-up-open-big")):b(this).find("span").hasClass("icon-up-open-big")&&(b(this).find("span").removeClass("icon-up-open-big"),b(this).find("span").addClass("icon-down-open-big"))}),b(".pressAccDiv").each(function(e,n){b(n).css("display","none")}),b(".pressAccSortDiv .press-year-sub-content").on("click",function(){b(".accordion-container .main-arrow-icon").hasClass("icon-up-open-big")&&(b(".accordion-container .accord-body").css("display","none"),b(".accordion-container .main-arrow-icon").removeClass("icon-up-open-big"),b(".accordion-container .main-arrow-icon").addClass("icon-down-open-big")),b(".plus-arrow-icon").hasClass("icon-up-open-big")&&(b(".plus-arrow-icon").removeClass("icon-up-open-big"),b(".plus-arrow-icon").addClass("icon-down-open-big"),b(".press-text").css("display","none"));var e=b(this).next();"none"===e.css("display")&&b(".pressAccDiv").each(function(e,n){"block"===b(n).css("display")&&(b(n).slideToggle(300,"swing"),b(n).prev().find(".press-icon").toggleClass("icon-up-open-big"),b(n).prev().find(".press-icon").toggleClass("icon-down-open-big"))}),e.slideToggle(300)}),b(".press-text").each(function(e,n){b(n).css("display","none")}),b(".plus-arrow-icon").on("click",function(){b(this).parent().css("border-bottom","0px");var e=b(this).parent().next();"none"===e.css("display")&&b(".press-text").each(function(e,n){"block"===b(n).css("display")&&(b(n).slideToggle(300,"swing"),b(n).prev().find(".plus-arrow-icon").toggleClass("icon-down-open-big icon-up-open-big"))}),e.slideToggle(300),b(this).toggleClass("icon-down-open-big icon-up-open-big")}),b(".plus-arrow-icon").toggle(function(){b(this).parent().css({"border-bottom":"none"})},function(){b(this).parent().css({"border-bottom":"1px solid #ddd"})})}}}),define("confirmation-overlay",function(e,n,o){o.exports={confirmationOverlay:function(o,e){b.ajax({url:e,success:function(e){var n=e;b(o.htmlNode).find(".confirmation-overlay  .modal-body").html(n.Body)},error:function(e){}}),gadgets.pubsub.subscribe("externalPopup",function(e){b(o.htmlNode).parents(".bp-manageableArea").css("z-index","999999"),b("body").css("overflow","hidden"),b(o.htmlNode).find(".cover").css("display","block"),b(o.htmlNode).find(".nb-login").attr("href",e)}),b(o.htmlNode).find(".cancel-btn").click(function(){b(o.htmlNode).find(".cover").css("display","none"),b(o.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow","")}),b(o.htmlNode).find(".close-button").click(function(){b(o.htmlNode).find(".cover").css("display","none"),b(o.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow","")}),b(o.htmlNode).find(".confirmation-overlay .nb-login").click(function(e){e.preventDefault(),b(o.htmlNode).find(".cover").css("display","none"),b(o.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow","");var n=this;setTimeout(function(){window.open(b(n).attr("href"),b(n).attr("target"))},100)})}}}),define("confirm-nb-overlay",function(e,n,o){o.exports={confirmNBOverlay:function(n,e){gadgets.pubsub.subscribe("externalNBPopup",function(e){b(n.htmlNode).parents(".bp-manageableArea").css("z-index","999999"),b("body").css("overflow","hidden"),b(n.htmlNode).find(".cover").css("display","block"),b(n.htmlNode).find(".nb-logout").attr("href",e)}),b(n.htmlNode).find(".cancel-btn").click(function(){b(n.htmlNode).find(".cover").css("display","none"),b(n.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow","")}),b(n.htmlNode).find(".close-button").click(function(){b(n.htmlNode).find(".cover").css("display","none"),b(n.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow","")}),b(n.htmlNode).find(".confirmation-nb-overlay .nb-logout").click(function(e){var n,o=b(this).attr("href");n=b$.portal.megaMenuTab?{ckStatus:!0,redirectUrl:o,openNewTab:!0}:-1<o.indexOf("/sme")||-1<o.indexOf("/nri-banking")||-1<o.indexOf("/wholesale")||-1<o.indexOf("/agri")?{ckStatus:!0,redirectUrl:o,openNewTab:!0}:{ckStatus:!0,redirectUrl:o},gadgets.pubsub.publish("logoutFromMenu",n),e.preventDefault()})}}}),define("confirmation-logout-overlay",function(e,n,o){o.exports={confirmationLogoutOverlay:function(n,e){gadgets.pubsub.subscribe("afterLogoutPopup",function(){b(n.htmlNode).parents(".bp-manageableArea").css("z-index","999999"),b("body").css("overflow","hidden"),b(n.htmlNode).find(".cover").css("display","block"),b(n.htmlNode).find(".nb-login").attr("href",hrefValue)}),b(n.htmlNode).find(".cancel-btn").click(function(){b(n.htmlNode).find(".cover").css("display","none"),b(n.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow","")}),b(n.htmlNode).find(".close-button").click(function(){b(n.htmlNode).find(".cover").css("display","none"),b(n.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow","");var e=this;setTimeout(function(){window.open(b(e).attr("href"),b(e).attr("target"))},100)})}}}),define("logout-overlay",function(e,n,o){o.exports={logoutOverlay:function(n,e,o){gadgets.pubsub.subscribe("logoutPopup",function(){b(n.htmlNode).parents(".bp-manageableArea").css("z-index","999999"),b("body").css("overflow","hidden"),b(n.htmlNode).find(".cover").css("display","block")}),b(n.htmlNode).find(".cancel-btn").click(function(){b(n.htmlNode).find(".cover").css("display","none"),b(n.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow","")}),b(n.htmlNode).find(".close-button").click(function(){b(n.htmlNode).find(".cover").css("display","none"),b(n.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow","")}),b(n.htmlNode).find(".confirmation-nb-overlay .nb-logout").click(function(e){e.preventDefault(),b(n.htmlNode).find(".cover").css("display","none"),b(n.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow",""),gadgets.pubsub.publish("logoutNBSession")})}}}),define("session-timeout",function(e,n,o){o.exports={sessionTimeoutOverlay:function(n,e){var a,o=document.createElement("canvas");o.className="clock",o.height="200",o.width="200",b(".clock-wrapper")[0].appendChild(o);var t=document.createElement("div");t.className="timer",b(".clock-wrapper")[0].appendChild(t),gadgets.pubsub.subscribe("sessionTimeout",function(){var e;b(n.htmlNode).parents(".bp-manageableArea").css("z-index","999999"),b("body").css("overflow","hidden"),b(n.htmlNode).find(".cover").css("display","block"),e=6e4,function e(n,o){var t=new Date;window.intOffset=o-(t.getTime()-n),1<Math.ceil(window.intOffset/1e3)&&b(".timer").html(Math.ceil(window.intOffset/1e3)+"<br> seconds"),1==Math.ceil(window.intOffset/1e3)&&b(".timer").html(Math.ceil(window.intOffset/1e3)+"<br> second"),window.intAngle=.0001048335*window.intOffset;var i=b(".clock")[0];if(i.getContext){var s=i.getContext("2d");s.clearRect(0,0,300,300),s.beginPath(),s.globalAlpha=1,s.arc(100,100,90,0,6.283,!1),s.arc(100,100,80,6.283,2*Math.PI,!0),s.fillStyle="#bbb",s.fill(),s.closePath(),s.beginPath(),s.globalAlpha=1,s.arc(100,100,90,-1.57,-1.57+window.intAngle,!1),s.arc(100,100,80,-1.57+window.intAngle,2*Math.PI-1.57,!0),s.fillStyle="#025296",s.fill(),s.closePath(),s.beginPath(),s.arc(100,100,80,0,6.283,!1),s.fillStyle="#fff",s.fill(),s.closePath()}window.intOffset<=1?gadgets.pubsub.publish("logoutNBSessionTimeout",{logoutBtn:!1}):a=setTimeout(function(){e(n,o)},500)}((new Date).getTime(),e),b(".clock").show(),b(".timer").show()}),b(n.htmlNode).find(".nb-continue").click(function(){b(n.htmlNode).find(".cover").css("display","none"),b(n.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow",""),window.timeoutTriggered=!1,gadgets.pubsub.publish("triggerKeepAlive"),window.clearTimeout(a)}),b(n.htmlNode).find(".close-button").click(function(){b(n.htmlNode).find(".cover").css("display","none"),b(n.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow",""),window.timeoutTriggered=!1,gadgets.pubsub.publish("triggerKeepAlive"),window.clearTimeout(a)}),b(n.htmlNode).find(".confirmation-nb-overlay .nb-logout").click(function(e){e.preventDefault(),b(n.htmlNode).find(".cover").css("display","none"),b(n.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow",""),window.clearTimeout(a),gadgets.pubsub.publish("logoutNBSessionTimeout",{logoutBtn:!0})})}}}),define("decision-overlay",function(e,n,o){o.exports={decisionOverlay:function(o,e){gadgets.pubsub.subscribe("decisionPopup",function(e){b(o.htmlNode).parents(".bp-manageableArea").css("z-index","999999"),b("body").css("overflow","hidden"),b(o.htmlNode).find(".cover").css("display","block"),b(o.htmlNode).find(".app").click(function(e){e.preventDefault(),b(o.htmlNode).find(".cover").css("display","none"),b(o.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow","");var n=localStorage.getItem("OS");"Android"==n?window.open("intent://login#Intent;scheme=hdfcnewbb;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.hdfc.retail.banking;end"):"iOS"==n&&(setTimeout(function(){window.location="itms://itunes.apple.com/in/app/hdfc-bank-mobilebanking-new/id1225206774?mt=8"},25),window.location="hdfcnewbb://")}),b(o.htmlNode).find(".cancel-btn").click(function(){b(o.htmlNode).find(".cover").css("display","none"),b(o.htmlNode).parents(".bp-manageableArea").css("z-index",""),b("body").css("overflow",""),window.location=e})})}}}),define("ifsc",function(e,n,o){b.fn.createDropdown=function(e){var n=b("<select></select>").attr("class",e);n.addClass("form-control"),n.addClass("selectCSS"),this.append(n)},b.fn.replaceList=function(e){var o,t;this.empty(),o=this,b.each(e,function(e,n){t=b("<option></option>").attr("value",n).text(n),o.append(t)})};o.exports={ifscCode:function(e,c){b.ajax({url:e,success:function(e){var a=e.Content;b(c.htmlNode).find(".state-dropdown").createDropdown("dropdown1"),b(c.htmlNode).find(".city-dropdown").createDropdown("dropdown2");for(var r=[],n=0;n<a.length;n++)r.push(a[n].State);r.unshift("Select State"),b(c.htmlNode).find(".dropdown1").text(r[0]),b(c.htmlNode).find(".dropdown1").each(function(e,n){b(n).replaceList(r)});var o=["Select City"];b(c.htmlNode).find(".dropdown2").each(function(e,n){b(n).replaceList(o)}),b(c.htmlNode).find(".dropdown1").on("change",function(e,n){var o=b(this).val();if(0==(e=r.indexOf(o))){var t=["Select City"];b(c.htmlNode).find(".dropdown2").each(function(e,n){b(n).replaceList(t)})}else{var i=a[e-1].CityList.slice(),s=[];b.each(i,function(e,n){s.push(n.City)}),s.unshift("Select City"),b(c.htmlNode).find(".dropdown2").each(function(e,n){b(n).replaceList(s)})}}),b(c.htmlNode).find(".find-btn a").on("click",function(){if(0!=b(c.htmlNode).find(".dropdown1")[0].selectedIndex&&0!=b(c.htmlNode).find(".dropdown2")[0].selectedIndex){var t=b(c.htmlNode).find(".dropdown1")[0].value.trim(),i=b(c.htmlNode).find(".dropdown2")[0].value.trim(),e=b(".press-year-content");b.each(e,function(e,n){if(b(n).find(".press-inner-content").css("display","none"),b(n).find(".press-icon").removeClass("icon-up-open-big").addClass("icon-down-open-big"),b(n).find(".press-year-sub-content h2").text().trim()==t){b(n).find(".press-inner-content").css("display","block"),b(n).find(".press-icon").removeClass("icon-down-open-big").addClass("icon-up-open-big");var o=b(".quater-content");b.each(o,function(e,n){if(b(n).find(".press-text").css("display","none"),b(n).find(".plus-arrow-icon").removeClass("icon-up-open-big").addClass("icon-down-open-big"),b(n).find(".quater-sub-content h4").text().trim()==i){b(n).find(".press-text").css("display","block"),b(n).find(".plus-arrow-icon").removeClass("icon-down-open-big").addClass("icon-up-open-big");var o=b(n).find(".press-text").offset().top-154;setTimeout(function(){b("html, body").animate({scrollTop:o},2e3)},1e3)}})}})}})}})}}}),b(document).ready(function(){});var m="cs";return{prefModified:function(e){e.refreshIncludes();var n=b(e.htmlNode);b(".bd-structured-content-widget",n).attr("data-type",e.getPreference("contentType")||"Content")},start:function(a){for(var e,n=[],o=0;o<a.model.preferences.array.length;o++)"templateUrl"==a.model.preferences.array[o].name&&(e=a.model.preferences.array[o].value);var t=a.getPreference("urlContent"),i=b$.portal.portalModel.serverURL,s=b$.portal.portalName;if(null!=t){var r=t.indexOf("content"),c=t.slice(r,t.length);t=i+"/"+c}var d=i+"/static/features/%5BBBHOST%5D/feature-hdfc-slick-slider/media/pop-close.png";b(".close-icon-url").attr("src",d),null==e&&null==e||(n=e.split("/"));var l,p=a.getPreference("contentRef"),f=b(a.htmlNode),u=!1;try{top.bd}catch(e){u=!0}(!(!window.be||u)&&be.utils.module("top.bd.PageMgmtTree.selectedLink").isMasterPage||"true"===a.model.manageable||""===a.model.manageable||void 0===a.model.manageable)&&(p||f.addClass("bd-empty-structured-content"),b(".bd-structured-content-widget",f).attr("data-type",a.getPreference("contentType")||"Content"),a.addEventListener("preferences-form",function(e){for(var n=b$.portal.portalModel.filterPreferences(a.model.preferences.array),o=n.length-1;0<=o;o--)if("Template"==n[o].label)for(var t=a.getPreference("templateList").split(","),i=0,s=0;i<t.length;i++,s++)n[o].inputType.options[s]={label:t[i],value:t[i+1]},i++}),a.addEventListener("bdDrop.enter",function(e){var n=e.detail.info.helper.bdDragData.fileDataArray[0];n.metaData&&n.metaData["cmis:objectTypeId"]&&"bb:structuredcontent"===n.metaData["cmis:objectTypeId"].property?(l=n,f.addClass("bd-over-structured-content")):l=void 0}),a.addEventListener("bdDrop.leave",function(e){f.removeClass("bd-over-structured-content")}),a.addEventListener("bdDrop.drop",function(e){var n=e.detail.info.helper.bdDragData.fileDataArray[0];if(l){if(!a.model.preferences.getByName("contentRef")){var o=b$.portal.portalModel.createPreference("contentRef","contentRef",void 0,"");a.model.preferences.add(o)}a.setPreference("urlContent",n.url),a.setPreference("contentRef",[m,"contentRepository"===l.repository?l.repository:"@portalRepository",l.contentUId].join(":")),a.model.save(function(){a.refreshHTML(),f.removeClass("bd-empty-structured-content")}),f.removeClass("bd-over-structured-content")}l=void 0}),window.bd&&window.bd.bindDropEvents&&window.bd.bindDropEvents(a.htmlNode),"one-slide-video.html"==n[n.length-1]&&require(["one-slide-video"],function(e){e.oneSlide(a,t,i)}),"BankingOmbudsman.html"==n[n.length-1]&&require(["BankingOmbudsman"],function(e){e.BankingOmbudsman(a,t)}),"annual-reports.html"==n[n.length-1]&&require(["annual-reports"],function(e){e.annual(a,t)}),"confirmation-overlay.html"==n[n.length-1]&&require(["confirmation-overlay"],function(e){e.confirmationOverlay(a,t)}),"logout-overlay.html"==n[n.length-1]&&require(["logout-overlay"],function(e){e.logoutOverlay(a,s,i)}),"session-timeout.html"==n[n.length-1]&&require(["session-timeout"],function(e){e.sessionTimeoutOverlay(a,i)}),"confirm-nb-overlay.html"==n[n.length-1]&&require(["confirm-nb-overlay"],function(e){e.confirmNBOverlay(a,t)}),"confirmation-logout-overlay.html"==n[n.length-1]&&require(["confirmation-logout-overlay"],function(e){e.confirmationLogoutOverlay(a,t)}),"decision-overlay.html"==n[n.length-1]&&require(["decision-overlay"],function(e){e.decisionOverlay(a,t)}),"ifsc-drop-down.html"==n[n.length-1]&&require(["ifsc"],function(e){e.ifscCode(t,a)}))}}}(jQuery);