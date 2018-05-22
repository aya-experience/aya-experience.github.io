<template>
	<a-entity rotation="90 90 0" position="0 1.5 1" >
		<a-entity id="camera" camera look-controls>
			<a-entity
				cursor="fuse: true; fuseTimeout: 500"
				position="0 0 -0.4"
				scale="0.3 0.3 0.3"
				geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
				material="color: white; shader: flat"/>
		</a-entity>
		<a-animation
			attribute="position"
			dur="8000"
			fill="forwards"
			from="0 1.5 1"
			to="0 1.5 0.5"
			repeat="0"/>
		<a-animation
			attribute="rotation"
			dur="8000"
			fill="forwards"
			from="90 90 0"
			to="0 75 0"
			repeat="0"/>
	</a-entity>
</template>

