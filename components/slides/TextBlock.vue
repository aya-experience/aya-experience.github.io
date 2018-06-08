<template>
	<div class="slide-text-block"><slot/></div>
</template>

<style scoped>
div.slide-text-block {
	position: fixed;
	background-color: #000000C3;
	padding: 0 50px;
	border-radius: 25px;
}

div.slide-text-block >>> p {
	text-align: center;
	font-size: 30px;
	font-weight: lighter;
}

@media (max-width: 600px) {
	div.slide-text-block {
		width: 80%;
		left: 10%;
		bottom: 50px;
		top: auto;
	}

	div.slide-text-block >>> p {
		text-align: center;
		font-size: 20px;
		font-weight: lighter;
	}
}
</style>
