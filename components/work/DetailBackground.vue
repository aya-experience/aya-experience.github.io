<template>
	<div class="bg-company">
		<div class="bg-company-header">
			<p>{{ projectName }}</p>
			<button @click="hideWork">X</button>
		</div>
		<img :src="menuBg">
	</div>
</template>

<style scoped>
.bg-company img {
	display: block;
	margin-left: auto;
	margin-right: auto;
	object-fit: cover;
}

.bg-company p {
	font-family: Lato;
	font-weight: 900; 
	font-size: 1.5rem;
	line-height: 2rem;
}

.bg-company div {
	background-color: #727272;
}

.bg-company-header {
	display: flex;
	justify-content: space-around;
}
</style>

<script>
export default {
	props: {
		menuBg: {
			type: String,
			required: true
		},
		projectName: {
			type: String,
			required: true
		}
	},
	methods: {
		hideWork () {
			this.$emit('hideWork')
		}
	}
}
</script>
