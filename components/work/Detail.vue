<template>
	<div>
		<div class="flex-header">
			<h2 
				:style="{ color: titleColor }"
				class="name-company flex-header-item"
			>
				{{ work.clientName }}
			</h2>
			<img class="img-company flex-header-item" :src="work.logo.url">
		</div>
		<div class="wrapper">
			<div class="aside aside-1">
				<p>{{ work.description }}</p>
				<ul>
					<li v-for="tag in work.tags" :key="tag">
						{{ tag }}
					</li>
				</ul>
			</div>
			<img class="aside aside-2" @click="displayWork" :src="work.menuBg.url">
		</div>
	</div>
</template>

<style scoped>
.flex-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 3vh;
	margin-left: 5vw;
	margin-right: 5vw;
}

.flex-header-item {
	margin-top: 5vh;
}

.flex-header img {
	width: auto;
	height: auto;
	max-height: 10vh;
	max-width: 40vw;
}

.name-company {
	color: #EFEFEF;
	font-family: Lato;
	font-size: 4rem;
	font-weight: bold;
	margin-bottom: 0;
}

.wrapper {
	margin-left: 5vw;
	margin-right: 5vw;
	display: flex;  
	flex-flow: row wrap;
	text-align: center;
	background-color: rgba(19,11,41,0.8);
	font-family: Lato;
	font-size: 2rem;
	line-height: 2.5rem;
	max-height: 70vh;
}

.aside-1 {
	max-width: 40%;
	text-align: left;
	padding: 10px 30px 0 30px;
}

.aside-1 ul {
	font-weight: bold;
	list-style-type: none;
	padding: 0;
}
.aside-2 {
	object-fit: cover;
	opacity: 0.4;
	max-width: 60%;
	max-height: auto;
	cursor: pointer;
}

@media all and (max-width: 800px) {
	.aside { max-width: 100%; }
	.aside-2 { max-height: 40vh; width: 100%; }
	.wrapper { max-height: 200vh; }
}

</style>

<script>
export default {
	props: {
		work: {
			type: Object,
			required: true
		},
		titleColor: {
			type: String,
			required: true
		}
	},
	methods: {
		displayWork () {
			this.$emit('clickImage')
		}
	}
}
</script>
