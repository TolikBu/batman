$(document).ready(function () {
  let tabsItem = $('.tabs-item');

  tabsItem.on('click', function (event) {
    event.preventDefault();
    let activContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activContent).toggleClass('visible');
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');
  })
});