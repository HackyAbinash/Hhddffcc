!function(){"use strict";var e=b$.bdom.getNamespace("http://backbase.com/2013/portalView").getClass("container");e.extend(function(){e.apply(this,arguments),this.isPossibleDragTarget=!0},{localName:"templateHdfcPortalLifestage",namespaceURI:"templates_templateHdfcPortalLifestage"},{template:function(e){var t={item:e.model.originalItem};return window[this.namespaceURI][this.localName](t)},handlers:{DOMReady:function(){o();var e=!1,t=!1;function o(){$(window).width()<768?(e=!0,$(".show-for-desktop").append($(".show-for-desktop .lifestage-solutions")),$(".show-for-desktop").prepend($(".show-for-desktop .contact-us"))):e=!1}$(window).on("resize",function(){$(window).width()<768?(e||o(),t=!1):t||(e=!(t=!0),$(".show-for-desktop").prepend($(".show-for-desktop .lifestage-solutions")),$(".show-for-desktop").append($(".show-for-desktop .contact-us")))})},preferencesSaved:function(e){e.target===this&&this.refreshHTML(function(e){})}}})}();