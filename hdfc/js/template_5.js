// This file was automatically generated from template-portal-hero-banner-section.soy.
// Please don't edit this file by hand.

if (typeof templates_templatePortalHeroBannerSection == 'undefined') { var templates_templatePortalHeroBannerSection = {}; }


templates_templatePortalHeroBannerSection.templatePortalHeroBannerSection = function(opt_data, opt_ignored) {
  var output = '<div class="bp-container c-template-portal-hero-banner-section c-hero-banner" data-pid="' + soy.$$escapeHtml(opt_data.item.name) + '"><div class="container"><div class="row"><div class="bp-area c-template-portal-hero-banner-section--area col-lg-9 col-sm-8 first-section col-xs-12 large-side-scroll-fix">';
  var childList6 = opt_data.item.children;
  var childListLen6 = childList6.length;
  for (var childIndex6 = 0; childIndex6 < childListLen6; childIndex6++) {
    var childData6 = childList6[childIndex6];
    output += (parseInt(childData6.preferences.area.value,10) == 0) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div><div class="bp-area c-template-portal-hero-banner-section--area col-lg-3 col-sm-4 second-section col-xs-12 right-side-scroll-fix">';
  var childList13 = opt_data.item.children;
  var childListLen13 = childList13.length;
  for (var childIndex13 = 0; childIndex13 < childListLen13; childIndex13++) {
    var childData13 = childList13[childIndex13];
    output += (parseInt(childData13.preferences.area.value,10) == 1) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div></div></div></div>';
  return output;
};
