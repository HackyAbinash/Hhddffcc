// This file was automatically generated from template-hdfc-middle-section.soy.
// Please don't edit this file by hand.

if (typeof templates_templateHdfcMiddleSection == 'undefined') { var templates_templateHdfcMiddleSection = {}; }


templates_templateHdfcMiddleSection.templateHdfcMiddleSection = function(opt_data, opt_ignored) {
  var output = '<div class="bp-container c-template-hdfc-middle-section" data-pid="' + soy.$$escapeHtml(opt_data.item.name) + '"><div class="container"><div class="row"><div class="bp-area c-template-hdfc-middle-section--area">';
  var childList6 = opt_data.item.children;
  var childListLen6 = childList6.length;
  for (var childIndex6 = 0; childIndex6 < childListLen6; childIndex6++) {
    var childData6 = childList6[childIndex6];
    output += (parseInt(childData6.preferences.area.value,10) == 0) ? soy.$$filterNoAutoescape("") : '';
  }
  output += '</div></div></div></div>';
  return output;
};
