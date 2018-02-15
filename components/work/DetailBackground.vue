<template>
	<transition name="bounce">
		<div class="bg-company" :style="{ backgroundColor: bgColor }">
			<div class="bg-company-header">
				<h1>{{ projectName }}</h1>
				<img class="cancel" src="~/assets/icons/cancel.svg" @click="hideWork">
			</div>
			<img class="menu-bg" :src="menuBg">
		</div>
	</transition>
</template>

<style scoped>

.bg-company {
	position: absolute;
	margin: 0 15vw 0 15vw;
	transition: all .6s cubic-bezier(.55,0,.1,1);
}

.bg-company h1 {
	font-family: Lato;
	font-weight: 900; 
	font-size: 2rem;
	margin-left: 2vw;
}

.cancel {
	margin-right: 0;
	margin-top: 2vh;
	margin-right: 2vh;
	margin-bottom: 2vh;
	cursor: pointer;
	width: auto;
	height: auto;
	max-height: 3vh;
	max-width: 10vw;
}

.menu-bg {
	width: 100%;
	border: solid 5px #727272;
}

.bg-company div {
	background-color: #727272;
}

.bg-company-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10vh;
}

@media all and (max-width: 1024px) {
	.bg-company { margin-left: 8vw; margin-right: 8vw;}

}

/* animation */
.bounce-enter-active {
	animation: bounce-in .5s;
}

.bounce-leave-active {
	animation: bounce-in .8s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<script>
export default {
	props: {
		menuBg: {
			type: String,
			required: true
		},
		projectName: {
			type: String,
			required: true
		},
		bgColor: {
			type: String,
			required: true
		}
	},
	methods: {
		hideWork () {
			this.$emit('hideWork')
		}
	}
}
</script>
