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
import io from 'socket.io-client';

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
			currentMap: 0,
			currentRotation: '-1.888 -150.023 -9.686',
			nextRotation: '-1.888 -150.023 -9.686',
			mapsPosition: ['-1.888 -150.023 -9.686',
				'17.138 -8.970 44.511',
				'59.660 -1.603 55.261',
				'73.936 20.461 -90.848']
		};
	},
	computed: {
		planets() {
			const arr = [...this.$store.state.vr.ayaTeam];
			return [
				arr.slice(0, 5),
				arr.slice(5, 10),
				arr.slice(11, 16),
				arr.slice(16, 19)
			];
		}
	},
	mounted() {
		const socket = io('http://192.168.1.127:2018');
		socket.emit('connect-app');
		socket.on('do-stuff-on-browser', data => {
			console.log(data);
			for (let counter = 0; counter < 4; counter++) {
				const user = this.planets[this.currentMap].find(member => {
					console.log(member.name, data.name, member.name === data.name);
					return member.name === data.name;
				});
				if (user) {
					return;
				}
				this.changeMap();
			}
		});
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
			this.currentMap = (this.currentMap + 1) % 4;
		}
	}
};
</script>

