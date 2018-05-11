<template>
	<nuxt-link :to="page">
		<aya-kanji size="45px" shadow/>
	</nuxt-link>
</template>

<style scoped>
a {
	position: fixed;
	top: 5px;
	left: 50%;
	height: 50px;
	width: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	color: white;
	text-decoration: none;
	cursor: pointer;
	transition: color .5s ease;
	z-index: 3;
	transform: translate(-50%, 0);
}

</style>

<script>
import Kanji from '~/components/Logo';

export default {
	components: {
		'aya-kanji': Kanji
	},
	props: {
		page: {
			type: String,
			default: '/'
		}
	}
};
</script>
