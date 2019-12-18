<template>
<div class="more" v-show="loadmoreShow">
	{{text}}		
</div>	
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
	name: 'loadmore',
	props: {
		text: {
			type: String,
			default: '',
		},
		loadmoreShow: {
			type: Boolean,
			default: false,
		}
	}
}
</script>
<style scoped lang="scss">
@import "@/static/vars.scss";
.more{
	color: $loadmorecolor;
	height: 30px;
	line-height:30px;
	font-size: $fontsize;
	margin-bottom: 50px;
}	
</style>