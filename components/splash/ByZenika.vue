<template>
	<div class="by-zenika">
		<i>by</i> &nbsp;
		<img src="/logos/zenika-name.png" alt="Zenika">
	</div>
</template>

<style scoped>
div.by-zenika {
	position: absolute;
	width: 100%;
	bottom: 28vh;
	z-index: 1;

	display: flex;
	flex-direction: row;
	justify-content: center;
	text-align: center;
	font-size: 3vh;
	font-weight: lighter;
	align-items: baseline;

	animation-name: by-zenika-appear;
	animation-duration: 6.5s;
	animation-timing-function: linear;
}

div.by-zenika i {
	opacity: .8;
}

.dive div.by-zenika {
	opacity: 0;
}

img {
	height: 4vh;
}

p {
	margin: 0;
}

/* @media (max-width: 600px) {
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
} */

@keyframes by-zenika-appear {
	0% { opacity: 0 }
	90% { opacity: 0 }
	100% { opacity: 1 }
}
</style>
