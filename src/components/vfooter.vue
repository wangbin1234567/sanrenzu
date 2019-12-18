<template>
<div class="footer">
	footer
</div>
</template>


<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
	name: 'footer',
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>

<style scoped lang="scss">
@import "@/static/vars.scss";
.footer{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50px;
	background-color: $backgroundcolor;
	font-size: $fontsize;
	color: $color;
	line-height: 50px;
	text-align: center;
	z-index: 1001;
}
</style>