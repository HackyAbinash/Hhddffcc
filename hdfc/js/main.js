/**
 *  ----------------------------------------------------------------
 *  Copyright © Backbase B.V.
 *  ----------------------------------------------------------------
 *  Author : Backbase R&D - Amsterdam - New York
 *  Filename : main.js
 *  Description: Main Launchpad StartUp Page
 *  ----------------------------------------------------------------
 *  windowNavType 2 -> browser back
 *  windowNavType 1 -> refresh
 *  tabUID -> tab id that gets set after user logs in
 *  IS_AUTH cookie -> set when user is logged in
 *  allowReload -> set for submenus to allow reloading the page
 *  isLoginPage -> to check if user is in any login/prelogin pages (RS/openMarket/any simulator pages, etc)
 *  -------------------------- EPI variables -----------------------
 *  isEpiLoginPage -> if user is specifically in Epi login page(merchant, cbdt, gst, nach)
 *  isEpiSession -> gets set in localStorage when user has logged in from epi(merchant, cbdt, gst, nach)
 *  isEpiTab -> gets set in sessionStorage to denote the tab from which user logged in to epi(merchant, cbdt, gst, nach)
 *  ----------------------------------------------------------------
*/
/*disable right click*/
     document.addEventListener("contextmenu", function(e){
         e.preventDefault();
     }, false);

/*    $(document).keydown(function (e) {
        if(event.keyCode == 123) {
         return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
         return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
         return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
         return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
         return false;
        }
    });*/

    if(document.querySelector('link[hrefLang="en-IN"]') != null){
        var langUrl = document.querySelector('link[hrefLang="en-IN"]');
            if(langUrl.href == window.location.href){
                let linkToAdd  = document.createElement('link');
                linkToAdd.href = langUrl.href;
                linkToAdd.rel = 'canonical';
                document.head.appendChild(linkToAdd)
        }
    }


sessionStorage.removeItem("restrictNetworkCalls");
var windowNavType = window.performance.navigation.type;
var tabUID = sessionStorage.getItem('tabUID');
var isAuthorized = $.cookie('IS_AUTH');
var allowReload = sessionStorage.getItem('allowReload');
sessionStorage.removeItem('allowReload');
var searchChatParams;
var checkParams=0;
var pseudoId;

var isLoginPage = false;
if(window.location.href.indexOf('login') > -1){
    isLoginPage = true;
}

var isEpiLoginPage = false;
if((window.location.href.indexOf('epilogin.jsp') > -1)||
  (window.location.href.indexOf('login#/gst') > -1) ||
  (window.location.href.indexOf('login#/cbdt') > -1) ||
  (window.location.href.indexOf('eMandatelogin.jsp') > -1)){
    isEpiLoginPage = true;
}

var isEpiTab = false;
if(sessionStorage.getItem('isEpiTab') != null && typeof sessionStorage.getItem('isEpiTab') != 'undefined'){
    isEpiTab = true;
}

var isServerRedirect = false;
if(localStorage.getItem('redirect') != null && (typeof localStorage.getItem('redirect') != 'undefined')){
    isServerRedirect = true;
    localStorage.removeItem('redirect');
}

