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

@media (max-width: 600px) {
	div.by-zenika {
		position: relative;
		top: 0;
		left: 0;
		text-align: center;
		display: none;
		margin: 50px;
	}

	.loaded div.by-zenika {
		display: block;
	}
}
</style>
