$(function() {
  $('.vr-menu a').click(function (elm) {
    var tpl = $(elm.target).text().toLowerCase();
    var parent = $(elm.target).parent();

    // Select menu
    $('.vr-menu li').removeClass('pure-menu-selected');
    parent.addClass('pure-menu-selected');

    // Show content
    $('.vr-main').html($('#vr-' + tpl).html());
  });

  // Select default menu
  $('.vr-main').html($('#vr-about').html());
});
