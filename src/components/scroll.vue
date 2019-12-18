<template lang="html">
<div class="scroll" @touchstart=touchStart($event)
	@touchmove=touchMove($event)
	@touchend=touchEnd($event)>
	<section class="inner">
		<!-- 默认插槽 -->
		<slot>
			
		</slot>
                <!-- //  -->
		<v-loadmore ref='loadmore' :loadmoreShow="loadmoreShow" :text="text"></v-loadmore>	
		<v-nulldata :nulld="dataList.nulld"></v-nulldata>
	</section>
</div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import nulldata from '@/components/nulldata.vue'
import loadmore from '@/components/loadmore.vue'
export default {
	props: {
		bottom: {
			type: Number,
			default: 50
		},
		enbaleLoadMore: {
			type: Boolean,
			default: true,
		},
		dataList: {
			default: false,
                        required: false
		},
		onLoadMore: {
			type: Function,
			default: undefined,
		}
	},
	components: {
		"v-nulldata": nulldata,
		"v-loadmore": loadmore
	},
	data() {
		return {
			text: '',
			isLoading: false,
			loadmoreEl:null,
			loadmoreShow: false,
			touches: {
				startX: 0,
				startY: 0,
				scrollTop: 0,
				touching: false,
			}
		}
	},
	mounted() {
		this.loadmoreEl = this.$refs.loadmore.$el;
	},
	methods: {
		touchStart(e){
			// console.log('touchStart',e)
			var touch = e.targetTouches[0];
			this.touches.startX = touch.pageX
			this.touches.startY = touch.pageY
			this.touches.scrollTop = this.$el.scrollTop || this.touches.scrollTop
			this.touches.touching = true
			// this.dataList.nulld = false
			this.enableLoadMore = true;
		},
		touchMove(e){
			if(!this.enableLoadMore || !this.touches.touching || this.dataList.nulld){
				// 如果没启动上拉加载更多，好、或者没有滑动，或者数据为空时
				return
			}
			let diff = e.targetTouches[0].pageY - this.touches.startY - this.touches.scrollTop
            if(diff > 0) {
                e.preventDefault()
            }
            this.text = '上拉加载更多'
            this.loadmoreShow = true;
		},
		touchEnd(e) {

              if (this.isLoading) {
                    return;
                }
                console.log("滑动距离太短")
                this.touches.touching = false

                //用于判断滑动是否在原地 ----begin
                let endX = e.changedTouches[0].pageX,
                    endY = e.changedTouches[0].pageY,
                    dy = this.touches.startY - endY,
                    dx = endX - this.touches.startX;

                //如果滑动距离太短
                if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                    // console.log("滑动距离太短")
                    this.loadmoreShow = false; //隐藏加载条
                    return;
                }

                if(!this.enableLoadMore || this.isLoading) {
                    this.loadmoreEl.style.display = 'none'; //隐藏加载条
                    return
                }
                console.log(1)
                let outerHeight = this.$el.clientHeight,
                    innerHeight = this.$el.querySelector('.inner').clientHeight,
                    scrollTop = this.$el.scrollTop,
                    bottom = innerHeight - outerHeight - scrollTop;
                // console.log("outerHeight",outerHeight)
                // console.log("innerHeight",innerHeight)
                // console.log("scrollTop",scrollTop)
                // console.log("bottom",bottom)
                // console.log('this.$el',this.$el)
                // console.log("this.bottom",this.bottom)
                if(bottom <= this.bottom) {
                    //内容太少
                    this.doLoadMore();
                } else {
                    this.loadmoreShow = false; //隐藏加载条
                }
            },

            doLoadMore() {
                this.isLoading = true
                this.text = '正在加载'
                this.onLoadMore(this.loadDone);
            },

            loadDone() {
                this.isLoading = false
                this.loadmoreShow = false; //隐藏加载条

            }
	}
}
</script>

<style scoped lang="scss">
.scroll{
	position: relative;
	z-index: 100;
	// top: 34px;
	top: 0;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	.inner{
		transition-duration: 300ms;
	}
}	
</style>