<template>
	<div
		:style="{
			backgroundImage: `linear-gradient(${rot}deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, ${darken})), url('${image}')`
		}"
		class="slide-background"
	>
		<slot/>
	</div>
</template>

<style scoped>
div.slide-background {
	height: 100vh;
	width: 100vw;
	background-position: center;
	background-size: cover;
}
</style>

<script>
export default {
	props: {
		image: {
			type: String,
			required: true
		},
		darken: {
			type: Number,
			default: 0
		},
		rot: {
			type: Number,
			default: 0
		}
	}
};
</script>
