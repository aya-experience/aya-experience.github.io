<template>
	<a-entity position="0 0 0.05" :rotation="rotation">
		<a-image
			id="hudLine"
			scale="0.1 0.3 0.1"
			position="0.18 0.4 0"
			src="#hud"/>
		<a-image
			position="0.3 0.5 0"
			scale="0.1 0.1 0.1"
			:src="member.icon"/>
		<a-text position="0.25 0.38 0" scale="0.12 0.12 0.12" :value="member.name"/>
		<a-text position="0.25 0.32 0" scale="0.12 0.12 0.12" :value="member.role"/>
		<a-text position="0.25 0.26 0" scale="0.12 0.12 0.12" :value="member.desc"/>
	</a-entity>
</template>

<script>
export default {
	props: {
		position: {
			type: String,
			default: '1 0 0'
		},
		member: {
			type: Object,
			default: () => {}
		}
	},
	computed: {
		rotation() {
			const camera = document.querySelector('#camera').getAttribute('rotation');
			return camera.x + ' ' + (camera.y + 45) + ' ' + camera.z;
		}
	}
};
</script>

