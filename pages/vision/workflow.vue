<template>
	<div class="container"/>
</template>

<style scoped>
.container {
	height: 100vh;
	width: 100vw;
	background-image: url("/diagrams/workflow.svg");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

@media (max-width: 600px) {
	div.container {
		background-size: contain;
	}
}
</style>
