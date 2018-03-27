<template>
	<nuxt-link :to="page">
		<span>&lt;</span>
		<aya-kanji size="50px"/>
		<div class="back"/>
	</nuxt-link>
</template>

<style scoped>
a {
	position: fixed;
	top: 20px;
	left: 20px;
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
}

span {
	width: 10px;
	z-index: 1;
}

a >>> div.kanji-background,
a >>> svg.kanji-mask {
	z-index: 1;
}

a:hover {
	color: #EBB815;
}

a:hover >>> .kanji-mask {
	background-color: #EBB815;
}

.back {
	position: fixed;
	background-color: black;
	top: -50px;
	left: -50px;
	width: 400px;
	height: 90px;
	transform: rotate(-20deg);
	box-shadow: 0px 0px 10px 10px black;
}
</style>

<script>
import Kanji from '~/components/Kanji';

export default {
	components: {
		'aya-kanji': Kanji
	},
	props: {
		page: {
			type: String,
			default: "/"
		},
	}
};
</script>
