<template>
	<div
		:style="{ width: size, height: size }"
		class="container"
	>
		<div
			:style="{ background: kanjiBg }"
			class="kanji-background"
		/>
		<aya-kanji/>
	</div>
</template>

<style scoped>
div.container {
	position: relative;
}
div.container .kanji-background {
	position: absolute;
	top: 1px;
	bottom: 1px;
	left: 1px;
	right: 1px;
}
div.container >>> svg.kanji {
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
}
</style>

<script>
import Kanji from '~/components/KanjiMask';
export default {
	components: {
		'aya-kanji': Kanji
	},
	props: {
		size: {
			type: String,
			default: '100px'
		},
		kanjiBg: {
			type: String,
			default: 'white'
		}
	}
};
</script>
