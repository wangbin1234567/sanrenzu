<template>
<div class="header" @click.stop="back">
	header
</div>
</template>


<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
	name: 'header',
	data() {
		return {

		}
	},
	methods: {
		back(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped lang="scss">
@import "@/static/vars.scss";
.header{
	position: fixed;
	top: 0;
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