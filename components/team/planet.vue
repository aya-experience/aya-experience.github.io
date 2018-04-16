<template>
	<a-entity>
		<a-entity
			position="0.475 -1.334 -0.011"
			:rotation="currentRotation"
			id="changeAnim"
			:animation="`
			property: rotation;
			to: ${nextRotation};
			startEvents: changeMap;
			dur: 6000;`">
			<a-obj-model
				id="planetObj"
				scale="0.5 0.5 0.5"
				src="#planet"
				mtl="#planet-mtl">
				<slot/>
			</a-obj-model>
		</a-entity>
		<a-menu @map="changeMap($event)"/>
	</a-entity>
</template>

<script>
import Menu from '~/components/team/Menu.vue';

export default {
	components: {
		'a-menu': Menu
	},
	props: {
		type: {
			type: Array,
			default: () => []
		},
		position: {
			type: String,
			default: '0 0 0'
		}
	},
	data() {
		return {
			currentRotation: '-1.888 -150.023 -9.686',
			nextRotation: '-1.888 -150.023 -9.686',
			mapsPosition: ['-1.888 -150.023 -9.686',
				'17.138 -8.970 44.511',
				'59.660 -1.603 55.261',
				'73.936 20.461 -90.848']
		};
	},
	mounted() {
		const animation = document.querySelector('#changeAnim');
		setTimeout(() => {
			document.querySelector('#planetObj').addEventListener('loaded', () => {
				this.$store.commit('vr/loadPlanet');
			});
		}, 0);
		animation.addEventListener('animationcomplete', () => {
			this.currentRotation = this.nextRotation;
		});
	},
	methods: {
		changeMap() {
			const currentIndex = this.mapsPosition.indexOf(this.nextRotation);
			this.nextRotation = this.mapsPosition[(currentIndex + 1) % 4];
			this.$nextTick()
				.then(() => {
					document.querySelector('#changeAnim').emit('changeMap');
				});
		}
	}
};
</script>

