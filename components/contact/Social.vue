<template>
	<div class="social-medias">
		<a class="social-media" href="mailto:contact@aya-experience.com">
			<div class="icon-container">
				<img src="~/assets/icons/mail.svg">
			</div>
			<h3>Mail</h3>
			<p>contact@aya-experience.com</p>
		</a>
		<a class="social-media" href="tel:+33145261915">
			<div class="icon-container">
				<img src="~/assets/icons/phone.svg">
			</div>
			<h3>Téléphone</h3>
			<p>+33 (0)1 45 26 19 15</p>
		</a>
		<a class="social-media" href="https://www.google.fr/maps/place/Zenika/@48.8790862,2.326255,17z/data=!4m12!1m6!3m5!1s0x47e66e38ba6c9f81:0x7096fc13dca9c1fa!2sZenika!8m2!3d48.8790862!4d2.3284437!3m4!1s0x47e66e38ba6c9f81:0x7096fc13dca9c1fa!8m2!3d48.8790862!4d2.3284437" target="_blank" rel="noreferrer">
			<div class="icon-container">
				<img src="~/assets/icons/map.svg">
			</div>
			<h3>Adresse</h3>
			<p>10 Rue de Milan<br>75009 Paris</p>
		</a>
		<a class="social-media" href="https://www.linkedin.com/company/aya-creative-experience-/" target="_blank" rel="noreferrer">
			<div class="icon-container">
				<img src="~/assets/icons/linkedin.svg">
			</div>
			<h3>LinkedIn</h3>
			<p>AYA &lt;​creative experience&gt;</p>
		</a>
		<a class="social-media" href="https://twitter.com/AyaExperience" target="_blank" rel="noreferrer">
			<div class="icon-container">
				<img src="~/assets/icons/twitter.svg">
			</div>
			<h3>Twitter</h3>
			<p>@AyaExperience</p>
		</a>
	</div>
</template>

<style scoped>
div.social-medias {
	margin: 100px 0;
	width: 1000px;
	display: flex;
	flex-direction: row;
}

a.social-media {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	text-decoration: none;
	transition: color 0.5s ease;
}

a.social-media:hover {
	color: #ebb815;
}

a.social-media h3 {
	font-weight: normal;
}

div.icon-container {
	height: 150px;
	width: 150px;
	border-radius: 50%;
	background-color: #ffffff50;
	padding: 40px;
	transition: background-color 0.5s ease;
}

a.social-media:hover div.icon-container {
	background-color: #ebb815;
}

div.icon-container img {
	max-width: 100%;
	max-height: 100%;
}

a.social-media p {
	margin: 0;
}
</style>
