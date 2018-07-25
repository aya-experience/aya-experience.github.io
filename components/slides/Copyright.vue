<template>
	<div class="author">
		<p>{{ name }}</p>
		<p>{{ surname }}</p>
	</div>
</template>

<style scoped>
.author {
    position: absolute;
    display: flex;
    flex-direction: column;
    opacity: 0.5;
    margin-left: 15px;
    height: 50px;
    width: 100px;
    top: 2vh;
}

p {
    margin: 0;
}
</style>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		surname: {
			type: String,
			required: true
		}
	}
};
</script>
