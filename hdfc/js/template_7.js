// This file was automatically generated from template-hdfc-header.soy.
// Please don't edit this file by hand.

if (typeof templates_templateHdfcHeader == 'undefined') { var templates_templateHdfcHeader = {}; }


templates_templateHdfcHeader.templateHdfcHeader = function(opt_data, opt_ignored) {
  var output = '<header><div class="top-menu"><div class="row main-nav-container"><div class="main-header bp-container B-template-hdfc-header container" data-pid="' + soy.$$escapeHtml(opt_data.item.name) + '"><div class="row"><div class="bp-area B-template-hdfc-header--area col-md-12 col-sm-12 col-xs-2 hamer">';
  var childList6 = opt_data.item.children;
  var childListLen6 = childList6.length;
  for (var childIndex6 = 0; childIndex6 < childListLen6; childIndex6++) {
    var childData6 = childList6[childIndex6];
    output += (parseInt(childData6.preferences.area.value,10) == 0) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div><div class="bp-area B-template-hdfc-header--area col-lg-9 col-md-8 col-sm-10 col-xs-8">';
  var childList13 = opt_data.item.children;
  var childListLen13 = childList13.length;
  for (var childIndex13 = 0; childIndex13 < childListLen13; childIndex13++) {
    var childData13 = childList13[childIndex13];
    output += (parseInt(childData13.preferences.area.value,10) == 1) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div><div class="bp-area B-template-hdfc-header--area col-lg-3 col-md-4 col-sm-2 col-xs-2">';
  var childList20 = opt_data.item.children;
  var childListLen20 = childList20.length;
  for (var childIndex20 = 0; childIndex20 < childListLen20; childIndex20++) {
    var childData20 = childList20[childIndex20];
    output += (parseInt(childData20.preferences.area.value,10) == 2) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div></div></div></div></div></header>';
  return output;
};
