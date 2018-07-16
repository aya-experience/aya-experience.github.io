<template>
	<div class="forms">
		<my-form
			:id="`form-${index}`"
			class="form"
			:class="selected === index ? 'selected': ''"
			v-for="(item, index) in values"
			:key="item"
			:displayForm="index === selected">
			<div class="border" :class="selected === index ? 'type--selected': ''" @click="showForm(index)">
				<p class="type">{{ item }}</p>
			</div>
		</my-form>
	</div>
</template>

<style scoped>
.forms {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.type {
	font-size: 2rem;
	font-weight: 100;
	margin: 10px 0;
}
.hide {
	transition: 0.5s opacity linear;
	opacity: 0;
}
.selected {
	order: 1;
	position: relative;
	width: 100vw;
}
.type--selected {
	align-self: flex-start;
}
</style>

<script>
import Form from '~/components/contact/Form';
export default {
	components: {
		'my-form': Form
	},
	props: {
		values: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			selected: -1
		};
	},
	methods: {
		showForm(index) {
			for (let i = 0; i < this.values.length; i++) {
				if (i !== index) {
					const formId = `#form-${i}`;
					document.querySelector(formId).classList.add('hide');
				}
			}
			setTimeout(() => {
				this.selected = index;
			}, 1000);
		}
	}
};
</script>
