<template>
	<div>
		<div class="wrapper">
			<div class="aside aside-1">
				<div class="flex-header">
					<img class="img-company flex-header-item" :src="work.logo.url">
					<h1 :style="{ color: work.titleColor }" class="project-name flex-header-item">
						{{ work.projectName }}
					</h1>
				</div>
				<p>{{ work.description }}</p>
				<ul>
					<li v-for="tag in work.tags" :key="tag">
						{{ tag }}
					</li>
				</ul>
			</div>
			<img class="aside aside-2" :src="work.detailBg.url">
		</div>
	</div>
</template>

<style scoped>
.flex-header {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 3vh;
	margin-left: 0;
	margin-right: 5vw;
}

.flex-header img {
	width: auto;
	height: auto;
	max-height: 10vh;
	max-width: 25vw;
	filter: invert(100%);
}

.name-company {
	font-family: Lato;
	font-size: 4rem;
	font-weight: bold;
	margin-bottom: 0;
	line-height: 5vh;
}

.project-name {
	font-family: Lato;
	font-size: 3rem;
	font-weight: bold;
	margin-bottom: 0;
	line-height: 5vh;
}

.wrapper {
	display: flex;
	flex-flow: row wrap;
	text-align: center;
	font-family: Lato;
	font-size: 2rem;
	line-height: 2.5rem;
	max-height: 100vh;
	color: black;
	overflow: auto;
	justify-content: space-between;
}

.aside-1 {
	max-width: 30%;
	text-align: left;
	padding: 10px 30px 0 30px;
	margin-top: 13vh;
}

.aside-1 ul {
	font-weight: bold;
	list-style-type: none;
	padding: 0;
}
.aside-2 {
	object-fit: cover;
	max-width: 70%;
	max-height: auto;
	width: 100%;
	height: auto;
	box-shadow: 0 5px 20px;
}

@media all and (max-width: 800px) {
	.aside { max-width: 100%; }
	.aside-2 { max-height: 40vh; width: 100%; }
	.wrapper { max-height: 200vh; }
	.adjustable { order: 0; }
}

</style>

<script>
export default {
	props: {
		work: {
			type: Object,
			required: true
		}
	}
};
</script>
