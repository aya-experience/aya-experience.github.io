<!--eslint-disable-->
<template>
<div>
	<img v-if="!loaded" class="center" src="/photos/lune.jpg">
	<no-ssr>
		<a-scene>
        <a-assets>
            <a-asset-item id="island-obj" src="/vr/scene/model.obj"></a-asset-item>
            <a-asset-item id="island-mtl" src="/vr/scene/materials.mtl"></a-asset-item>
        </a-assets>
        <a-entity rotation="75 90 0" position="0 1.5 1" camera look-controls>
            <a-entity cursor="fuse: true; fuseTimeout: 500"
            		position="0 0 -0.4"
					scale="0.3 0.3 0.3"
            		geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            		material="color: black; shader: flat">
			</a-entity>
			<a-animation attribute="position"
               dur="8000"
               fill="forwards"
			   from="0 1.5 1"
               to="0 1.5 0"
               repeat="0"></a-animation>
			<a-animation attribute="rotation"
               dur="8000"
               fill="forwards"
			   from="90 90 0"
               to="0 90 0"
               repeat="0"></a-animation>
        </a-entity>
        <a-sky radius="10" src="/vr/space.jpg"></a-sky>
        <a-entity position="0 1.3 0" obj-model="obj: #island-obj; mtl: #island-mtl"></a-entity>

		<a-entity id="entity" v-if="displayHUD" position="-0.618 1.495 -0.25" rotation="0 -42.227 0">
			<a-text id="name" position="0 0.140 -0.230" scale="0.3 0.3 1" rotation="0 90 0" value="Hello"></a-text>
			<a-plane position="0 0.037 -0.377" rotation="0 90 0" color="#CCC" height="0.3" width="0.3"></a-plane>
		</a-entity>
		<a-entity  @click="handleClick" >
			<a-entity id="astro" gltf-model="url(/vr/astronaute/Spationot.gltf)" position="-0.614 1.186 -0.387" rotation="0 40.565 0" scale="0.080 0.080 0.080"></a-entity>
		</a-entity>
      </a-scene>
	</no-ssr>
	</div>
</template>

<style scoped>
.center {
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}
</style>

<script>

export default {
	data() {
		return {
			displayHUD: false,
			loaded: false
		};
	},
	mounted() {
		setTimeout(() => {
			this.loaded = true;
			document.querySelector('body').style.background = 'none';
		}, 3000);
	},
	methods: {
		handleClick() {
			this.displayHUD = true;
		}
	}
};
</script>
