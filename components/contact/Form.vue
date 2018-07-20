<template>
	<div>
		<slot/>
		<div v-if="displayForm" class="form" :class="displayForm ? 'visible' : ''">
			<div @keyup.enter="submitName" class="section">
				<label for="name">Cher client, comment vous appelez-vous ?</label>
				<input v-model="name" id="name" type="text">
			</div>
			<div @keyup.enter="submitMail" v-if="nameValid" class="section">
				<label for="mail">Bonjour {{ name }}, quel est votre email ?</label>
				<input id="mail" type="text">
			</div>
			<div @keyup.enter="submitMsg" v-if="mailValid" class="section">
				<label for="message">un message pour nous ?</label>
				<input id="message" type="text">
			</div>
			<div v-if="msgValid" class="border send section">
				<p class="type">Envoyer</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.form {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 10vh;
	right: 8vw;
}
input[type=text] {
	width: 50vw;
	padding: 12px 20px;
	margin: 8px 0;
	border: solid white 2px;
	background-color: black;
	color: white;
	box-sizing: border-box;
}
label {
	font-size: 2rem;
	font-weight: 100;
	align-self: flex-start;
}
.border {
	border: solid white 1px;
	padding: 0 40px;
}
.border:hover {
	cursor: pointer;
}
.type {
	font-size: 2rem;
	font-weight: 100;
	margin: 10px 0;
}
.section {
	display: flex;
	flex-direction: column;
}
.send {
	align-self: flex-end;
}
.visible {
	transition: fade-in 4s;
}
@keyframes fade-in {
	from { opacity: 0}
	to {opacity: 1}
}
</style>

<script>
export default {
	props: {
		displayForm: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			name: '',
			nameValid: false,
			mailValid: false,
			msgValid: false
		};
	},
	methods: {
		submitName() {
			this.nameValid = true;
		},
		submitMail() {
			this.mailValid = true;
		},
		submitMsg() {
			this.msgValid = true;
		}
	}
};
</script>
