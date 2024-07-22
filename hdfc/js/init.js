document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);
function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}
(function() {
    function getCurrentScript() {
        if (document.currentScript) {
            return document.currentScript;
        }
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    }

    function getUrlVars(url) {
        var vars = {}, hash, hashes = url.split(' ').join('').slice(url.indexOf('?') + 1).split(';');
        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    var params = getUrlVars(getCurrentScript().src);
    var currHost = window.location.hostname;//added for BBENH-312
    b$.portal.config = b$.portal.config || {};
    b$.portal.config.serverRoot = params['cRoot'];
    b$.portal.config.resourceRoot || (b$.portal.config.resourceRoot = b$.portal.config.serverRoot);
    b$.portal.portalName = params['pName'];
    b$.portal.pageName = params['pageName'];
    b$.portal.pageUUID = params['pageUUID'];
    b$.portal.loggedInUserId = params['userName'];
    b$.portal.linkUUID = params['linkUUID'];
    b$.portal.loggedInUserRole = params['role'] ? 'role' : '';
    b$.portal.loggedInUserGroup = (function() {
        return (
            params['loggedInUserGroup'] && params['loggedInUserGroup'].length
                ? params['loggedInUserGroup']
                : ''
        ).split(',');
    })();

    //Start - ADDED BY SKC to check login status
    b$.portal.isLogin = (function() {
        var isLogin;
        if(!!b$.portal.loggedInUserId && b$.portal.loggedInUserGroup.indexOf("") < 0 ) {
            isLogin= true;
        } else {
            isLogin= false;
        }
        return isLogin;
    })();
      b$.portal.isGapDisabled = (function() {
            var prefValue = JSON.parse(localStorage.getItem("portalGlobalPref"));
            return prefValue.gap;
      });


  b$.portal.typeOfDevice=(function() {
       if (navigator.userAgent.match(/Tablet|iPad/i))
         {
            return 'tablet';
         } else if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) )
         {
            return 'mobile';
         } else {
             return 'web';
         }
     });

    b$.portal.navigateTo = function(url){
        sessionStorage.setItem('linkClicked', true);
       if(url.indexOf('http')> -1 && url.indexOf(currHost)<0){ //added for BBENH-312
            window.open(url,'_blank');
        }
        else{
            window.location.assign(url);
        }
    }

     Object.defineProperty(b$.portal, 'isLogin', {
       enumerable: false,
       writable: false,
       configurable: false
     });
     //Start - ADDED BY SKC to check browser type/name
     b$.portal.knowYourBrowser = (function() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');

        if (msie > 0) {
           // IE 10 or older => return version number
           return "ie-"+parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return "ie-"+parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return "ie-"+parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // Opera Browser => Return op static word
        var isOpera = navigator.userAgent.match(/Opera|OPR\//);
        if(isOpera) {
            return 'opera';
        }
        // Chrome 1+
        var isChrome = !!window.chrome && !!window.chrome.webstore;
        if(isChrome) {
            return 'chrome';
        }

        // Safari 3.0+ "[object HTMLElementConstructor]"
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        if(isSafari) {
            return 'safari';
        }

        // Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if(isFirefox) {
            return 'firefox';
        }

        // other browser
        return false;

     })();
     //End - ADDED BY SKC

        var urlAppend;
        var newUrl;
        var contextRoot = b$.portal.config.serverRoot;
        var portalName = b$.portal.portalName;
        if(contextRoot == undefined){
            urlAppend = 'default';
        }
        else if(contextRoot == ""){
            urlAppend = contextRoot;
        }
        else{
            urlAppend = contextRoot + '/' + portalName;

        }

//        var urlAppend = this.widget.model.getPreference('appendUrl');
        window.envTypeUrl = urlAppend;
        b$.portal.urlRedirect = urlAppend;



        $(document).ready(function(){
            var pdfPath;
            var pathOfContent2;

//            var myOrigin = window.location.origin;
            var userAgent = navigator.userAgent;
            // Android detection
            if(lsTest() === true){
                if (/android/i.test(userAgent)) {
                  localStorage.setItem('OS', 'Android');
                }
                // iOS detection
                else if (/iPad|iPhone|iPod/.test(userAgent)) {
                  localStorage.setItem('OS', 'iOS');
                }
                // undefined OS
                else{
                  localStorage.setItem('OS', 'undefined');
                }
            }
            /* Post Login */
            if(b$.portal.isLogin==true) {
                $("div.bp-page.bp-portal-area").addClass('logged-in');
                var pageStack = [];
                var currentPage = location.href;
                if(sessionStorage.getItem("pageStack") === null){
                   pageStack.push(currentPage);
                   sessionStorage.setItem("pageStack", pageStack);
                }
                else{
                   pageStack = sessionStorage.getItem("pageStack").split(',');
                   if(navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)){
                     if(pageStack[pageStack.length - 1] !== currentPage){
                       pageStack.push(currentPage);
                     }
                   }else{
                      var urls = [new URL(pageStack[pageStack.length - 1]),new URL(currentPage)];
                      if(urls[0].pathname !== urls[1].pathname){
                       pageStack.push(currentPage);
                      }
                   }
                   sessionStorage.setItem("pageStack", pageStack);
               }
            }



//            $('head').find('meta').each(function(){
//                if(($(this).attr('property')== 'og:image') || ($(this).attr('property')== 'twitter:image') || ($(this).attr('itemprop')== 'image')){
//                    fullImagePath = myOrigin + $(this).attr('content');
//                    $(this).attr('content',fullImagePath);
////                    console.log(fullImagePath);
//                }
//            });

            var lazyInstance = $('.lazy').lazy({
                attribute: "value",
                chainable: false
            });

            // Fires after Slide Change
            $('.carousel-three-slides-parent, carousel-learning-centre-parent, .carousel-four-parent, .carousel-products-parent').on('afterChange', function(event, slick, currentSlide, nextSlide){
                lazyInstance.update();
            });
            function checkURL(url) {
                 var youTube ;
                    if (url != undefined || url != '') {
                        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
                        var match = url.match(regExp);
                        if (match && match[2].length == 11) {
                             youTube = true;
                        } else {
                             youTube = false;
                        }
                    }
                   return youTube;
                }
            var originName = window.location.hostname.split(".")[0];
            if(urlAppend != 'default'){
                $('body').find('a').each(function() {
                    var chooseUrl = false;
                    if(!$(this).attr('data-linktype')){
                        if($(this).attr('target') == '_blank'){
                            $(this).attr('rel','noopener noreferrer');
                        }
                        var hrefVal = $(this).attr('href');
                        if(typeof hrefVal  !== "undefined"){
                         if(hrefVal.indexOf("/http") >= 0){
                                hrefVal = hrefVal.replace("/http","http");
                                $(this).attr("href",hrefVal);
                            }
                         if(hrefVal.indexOf('http')> -1 && externalUrl(this.hostname)){ //( && hrefVal.indexOf(originName) < 0 ):removed BBENH-240
                                  chooseUrl = true;
                                  var youTube = checkURL(hrefVal);
                              if(b$.portal.isLogin == true){
                                  if (youTube == true) {
                                      $(this).attr('value', 'ext-link-nb-video');
                                  } else {
                                       $(this).attr('value','ext-link-type'); //Modified for BBENH-312
                                  }
                               }
                              else {
                                  if (youTube == true) {
                                      $(this).attr('value', 'ext-link-video');
                                  } else {
                                      $(this).attr('value', 'ext-link-type'); //Modified for BBENH-312
                                  }
                              }
                            }
                         else if(hrefVal.indexOf('/sme/')> -1 || hrefVal.indexOf('/nri-banking/')> -1 || hrefVal.indexOf('/wholesale/')> -1 || hrefVal.indexOf('/agri/')> -1){
                                if(b$.portal.isLogin == true){
                                 $(this).attr('value','ext-link-nb');
                                }
                            }

                        if(hrefVal.indexOf('mailto')> -1){
                            chooseUrl = true;
                        }

                        if (hrefVal.indexOf('.pdf') > -1) {
                              chooseUrl = true;
                              $(this).attr('target', '_blank');
                                 pdfPath = $(this).attr('href');
                              if (hrefVal.indexOf("contentstream-id") > -1) {
                                var pathOfContent3= window.location.origin + pdfPath.substring(pdfPath.indexOf('=/') + 1,pdfPath.length);
                                $(this).attr('href',pathOfContent3);
                              }
                               else{
                                var pathOfContent =window.location.origin + contextRoot + "/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?path=" + pdfPath;
                                $(this).attr('href', pathOfContent);
                               }
                        }
                        else if (hrefVal.indexOf("content?id") > -1) {
                                 pdfPath = $(this).attr('href');
                                $(this).attr('target', '_blank');
                                 pathOfContent2= contextRoot + pdfPath.substring(pdfPath.indexOf('/content'),pdfPath.length);
                                $(this).attr('href',pathOfContent2);
                           }
                        else if (hrefVal.indexOf("contentstream-id") > -1) {
                                      pdfPath = $(this).attr('href');
                                     $(this).attr('target', '_blank');
                                     pathOfContent2= contextRoot + pdfPath.substring(pdfPath.indexOf('/content'),pdfPath.length);
                                     $(this).attr('href',pathOfContent2);
                         }
                       }

                        if($(this).attr('href') !== undefined){
                            if($(this).attr('href') != '#' && $(this).attr('href') != 'javascript:void(0)' && !$(this).hasClass('exclude-me') && !chooseUrl && ($(this).attr('href')).indexOf('hdfcbank') <0){
                                var generateUrl = $(this).attr('href');
                                if($(this).hasClass('friendly-url')){
                                    newUrl = contextRoot + generateUrl;
                                    $(this).attr('href',newUrl);
                                }
                                else{
                                    if ((generateUrl.indexOf("content?id") > -1) || (generateUrl.indexOf("contentstream-id") > -1 )){
                                       $(this).attr('href',generateUrl);
                                    }
                                    else{
                                    newUrl = urlAppend + generateUrl;
                                    $(this).attr('href',newUrl);
                                    }
                                }
                            }
                        }
                    } else{
                         var hrefVal2 = $(this).attr('href');
                         if(typeof hrefVal2  !== "undefined"){
                             if(hrefVal2.indexOf('http')> -1 && hrefVal2.indexOf(currHost) < 0){
                                 $(this).attr('value','ext-link-type'); //Modified for BBENH-312
                             }
                         }
                     }
                });
            }

            /*var window_focus = true;
            *//*window_focus = true;*//*
            $(window).focus(function() {
                window_focus = true;
            });
            $(window).blur(function() {
                window_focus = false;
            });*/

            var dataObj;
            var clickedIndex = '1';
            var hrefValue;
            $('body a').on('click',function(event){
                    if($('.new-login-overlay').hasClass('new-overlay-opened')){
                    $('.login-button-new .login_dropdown').css({display: 'none'});
                    $('.removeicon').css({display: 'none'});
                    $('.position-find').css({display: 'block'});
                    $('.nav-log-btn').css({display: 'block'});
                    $('.new-login-overlay.new-overlay-opened').addClass('dnd-body').removeClass('new-overlay-opened');
                    $('body').find('.position-find span').removeClass('icon-up-open-big');
                    $('body').find('.position-find span').addClass('icon-down-open-big');
                    $('body').removeClass('no-scroll-dropdown');
                }
               /*if (typeof hrefattr !== typeof undefined && hrefattr !== false) {*/
                //if(($(this).attr('value')=='Terms and Conditions') || ($(this).attr('href')('#Terms and Conditions'))){
                if(($(this).attr('value')=='Terms and Conditions') || ($(this).attr('title')=='#Terms and Conditions')){
                $(this).attr('value','Terms and Conditions');
                var termsCount = $("[value='Terms and Conditions']:visible");
                    clickedIndex = termsCount.index(this) + 1;
                    dataObj = {"overlayType":"tnc","sequenceNumber":clickedIndex};
                    gadgets.pubsub.publish("overlayTypeToOpened",dataObj);
                    event.preventDefault();
                }

                else if(($(this).attr('value')=='How To Get Started')|| ($(this).attr('title')=='#How To Get Started')){
                    $(this).attr('value','How To Get Started');
                    var startedCount = $("[value='How To Get Started']:visible");
                    clickedIndex = startedCount.index(this) + 1;
                    dataObj = {"overlayType":"howToGetStarted","sequenceNumber":clickedIndex};
                    gadgets.pubsub.publish("overlayTypeToOpened",dataObj);
                    event.preventDefault();
                }

                 else if(($(this).attr('value')=='Fees and Charges')|| ($(this).attr('title')=='#Fees and Charges')){
                    $(this).attr('value','Fees and Charges');
                    var feesCount = $("[value='Fees and Charges']:visible");
                    clickedIndex = feesCount.index(this) + 1;
                    dataObj = {"overlayType":"feesAndCharges","sequenceNumber":clickedIndex};
                    gadgets.pubsub.publish("overlayTypeToOpened",dataObj);
                    event.preventDefault()
                }
                 else if(($(this).attr('value')=='Feedback')|| ($(this).attr('title')=='#Feedback')){
                    $(this).attr('value','Feedback');
                    var feedbackCount = $("[value='Feedback']:visible");
                    clickedIndex = feedbackCount.index(this) + 1;
                    dataObj = {"overlayType":"feedback","sequenceNumber":clickedIndex};
                    gadgets.pubsub.publish("overlayTypeToOpened",dataObj);
                    event.preventDefault();
                }
                else if(($(this).attr('value')=='Download App')||($(this).attr('title')=='#Download App')){
                    $(this).attr('value','Download App');
                    event.preventDefault();
                    var downloadCount = $("[value='Download App']:visible");
                    clickedIndex = downloadCount.index(this) + 1;
                    dataObj = {"overlayType":"downloadApp","sequenceNumber":clickedIndex};
                    gadgets.pubsub.publish("overlayTypeToOpened",dataObj);
                }
                //Modified for BBENH-312
                 else if($(this).attr('value')=='ext-link-type'|| $(this).attr('value')=='ext-link'){
                    //event.preventDefault();
                    hrefValue=$(this).attr('href').trim();
                    $(this).attr('target', '_blank');
                   /*if(b$.portal.isLogin==true) {
                        gadgets.pubsub.publish("externalNBPopup",hrefValue);
                    } else {
                        gadgets.pubsub.publish("externalPopup",hrefValue);
                   }*/
                }
                else if($(this).attr('value')=='ext-link-nb'){
                    if(b$.portal.isLogin==true) {
                    //added for BBENH-312
                    if($(this).attr('href').indexOf('http')>-1 && $(this).attr('href').indexOf(currHost)<0){
                        $(this).attr('target','_blank');
                    }
                    else
                    {
                        event.preventDefault();
                         hrefValue=$(this).attr('href').trim();
                        if("NRI-SME-Wholesale-Agri".indexOf($(this)[0].innerText) > -1){
                            var url = "https://www.hdfcbank.com/";
                            var menu = {
                                "NRI" : "nri-banking",
                                "SME" : "sme",
                                "Wholesale" : "wholesale",
                                "Agri" : "agri"
                            }
                            if(menu.hasOwnProperty($(this)[0].innerText))
                            {
                            hrefValue = url+menu[$(this)[0].innerText];
                            }
                        }
                        else if(hrefValue.indexOf('/sme/')> -1 || hrefValue.indexOf('/nri-banking/')> -1 || hrefValue.indexOf('/wholesale/')> -1 || hrefValue.indexOf('/agri/')> -1){
                            var url = "https://www.hdfcbank.com";
                            hrefValue = url+hrefValue;
                        }
                        gadgets.pubsub.publish("externalNBPopup",hrefValue);
                    }
                    }
                }
                else if($(this).attr('value')=='SME overlay'){
                    event.preventDefault();
                    hrefValue=$(this).attr('href').trim();
                    gadgets.pubsub.publish("otherLogin", "sme");
                }
                  else if($(this).attr('href')  !== undefined){
                    if($(this).attr('href').indexOf('leads.hdfcbank') > -1 || $(this).attr('href').indexOf('apply.hdfcbank') > -1){
                        $(this).attr('target', '_blank');
                    }
                    //added for BBENH-312
					if($(this).attr('href').indexOf('http')> -1 && $(this).attr('href').indexOf('hdfcbank')> -1 && $(this).attr('href').indexOf(currHost)<0){
                         $(this).attr('target', '_blank');
					}
                    if(b$.portal.isLogin==true){
                      var tempUrlVal =  $(this).attr('href');
                       if($(this).attr('href').indexOf('bahrain') > -1 || $(this).attr('href').indexOf('difc') > -1 || $(this).attr('href').indexOf('hongkong') > -1){
                        $(this).attr('target', '_blank');
                        }
                    }
                }
            });
//seo schema
               var pageuuid = b$.portal.pageUUID;
               var schemaArray =[];
               var schemaScript;
               if((!$('#main').hasClass("nb-portal")) && (b$.portal.isLogin == false)){
                   $.ajax({
                        url: window.location.origin + '/seo/getSchemas/'+pageuuid,
                        type: 'GET',
                         async: true,
                         success: function(resData){
                            var data = JSON.parse(resData);
                            schemaArray = data.SchemaList.schemalist;
                                if((schemaArray.length > 0)){
                                for (var i=0;i<schemaArray.length;i++){
                                function decodeEntities(encodedString){
                                     var textArea = document.createElement('textarea');
                                     textArea.innerHTML = encodedString;
                                     return textArea.value;
                                }
                                schemaScript = "<script type='application/ld+json'>"+decodeEntities(schemaArray[i].schema_value)+"</script>"
                                $('head').append(schemaScript);
                                }
                                }
                         }
                   });
               }
            //seo schema

        });
          function externalUrl(url) {
            var hostArray=url.split(".");
             var returnValue = true;
             for(var i=0; i<hostArray.length; i++){
                if(hostArray[i]==="hdfcbank"||hostArray[i]==="HDFCBANK"){
                   returnValue=false;
                }
             }
             return returnValue ;
          }
    window.launchpad = window.launchpad || {
        staticRoot: params['cRoot'] + '/static'
    };

})();