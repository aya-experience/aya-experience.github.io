<template>
	<div class="others">
		<a class="other" href="https://www.zenika.com" target="_blank" rel="noreferrer">
			<div class="icon-container">
				<img src="/logos/zenika.png">
			</div>
			<h3>Zenika<br>Le site du groupe</h3>
			<p>https://www.zenika.com</p>
		</a>
		<a class="other" href="https://training.zenika.com" target="_blank" rel="noreferrer">
			<div class="icon-container">
				<img src="/logos/training.png">
			</div>
			<h3>Training by Zenika<br>Le catalogue formation</h3>
			<p>https://training.zenika.com</p>
		</a>
		<a class="other" href="https://jobs.zenika.com" target="_blank" rel="noreferrer">
			<div class="icon-container">
				<img src="/logos/zenika.png">
			</div>
			<h3>Zenika recrute<br>Envie de nous rejoindre ?</h3>
			<p>https://jobs.zenika.com</p>
		</a>
		<a class="other" href="https://medium.zenika.com" target="_blank" rel="noreferrer">
			<div class="icon-container">
				<img src="/logos/medium.svg">
			</div>
			<h3>Medium Zenika<br>Retrouvez tous nos articles</h3>
			<p>https://medium.zenika.com</p>
		</a>
	</div>
</template>

<style scoped>
div.others {
	margin: 100px 0;
	width: 1000px;
	display: flex;
	flex-direction: row;
}

a.other {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	text-decoration: none;
	transition: color 0.5s ease;
}

a.other:hover {
	color: #ebb815;
}

a.other h3 {
	font-weight: normal;
}

div.icon-container {
	height: 150px;
	width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
}

div.icon-container img {
	max-width: 100%;
	max-height: 100%;
}

a.other p {
	margin: 0;
}

@media (max-width: 600px) {
	div.others {
		width: 100%;
		margin: 0;
		flex-direction: column;
	}

	a.other {
		margin: 10px;
	}
}
</style>