(function($, require, portal, launchpad) {
    'use strict';
    launchpad.i18n = {
        mergedFiles: true,
        path: launchpad.staticRoot + '/features/%5BBBHOST%5D/config/i18n'
    };

    function run(portalDomModel) {
        if(!b$.portal.isLogin){
/* BackBase suggested to comment for pwb-7741
            require(['base'], function(base) {
                base.startPortal(portalDomModel, portal)
                    .then(function() {
                        base.bus.publish(base.NS + '.portal.ready', portal);
                    });
            });*/
        }
    }
    /*Embedded assistant tooltip starts*/
        var identifyTooltip = $('body').html().match(/\{\@([\w\s@\[\]:!@#$%^&*()\.\-_,;?""''‘’~`“ ”)\/\\|<>+=]+)\@\:\@([\w\s@\[\]:!@#$%^&*()\.\-_,;?""''‘’`~“ ”\/\\|<>+=]+)\@\}/g);
        $(window).load(function(){
                  if(identifyTooltip){
                       require(['features/%5BBBHOST%5D/theme/core/bootstrap3/js/tooltip'], function () {
                              require(['features/%5BBBHOST%5D/theme/core/bootstrap3/js/transition'],function(){
                                  $('[data-toggle="tooltip"]').tooltip(options);
                              });
                       });
                       var options = {
                           placement: "auto top",
                           container: 'body'
                       };
                  }

        });
        if(identifyTooltip){
                   for(var i=0; i<identifyTooltip.length; i++){
                       var element = identifyTooltip[i].split(":");
                       var tooltipSrc = element[0].slice(2,element[0].length-1);
                       var tooltipText = element[1].slice(1, element[1].length-2);
                       var tooltipClass = "tooltip-initialised";
                       var tooltipDom = "<span class = '" + tooltipClass + "' title='"  + tooltipText + "'>"+ tooltipSrc +"</span>";
                       $("body:contains("+ identifyTooltip[i] +")").each(function(){
                                 $(this).find("div:contains("+ identifyTooltip[i] +")").addClass("yes");
                                 $(".yes").html(($(".yes").html().replace(identifyTooltip[i] , tooltipDom)));
                       });
                     $(".tooltip-initialised").attr('data-toggle','tooltip');
                   }
        }
    /*Embedded assistant tooltip ends*/
    $(document).ready(function() {
        if( !b$.portal.isLogin) {
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W92FCQV');
        }
        else
        {
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        }

        /* -------------------------- Session Management Changes -- START ----------------------------------------*/
        if(isAuthorized != null){
            /* 1. logout user on click of refresh, browser back/forward and duplicate tab from logged in tab
             * 2. logout if user comes directly to login page and he is already logged in
             * 3. logout if user copy-paste url in another tab
             * 4. url manipulation in same tab
             * 5. logout if user comes directly to external login page and he is already logged in
            */
            if((((windowNavType ==1  || windowNavType ==2) && !allowReload)  && tabUID && !isLoginPage) ||
              (tabUID && isLoginPage) ||
              (!(tabUID) && !isLoginPage) ||
              (document.referrer.length == 0 && !isLoginPage) ||
              isServerRedirect ||
              (tabUID && isEpiLoginPage && isEpiTab)){
                  window.seamlessBrowserActivity = true;
            }
        }
        else{
            /* when user is logged out from tab2 and he comes back to tab 1, logout the user
             * OR
             * when user is logged out from duplicate tab and he comes back to tab 1, logout the user
            */
            if((isAuthorized == undefined || isAuthorized == null) && tabUID && !isLoginPage){
                window.seamlessBrowserActivity = true;
            }
        }

        /**
         *  ---------------------------------------------------------------------------------
         *  logout the user if EPI login is triggered in another tab
         *
         *  Storage event is triggered when a window other than itself makes a storage change.
         *  Except in IE, where the event is also triggered in the tab that makes storage change.
         *  Hence the extra window.name check to prevent event getting executed in same tab.
         *  ---------------------------------------------------------------------------------
        */
        window.addEventListener('storage', function(e) {
            if(isAuthorized != undefined && isAuthorized != null){
                if(localStorage.getItem('isEpiSession') == 'epiLogin' && window.name != 'EpiTab'){
                    if(typeof window.epiLogout == "undefined"){
                        gadgets.pubsub.publish("browserActivity",{'isEpiTermination':true});
                        window.epiLogout=true;
                    }
                }
            }
        });

        /* redirection after invalid browser activity logout event */
        $('.session-discontinue').click(function(){
            window.location.href =  document.getElementById('redirectUrl').value;
        });

        /* cookie related code to maintain/destroy session across tabs - START */
        if(typeof window.load == "undefined"){
            if(typeof sessionStorage["tabUID"] !== "undefined"){ /*on same tab*/
                localStorage.setItem("isLogin", sessionStorage["tabUID"]);
                window.isLogin=true;
            }
            else if((typeof isAuthorized == "undefined" || isAuthorized == null) &&  localStorage.getItem("isLogin")){/*on closing browser*/
                localStorage.removeItem("isLogin"); /*delete local storage*/
            }
            else if((typeof isAuthorized != "undefined" && isAuthorized != null) && localStorage.getItem("isLogin")){/*opening in new Tab*/
                if(isLoginPage && !isEpiLoginPage && !isServerRedirect){/*show session active msg on all other login pages other than EPI login page*/
                    gadgets.pubsub.publish("active-user", {"isActive":true});
                }
            }
            else if(typeof isAuthorized != "undefined" && isAuthorized != null){/*on closing tab*/
                $.cookie('IS_AUTH',null,{path:'/'});
                if(b$.portal.knowYourBrowser === 'firefox'){
                    $.cookie('Authorization',null,{path:b$.portal.config.serverRoot+'/'});
                } else{
                    $.cookie('Authorization',null,{path:b$.portal.config.serverRoot}); /*delete cookies*/
                }
            }
            else if((typeof isAuthorized == "undefined" || isAuthorized == null) && typeof sessionStorage["tabUID"] == "undefined" && typeof localStorage.getItem("isLogin") == "undefined") {
                sessionStorage.removeItem("token"); /*delete leftover token*/
            }
           window.load=true;
        }

        $(window).on('beforeunload', function(){
            sessionStorage.setItem('prevUrl', window.location.href);
            if(typeof window.unload == "undefined" && typeof window.isLogin != "undefined"){
                localStorage.removeItem("isLogin");
            }
            window.unload=true;
        });
        /* cookie related code to maintain/destroy session across tabs - END */

/* ----------------------------------------------- Session Management Changes -- END -------------------------------------------------------------------------------------------------------------------------*/

        require(['module-behaviors'], function(behaviors) {
            // add launchpad behaviors
            launchpad.behaviors = behaviors;
            try {
                portal.startup('main', run);
            } catch(err) {
                console.error('Unable to start up portal:', err.message);
            }
        });

        //code for anchor tag IDs
        $.each($('.anchor-hash'),function(index,element){
            var id=$(element).text().toLowerCase();
            id=id.replace(/ /g,'-');
            $(element).attr('id',id);
        });
        //anchor tag code end
    });

    $(window).load(function(){
        var searchTerm='';

        var element = [];
        var urlArray=window.location.href.split('#');
        $('h4,h3,.heading h2,.card-name').each(function(idx, el){
           var top1 = $(this);
           element = findElement(idx, el);
           if(urlArray.length>1){
             searchTerm=urlArray[1];
             searchTerm=searchTerm.replace('/','');
             if(element == searchTerm || element == searchTerm+"?"){
                pageScroll(top1);
             }
           }
        })
      $('.cardTitle').each(function(idx, el){
            var element = findElement(idx, el);
            var top2 = $(this);
            if(urlArray.length>1){
                searchTerm=urlArray[1];
                searchTerm=searchTerm.replace('/','');
                searchTerm=searchTerm.replace('&','and');
                if(element == searchTerm){
                    pageScroll(top2);
                  }
               }
         })
/*     setTimeout(function(){

            var urlArray=window.location.href.split('#');
            if(urlArray.length>1){
            var searchTerm=urlArray[1].replace('/','');
            var searchId="#"+searchTerm.toLowerCase();
            var $requiredDiv=$(searchId);
            if($requiredDiv.length!=0){
            var topScroll=$requiredDiv.offset().top-220;
             $('html, body').animate({
//                     $(window).scrollTop(topScroll);
                        scrollTop: topScroll
                }, 2000);

            }
            }

            },1000);*/

        $('.mainDivAcc').each(function(idx, el){
              var top3 = $(this);
              var top4 = $(this).find('.accordionparent');
              var countAcc = 0;
              if(urlArray.length>1){
                searchTerm=urlArray[1];
                searchTerm=searchTerm.replace('/','');
                searchTerm=searchTerm.replace(/ /g,'-');
              }
              var textChild = [];
              var yhd = [];
              var accParent;
              var accText;
              yhd = top3.find('.cardTitle .card-name');
              accParent = top3.find('.accordionparent .divContent h2');
              for(var i = 0 ;i < yhd.length ; i++){
              textChild[i] = yhd[i].innerHTML;
              textChild[i] = textChild[i].toLowerCase();
              textChild[i] = textChild[i].replace(/ /g,'-');
              }
              /*accText = accParent[0].innerHTML;
              accText = accText.toLowerCase();
              accText = accText.replace(/ /g,'-');*/

              if(accParent.length >= 1){
                  accText = accParent[0].innerHTML;
                  accText = accText.toLowerCase();
                  accText = accText.replace(/ /g,'-');
              }

              if(searchTerm!=""){
                    if(accText == searchTerm){
                            $(this).find('.headeracc .accordionparent').click();
                            pageScroll(top4 , "accordionParent");
                    }
                 for(var j=0;i<textChild.length;j++){
                        if(textChild[j]==searchTerm){
                            $(this).find('.headeracc .accordionparent').click();
                            pageScroll(top3);
                            countAcc++;
                            if(countAcc > 0){
                               gadgets.pubsub.publish('flagAcc',true);
                            }
                     }
                 }
             }
        })

        //for pure portal pages, after logged in scenario parameter passing to senseforth
        var senseforthFlags = JSON.parse(sessionStorage.getItem('senseforthFlags'));
        pseudoId = sessionStorage.getItem("pseudoId");
        if(typeof senseforthFlags !='undefined'&& senseforthFlags != null){
            searchChatParams = senseforthFlags;
            if(pseudoId != null){
                searchChatParams.pseudoID = pseudoId;
            }
            if(checkParams==0){
                if(typeof SF_getLoggedInDetails !='undefined'){
                    SF_getLoggedInDetails(searchChatParams);
                    checkParams++;
                }
            }
        }
});

    function pageScroll(top, value){
    var topScroll;
        if(value == "accordionParent"){
              topScroll=top.offset().top-400
        }
        else{
             topScroll=top.offset().top-154
        }
      $('html, body').animate({
        scrollTop: topScroll
        },2000);
      setTimeout(function(){
        $('html, body').animate({
            scrollTop: topScroll
        },2000);
        },1000);
      }
      function findElement(idx, el){
          var textHeader = [];
          textHeader = $(el).text().trim();
          textHeader = textHeader.toLowerCase();
          textHeader = textHeader.replace(/\s/g,'-');
          textHeader = textHeader.replace('&','and');
          return(textHeader);
      }

    if(lsTest() === true){
        if (navigator.userAgent.match(/Tablet|iPad/i))
        {
            localStorage.setItem('TypeOfDevice', 'tablet');
        } else if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) )
        {
            localStorage.setItem('TypeOfDevice', 'mobile');
        } else {
            localStorage.setItem('TypeOfDevice', 'web');
        }
    }else{
        console.log("Please enable Cookies/Browser Storage to view this website properly !!!");
    }



})(window.jQuery, window.requirejs, window.b$ && window.b$.portal, window.launchpad || {});