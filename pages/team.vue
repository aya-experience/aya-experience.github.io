<template>
	<div class="container">
		<img :class="loaded ? '' : 'loading'" class="center" src="/photos/lune.jpg">
		<no-ssr>
			<a-scene>
				<a-assets>
					<a-asset-item id="perso-obj" src="/vr/perso/model.obj"/>
					<a-asset-item id="perso-mtl" src="/vr/perso/materials.mtl"/>

					<a-asset-item id="pen-obj" src="/vr/pen/model.obj"/>
					<a-asset-item id="pen-mtl" src="/vr/pen/materials.mtl"/>

					<a-asset-item id="fox-obj" src="/vr/fox/model.obj"/>
					<a-asset-item id="fox-mtl" src="/vr/fox/materials.mtl"/>

					<a-asset-item id="arrow-obj" src="/vr/arrow/model.obj"/>
					<a-asset-item id="arrow-mtl" src="/vr/arrow/materials.mtl"/>

					<a-asset-item id="map" src="/vr/island/scene.gltf"/>

					<img id="hud" src="/vr/HUD/hudLine.png">
					<img id="sky" src="/vr/space.jpg">
					<img id="exit" src="/vr/menu/exit.png">
				</a-assets>

				<my-camera/>
				<a-sky radius="10" src="#sky"/>
				<a-entity
					:position="currentPositionValue"
					id="changeAnim"
					:animation="`
					property: position;
					to: ${positionNextValue};
					startEvents: changeMap;
					dur: 6000;`">
					<a-world position="0 0 0" :type="spring">
						<my-character
							:member="mathieu"
							friend="obj: #fox-obj; mtl: #fox-mtl"
							friend-scale="0.25 0.25 0.25"
							position="0.835 0.780 0.425"
							rotation="28.591 48.816 -4.240"/>
						<my-character :member="florent" position="1.218 0.147 -0.271" rotation="-10.463 48 3.140"/>
						<my-character :member="justine" friend="obj: #pen-obj; mtl: #pen-mtl" position="0.817 0.108 0.671" rotation="0 84 0"/>
					</a-world>
					<a-world position="0 0 15" :type="snow">
						<my-character :member="florent" position="1.026 0.178 -0.284" rotation="-10.463 48 3.140"/>
						<my-character :member="justine" friend="obj: #pen-obj; mtl: #pen-mtl" position="1.134 0.177 0.433" rotation="0 84 0"/>
					</a-world>
					<a-world position="0 0 30" :type="spring">
						<my-character :member="florent" position="1.026 0.178 -0.284" rotation="-10.463 48 3.140"/>
						<my-character :member="justine" friend="obj: #pen-obj; mtl: #pen-mtl" position="1.134 0.177 0.433" rotation="0 84 0"/>
					</a-world>
				</a-entity>
				<a-menu @map="changeMap($event)"/>
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
import springJson from '~/static/vr/spring.json';
import snowJson from '~/static/vr/snow.json';

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
			spring: springJson,
			snow: snowJson,
			offsetZ: 15,
			currentPosition: {
				x: -1.8,
				y: 0.768,
				z: 0
			},
			positionNext: {
				x: -1.8,
				y: 0.768,
				z: 0
			},
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
	computed: {
		currentPositionValue() {
			return `${this.currentPosition.x} ${this.currentPosition.y} ${this.currentPosition.z}`;
		},
		positionNextValue() {
			return `${this.positionNext.x} ${this.positionNext.y} ${this.positionNext.z}`;
		}
	},
	mounted() {
		// TODO: refacto
		setTimeout(() => {
			this.loaded = true;
			const animation = document.querySelector('#changeAnim');
			animation.addEventListener('animationend', () => {
				this.currentPosition.z = this.positionNext.z;
			});
		}, 3000);
	},
	methods: {
		changeMap(event) {
			this.positionNext.z += this.offsetZ * event;
			this.$nextTick()
				.then(() => {
					document.querySelector('#changeAnim').emit('changeMap');
				});
		}
	}
};
</script>
