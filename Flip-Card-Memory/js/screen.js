$(function () {
  $('.box').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
  });
});
