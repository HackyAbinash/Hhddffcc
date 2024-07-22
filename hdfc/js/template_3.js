// This file was automatically generated from template-hdfc-portal-8-4.soy.
// Please don't edit this file by hand.

if (typeof templates_templateHdfcPortal84 == 'undefined') { var templates_templateHdfcPortal84 = {}; }


templates_templateHdfcPortal84.templateHdfcPortal84 = function(opt_data, opt_ignored) {
  var output = '<div class="bp-container c-template-hdfc-portal-8-4" data-pid="' + soy.$$escapeHtml(opt_data.item.name) + '"><div class="row"><div class="bp-area s-hdfc-app--area col-lg-8 col-sm-8">';
  var childList6 = opt_data.item.children;
  var childListLen6 = childList6.length;
  for (var childIndex6 = 0; childIndex6 < childListLen6; childIndex6++) {
    var childData6 = childList6[childIndex6];
    output += (parseInt(childData6.preferences.area.value,10) == 0) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div><div class="bp-area s-hdfc-app--area col-lg-4 col-sm-4">';
  var childList13 = opt_data.item.children;
  var childListLen13 = childList13.length;
  for (var childIndex13 = 0; childIndex13 < childListLen13; childIndex13++) {
    var childData13 = childList13[childIndex13];
    output += (parseInt(childData13.preferences.area.value,10) == 1) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div></div></div>';
  return output;
};
