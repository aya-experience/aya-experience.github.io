import './index.scss';

function updateScales() {
  const windowWidth = $(window).width();

  const minLeftProps = {
    viewBox: [1700, 1000, 1180, 1750],
    x: 1650,
    y: 1020
  };

  const minRightProps = {
    viewBox: [0, 1000, 1180, 1780],
    x: 0,
    y: 1000
  };

  const maxProps = {
    viewBox: [0, 0, 2831, 3761],
    x: 0,
    y: 0
  };

  let propsLeft = maxProps;
  let propsRight = maxProps;

  if (windowWidth <= 768) {
    propsLeft = minLeftProps;
    propsRight = minRightProps;
  }

  const $this = $(this);

  $('svg.left, section .left svg').each(() => {
    $this.attr('viewBox', propsLeft.viewBox.join(' '));
  });
  $('.left image').each(() => {
    $this.attr('x', propsLeft.x);
    $this.attr('y', propsLeft.y);
  });

  $('svg.right, section .right svg').each(() => {
    $this.attr('viewBox', propsRight.viewBox.join(' '));
  });
  $('.right image').each(() => {
    $this.attr('x', propsRight.x);
    $this.attr('y', propsRight.y);
  });
}

function waitForMainBackground() {
  const div = document.querySelector('.palm-background');
  const style = window.getComputedStyle(div, ':before');
  const src = style['background-image'];
  const url = src.match(/\((.*?)\)/)[1].replace(/('|")/g, '');
  const img = new Image();
  img.onload = () => document.body.classList.add('loaded');
  img.src = url;
}

$(window).resize(() => {
  updateScales();
});
$(document).ready(() => {
  updateScales();
  waitForMainBackground();
});
