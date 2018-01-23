<template>
	<section>
		<aya-back/>
		<p>hello</p>
	</section>
</template>

<style scoped>
p {
	margin-left: 200px;
}
</style>

<script>
import BackButton from '~/components/BackButton.vue'

export default {
	components: {
		'aya-back': BackButton
	}
}
</script>
