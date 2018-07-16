<template>
	<div class="container">
		<div class="head">
			<p class="head--text">Qui êtes-vous ?</p>
			<img class="head--img" src="/agence/line.svg">
		</div>
		<forms :values="types"/>
	</div>
</template>

<style scoped>
.head {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10vh;
}
.head--text {
	font-size: 3rem;
	font-weight: 100;
}
.head--img {
	margin-top: -2vh;
	max-width: 100%;
}
</style>

<script>
import Forms from '~/components/contact/Forms';
export default {
	components: {
		forms: Forms
	},
	data() {
		return {
			types: ['Un Client', 'Un Prospect', 'Un Développeur', 'Un Ewok']
		};
	}
};
</script>
