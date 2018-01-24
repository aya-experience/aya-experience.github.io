<template>
	<div class="by-zenika">
		<img src="/logos/zenika.png" alt="Zenika"/>
		<p>Digital Agency<br>by Zenika</p>
	</div>
</template>

<style scoped>
div.by-zenika {
	position: fixed;
	bottom: 20vh;
	right: calc(50vw + 30vh);
	z-index: 1;
	text-align: center;

	transition: opacity .5s ease;
	opacity: 0;
}

.loaded div.by-zenika {
	opacity: 1;
}

.dive div.by-zenika {
	opacity: 0;
}

img {
	height: 15vh;
	width: 15vh;
}

p {
	margin: 0;
}
</style>
