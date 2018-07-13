<template>
	<img :style="{ width: size, height: size }" :class="shadow ? 'shadow' : ''" src="~/assets/icons/logo.svg">
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
