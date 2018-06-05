<template>
	<div class="slides">
		<div class="slide" id="slide-1">
			<div class="slide__bg"/>
			<div class="slide__content">
				<div class="slide__text">
					<h1 id="slide-1-title">Slide 1 title</h1>
					<p>Bacon ipsum dolor amet alcatra beef meatloaf brisket beef ribs meatball tenderloin shank ball tip ribeye pig pastrami filet mignon. Sirloin tail fatback venison shank salami. Picanha pastrami venison meatball kevin pork chop leberkas. Meatloaf tenderloin leberkas pancetta hamburger cow kielbasa, filet mignon tri-tip beef ribs.</p>
				</div>
				<div class="slide__image">
					<svg viewBox="0 0 400 425" width="400" height="425"><use xlink:href="#polaroid"/></svg>
				</div>
			</div>
		</div>

		<div class="slide" id="slide-2">
			<div class="slide__bg"/>
			<div class="slide__content">
				<div class="slide__text">
					<h1 id="slide-2-title">Slide 2 title</h1>
					<p>Bacon ipsum dolor amet alcatra beef meatloaf brisket beef ribs meatball tenderloin shank ball tip ribeye pig pastrami filet mignon. Sirloin tail fatback venison shank salami. Picanha pastrami venison meatball kevin pork chop leberkas. Meatloaf tenderloin leberkas pancetta hamburger cow kielbasa, filet mignon tri-tip beef ribs.</p>
					<p>Bacon ipsum dolor amet alcatra beef meatloaf brisket beef ribs meatball tenderloin shank ball tip ribeye pig pastrami filet mignon. Sirloin tail fatback venison shank salami. Picanha pastrami venison meatball kevin pork chop leberkas. Meatloaf tenderloin leberkas pancetta hamburger cow kielbasa, filet mignon tri-tip beef ribs.</p>
				</div>
				<div class="slide__image">
					<svg viewBox="0 0 400 425" width="400" height="425"><use xlink:href="#polaroid"/></svg>
				</div>
			</div>
		</div>

		<div class="slide" id="slide-3">
			<div class="slide__bg"/>
			<div class="slide__content">
				<div class="slide__text">
					<h1 id="slide-3-title">Slide 3 title</h1>
					<p>Bacon ipsum dolor amet alcatra beef meatloaf brisket beef ribs meatball tenderloin shank ball tip ribeye pig pastrami filet mignon. Sirloin tail fatback venison shank salami. Picanha pastrami venison meatball kevin pork chop leberkas. Meatloaf tenderloin leberkas pancetta hamburger cow kielbasa, filet mignon tri-tip beef ribs.</p>
					<p>Bacon ipsum dolor amet alcatra beef meatloaf brisket beef ribs meatball tenderloin shank ball tip ribeye pig pastrami filet mignon. Sirloin tail fatback venison shank salami. Picanha pastrami venison meatball kevin pork chop leberkas. Meatloaf tenderloin leberkas pancetta hamburger cow kielbasa, filet mignon tri-tip beef ribs.</p>
				</div>
				<div class="slide__image">
					<svg viewBox="0 0 400 425" width="400" height="425"><use xlink:href="#polaroid"/></svg>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
/* demo styles
  --------------------------------------------- */

  body {
    font: 120% / 1.5 Arial;
    color: white;
    scroll-behavior: smooth;
    overflow-y: hidden;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1, p {
    margin-bottom: 1.5em;
  }

  body > svg {
    display: none;
  }

  /* slide layout
  --------------------------------------------- */

  .slide {
    position: relative;
    padding: 8% 0;
  }
  .slide__content {
    max-width: 1200px;
    margin: auto;
  }
  .slide__text, .slide__image {
    padding: 8%;
  }
  .slide__image svg {
    display: block;
    width: 100%;
    max-width: 560px;
    margin: auto;
  }
  .slide__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  /* slide backgrounds */

 .slide__bg {
    background-image: url('/agence/stars.svg');
    background-color: black;
  }
  /* misc
  --------------------------------------------- */

  .demo__info {
    position: fixed;
    width: 100%;
    top: 0;
    font-size: 80%;
    text-align: center;
    background: rgba(255,255,255,.5);
    padding: 0.5em;
    z-index: 100;
  }

  /* Large screen layout
  --------------------------------------------- */

  @media screen and (min-width: 45em) {
    .slide__content {
      display: -webkit-flex;
      display: flex;
      align-items: center;
    }
    .slide__image, .slide__text {
      padding: 3%;
      -webkit-flex: 1;
      flex: 1;
    }
    .slide:nth-child(2n) .slide__text {
      -webkit-order: 1;
      order: 1;
    }
    .nav {
      display: flex;
    }
    /* horizontal scroll styles */
    html, body {
      height: 100%;
    }
    .slides {
      white-space: nowrap;
      height: 100%;
    }
    .slide {
      width: 100%;
      height: 100%;
      display: inline-block;
      vertical-align: middle;
      white-space: normal;
      margin-right:-.3em;
    }
    .slide__content {
      height: 100%;
    }

    /* parallax */
    @supports ((perspective: 1px) and (not (-webkit-overflow-scrolling: touch))) {
      html, body {
        overflow: hidden;
      }
      body {
        transform: translateZ(0px); /* Fix paint issues in Edge && Safari H/W acceleration */
      }
      .slides {
        position: absolute;
        overflow-x: auto;
        overflow-y: hidden;
        perspective: 300px;
        scroll-behavior: smooth;
        width: 100%;
      }
      .slide, .slide__content {
        transform-style: preserve-3d;
      }
      .slide__text {
        transform: translateZ(60px) scale(.8);
        transform-origin: 100% 50%;
      }
      .slide:nth-child(2n) .slide__image {
        transform: translateZ(100px) scale(.67);
        transform-origin: 100% 50%;
      }
      .slide:nth-child(2n) .slide__text {
        transform-origin: 0% 50%;
      }
      .slide:nth-child(2n) .slide__bg {
        transform: translateZ(59px) scale(.85);
      }
      .slide:nth-child(2n+1):not(:first-child) .slide__bg {
        left: -50%;
      }
      .slide:nth-child(2n+1):not(:last-child) .slide__bg {
        right: -50%;
      }
      .slide:nth-child(2n) {
        z-index: 1; /* ensure slides overlay correctly */
      }
    }
  }
</style>

<script>
</script>
