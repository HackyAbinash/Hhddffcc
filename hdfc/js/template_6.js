// This file was automatically generated from template-hdfc-search.soy.
// Please don't edit this file by hand.

if (typeof templates_templateHdfcSearch == 'undefined') { var templates_templateHdfcSearch = {}; }


templates_templateHdfcSearch.templateHdfcSearch = function(opt_data, opt_ignored) {
  var output = '<div class="top-menu"><div class="row main-search-container"><div class="bp-container c-template-hdfc-search container" data-pid="' + soy.$$escapeHtml(opt_data.item.name) + '"><div class="row"><div class="bp-area c-template-hdfc-search--area col-lg-5 col-md-3 col-sm-5 col-xs-9">';
  var childList6 = opt_data.item.children;
  var childListLen6 = childList6.length;
  for (var childIndex6 = 0; childIndex6 < childListLen6; childIndex6++) {
    var childData6 = childList6[childIndex6];
    output += (parseInt(childData6.preferences.area.value,10) == 0) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div><div class="bp-area c-template-hdfc-search--area col-lg-6 col-md-3 col-sm-5 col-xs-1">';
  var childList13 = opt_data.item.children;
  var childListLen13 = childList13.length;
  for (var childIndex13 = 0; childIndex13 < childListLen13; childIndex13++) {
    var childData13 = childList13[childIndex13];
    output += (parseInt(childData13.preferences.area.value,10) == 1) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div><div class="bp-area c-template-hdfc-search--area col-lg-1 col-md-2 col-sm-2 col-xs-2">';
  var childList20 = opt_data.item.children;
  var childListLen20 = childList20.length;
  for (var childIndex20 = 0; childIndex20 < childListLen20; childIndex20++) {
    var childData20 = childList20[childIndex20];
    output += (parseInt(childData20.preferences.area.value,10) == 2) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div></div></div></div></div>';
  return output;
};
