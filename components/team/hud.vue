<template>
	<a-entity scale="2 2 2" look-at="#camera" position="1.351 0 0.438">
		<a-plane
			position="0.858 0.713 0.062"
			color="#000"
			opacity="0.5"
			height="1.530"
			width="1.610"/>
		<a-image
			id="hudLine"
			position="-0.381 0.6 0.065"
			scale="0.5 1 1"
			src="#hud"/>
		<a-image position="0.5 1 0.063" scale="0.6 0.6 0.6" :src="`/ayapics/${member.img}`"/>
		<a-text
			position="0.193 0.425 0.063"
			color="white"
			font="kelsonsans"
			scale="0.8 0.8 0.8"
			:value="member.name"/>
		<a-text
			color="white"
			font="kelsonsans"
			position="0.193 0.116 0.063"
			scale="0.8 0.8 0.8"
			:value="member.role"/>
	</a-entity>
</template>

<script>
export default {
	props: {
		member: {
			type: Object,
			default: () => {}
		}
	}
};
</script>

