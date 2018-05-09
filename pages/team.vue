<!--eslint-disable-->
<template>
<div class="container">
	<img :class="this.loaded ? '' : 'loading'" class="center" src="/photos/lune.jpg">
	<no-ssr>
		<a-scene>
        <a-assets>
			<a-asset-item id="perso-obj" src="/vr/perso/model.obj"></a-asset-item>
            <a-asset-item id="perso-mtl" src="/vr/perso/materials.mtl"></a-asset-item>

			<a-asset-item id="pen-obj" src="/vr/pen/model.obj"></a-asset-item>
            <a-asset-item id="pen-mtl" src="/vr/pen/materials.mtl"></a-asset-item>

			<a-asset-item id="fox-obj" src="/vr/fox/model.obj"></a-asset-item>
            <a-asset-item id="fox-mtl" src="/vr/fox/materials.mtl"></a-asset-item>

			<a-asset-item id="arrow-obj" src="/vr/arrow/model.obj"></a-asset-item>
            <a-asset-item id="arrow-mtl" src="/vr/arrow/materials.mtl"></a-asset-item>

			<img id="hud" src="/vr/HUD/hudLine.png">
			<img id="sky" src="/vr/space.jpg">
			<img id="exit" src="/vr/menu/exit.png">
        </a-assets>

		<my-camera/>
        <a-sky radius="10" src="#sky"></a-sky>
		<a-world>
			<my-character :member="mathieu" friend="obj: #fox-obj; mtl: #fox-mtl" friendScale="0.25 0.25 0.25" position="-0.867 1.524 0.425" rotation="28.591 48.816 -4.240"/>
			<my-character :member="florent" position="-1.047 0.869 0.057" rotation="-10.463 48 3.140"/>
			<my-character :member="justine" friend="obj: #pen-obj; mtl: #pen-mtl" position="-0.737 0.898 0.832" rotation="0 84 0"/>
		</a-world>
		<a-menu/>
      </a-scene>
	</no-ssr>
	</div>
</template>

<style scoped>
.center {
	top: -6.1vh;
	height: 100%;
	width: 100%;
	position: relative;
}

.loading{
	z-index: 1;
}

.container {
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

.page-leave-active {
  transition: opacity .5s
}
.page-leave-active {
  opacity: 0
}

</style>

<script>
import Camera from '~/components/team/camera.vue';
import World from '~/components/team/world.vue';
import Character from '~/components/team/character.vue';
import Menu from '~/components/team/Menu.vue';

export default {
	components: {
		'my-camera': Camera,
		'my-character': Character,
		'a-world': World,
		'a-menu': Menu
	},
	data() {
		return {
			loaded: false,
			mathieu: {
				name: 'matthieu lux',
				role: 'Director of AYA',
				desc: 'Hello',
				icon: '/vr/ayaMember/lux.jpeg'
			},
			florent: {
				name: 'florent berthelot',
				role: 'Lead Dev',
				desc: 'Aya',
				icon: '/vr/ayaMember/florent.png'
			},
			justine: {
				name: 'justine gaudin',
				role: 'UX/UI',
				desc: 'Design',
				icon: '/vr/ayaMember/justine.jpg'
			}
		};
	},
	mounted() {
		setTimeout(() => {
			this.loaded = true;
		}, 3000);
	}
};
</script>
