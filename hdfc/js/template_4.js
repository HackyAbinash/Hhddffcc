// This file was automatically generated from template-hdfc-portal-lifestage.soy.
// Please don't edit this file by hand.

if (typeof templates_templateHdfcPortalLifestage == 'undefined') { var templates_templateHdfcPortalLifestage = {}; }


templates_templateHdfcPortalLifestage.templateHdfcPortalLifestage = function(opt_data, opt_ignored) {
  var output = '<div class="bp-container c-template-hdfc-lifestage" data-pid="' + soy.$$escapeHtml(opt_data.item.name) + '"><div class="row"><div class="show-for-desktop"><div class="bp-area c-template-hdfc-lifestage--area  lifestage-solutions col-lg-6 col-md-6 col-sm-4">';
  var childList6 = opt_data.item.children;
  var childListLen6 = childList6.length;
  for (var childIndex6 = 0; childIndex6 < childListLen6; childIndex6++) {
    var childData6 = childList6[childIndex6];
    output += (parseInt(childData6.preferences.area.value,10) == 0) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div><div class="bp-area c-template-hdfc-lifestage--area offers-for-you col-lg-3 col-md-3 col-sm-4">';
  var childList13 = opt_data.item.children;
  var childListLen13 = childList13.length;
  for (var childIndex13 = 0; childIndex13 < childListLen13; childIndex13++) {
    var childData13 = childList13[childIndex13];
    output += (parseInt(childData13.preferences.area.value,10) == 1) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div><div class="bp-area c-template-hdfc-lifestage--area contact-us col-lg-3 col-md-3 col-sm-4">';
  var childList20 = opt_data.item.children;
  var childListLen20 = childList20.length;
  for (var childIndex20 = 0; childIndex20 < childListLen20; childIndex20++) {
    var childData20 = childList20[childIndex20];
    output += (parseInt(childData20.preferences.area.value,10) == 2) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div></div><div class="show-for-mobile"></div></div></div>';
  return output;
};
