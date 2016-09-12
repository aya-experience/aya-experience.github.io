import './index.scss';

function updateScales() {
  var windowWidth = $(window).width();

  var minLeftProps = {
    viewBox: [1700, 1000, 1180, 1750],
    x: 1650,
    y: 1020
  }

  var minRightProps = {
    viewBox: [0, 1000, 1180, 1780],
    x: 0,
    y: 1000
  }

  var maxProps = {
    viewBox: [0, 0, 2831, 3761],
    x: 0,
    y: 0
  }

  var propsLeft = maxProps;
  var propsRight = maxProps;

  if (windowWidth <= 768) {
    propsLeft = minLeftProps;
    propsRight = minRightProps;
  }

  $('svg.left, section .left svg').each(function () {
    $(this).attr('viewBox', propsLeft.viewBox.join(' '));
  });
  $('.left image').each(function () {
    $(this).attr('x', propsLeft.x);
    $(this).attr('y', propsLeft.y);
  });

  $('svg.right, section .right svg').each(function () {
    $(this).attr('viewBox', propsRight.viewBox.join(' '));
  });
  $('.right image').each(function () {
    $(this).attr('x', propsRight.x);
    $(this).attr('y', propsRight.y);
  });
}

$(window).resize(function () {
  updateScales();
});
$(document).ready(function () {
  updateScales();
});
