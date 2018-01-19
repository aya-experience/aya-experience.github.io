<template>
	<div align="center" class="work-container">
		<a v-for="work in mocks" class="work-preview" v-bind:style="{ 'background-image' : 'url(' + work.preview + ')' }">
			<div class="work-title">{{work.client}}</div>
		</a>
	</div>
</template>

<style scoped>
	div {
		color: white;
	}

	.work-container{
		overflow: hidden;
		position: absolute;
		display: flex;
		top:0;
		left:0;
		right:0;
		bottom:0;
	}

	a.work-preview .work-title {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 30%;
		width: 50%;
		margin: -15% 0 0 -25%;
		text-transform: uppercase;
		padding: 7px;
		z-index: 1000;
		color:#ffffff;
		font-weight: 300;
		font-size: 13px;
	}

	a.work-preview:hover .work-title {
		-webkit-transition: all 200ms ease-in;
		-webkit-transform: scale(1.5);
		transition: all 200ms ease-in;
		transform: scale(1.5);
	}

	a.work-preview {
		display: inline-block;
		border: 0;
		width: 20vw;
		height: 100vh;
		position: relative;
		-webkit-transition: all 200ms ease-in;
		-webkit-transform: scale(1);
		transition: all 200ms ease-in;
		transform: scale(1);
		background-size: cover;
	}
	a.work-preview:hover {
		flex-grow: 2;
		box-shadow: 0px 0px 150px #000000;
		z-index: 2;
		-webkit-transition: all 200ms ease-in;
		-webkit-transform: scale(1.5);
		transition: all 200ms ease-in;
		transform: scale(1.5);
	}
</style>

<script>
import work from '~/content/work.json'

export default {
	computed: {
		works () {
			return this.$store.state.work.works
		},
		mocks () {
			return [
				{ 'client': 'Gattefossé',
					'preview': 'https://artsandculture.withgoogle.com/gcs/national-parks-service/en-us/Asset-Tortugas-desktop.jpg'
				},
				{ 'client': 'M6 Play',
					'preview': 'https://artsandculture.withgoogle.com/gcs/national-parks-service/en-us/de0b954d-ca76-41d3-ac3a-900c6bc25139.jpg'
				},
				{ 'client': 'JC Decaux',
					'preview': 'https://artsandculture.withgoogle.com/gcs/national-parks-service/en-us/Asset-Kenai-desktop.jpg'
				},
				{ 'client': 'B4all',
					'preview': 'https://artsandculture.withgoogle.com/gcs/national-parks-service/en-us/Asset-Hawaii-desktop.jpg'
				},
				{ 'client': 'Enedis',
					'preview': 'https://artsandculture.withgoogle.com/gcs/national-parks-service/en-us/Asset-Bryce-desktop.jpg'
				}
			];
		}
	},
	fetch ({ store }) {
		store.commit('work/loaded', work)
	}
}
</script>
