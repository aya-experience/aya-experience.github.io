<template>
	<div class="slide-text-block"><slot/></div>
</template>

<style scoped>
	div.slide-text-block {
		position: fixed;
		background-color: #00000080;
		padding: 0 50px;
	}

	div.slide-text-block >>> p {
		text-align: center;
		font-size: 30px;
		font-weight: lighter;
	}
</style>
