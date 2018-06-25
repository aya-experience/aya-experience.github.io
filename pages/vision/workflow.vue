<template>
	<aya-bg image="/photos/stars.png">
		<div class="container">
			<h1 class="title">Workflow</h1>
			<div class="workflow__container">
				<img class="workflow__container--img" alt="workflow" src="/diagrams/workflow.svg">
				<div class="text">
					<p class="text--item">User Experience</p>
					<p class="text--item">User Interface</p>
					<p class="text--item">Development</p>
					<p class="text--item">Optimization</p>
				</div>
			</div>
		</div>
	</aya-bg>
</template>

<style scoped>
.workflow__container {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
}

.title {
	font-size: 5rem;
	font-weight: 100;
	width: 100%;
	position: relative;
	top: 5vh;
	text-align: center;
}

.workflow__container--img {
	width: 70vw;
}

.text {
	display: flex;
	width: 70vw;
}

.text--item {
	font-size: 2rem;
	font-style: italic;
	font-weight: 200;
	width: 25%;
    text-align: center;
}

@media all and (max-width: 800px){
	.text--item {
		font-size: 1rem;
	}
}
</style>

<script>
import Background from '~/components/slides/Background';

export default {
	components: {
		'aya-bg': Background
	}
};
</script>
