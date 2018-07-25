<template>
	<a-entity rotation="90 90 0" position="-0.1 1.5 0.4" >
		<a-entity id="camera" camera="fov: 60" look-controls>
			<a-entity
				cursor="fuse: true; fuseTimeout: 500"
				position="0 0 -0.4"
				scale="0.2 0.2 0.2"
				geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
				material="color: indigo; shader: flat"/>
		</a-entity>
		<a-animation
			attribute="position"
			dur="8000"
			fill="forwards"
			from="-0.1 1.5 0.4"
			:to="positionEnd"
			repeat="0"/>
		<a-animation
			attribute="rotation"
			dur="8000"
			fill="forwards"
			from="90 90 0"
			to="-33.899 80.463 0.408"
			repeat="0"/>
	</a-entity>
</template>

<script>
export default {
	data() {
		return {
			positionEnd: '-0.760 1.781 0.240'
		};
	}
};
</script>
