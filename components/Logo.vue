<template>
	<img :style="{ width: size, height: size }" src="~/assets/icons/logo.svg" :class="shadow ? 'shadow' : ''">
</template>

<style scoped>
.shadow {
	filter: drop-shadow( -1px -1px 5px #FFF );
}
</style>

<script>
export default {
	props: {
		size: {
			type: String,
			default: ''
		},
		shadow: {
			type: Boolean,
			default: false
		}
	}
};
</script>
