<template>
	<div>
		<nuxt/>
	</div>
</template>

<style>
	@font-face {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 300;
		src: url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2) format('woff2');
	}

	* {
		box-sizing: border-box;
	}
	html {
		font-family: Lato;
		font-size: 62.5%;
		background-color: black;
		color: white;
		height: 100%;
		overflow: hidden;
	}
	body {
		margin: 0;
		/* padding-bottom: 50px; */
	}
	@media only screen and (max-width: 800px) {
		html {
			font-size: 50%;
		}

}
</style>
