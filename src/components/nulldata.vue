<template>
<div class="null" v-show="nulld">
	暂无更多数据		
</div>	
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
	name: 'nulldata',
	props: {
		nulld: {
			type: Boolean,
			default: false
		}

	}
}
</script>

<style scoped lang="scss">
@import "@/static/vars.scss";
.null{
	color: $nulldatacolor;
	height: 30px;
	line-height:30px;
	font-size: $fontsize;
	margin-bottom: 50px;
}
</style>