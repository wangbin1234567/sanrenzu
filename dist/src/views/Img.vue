<template>
<div class="index">
	<!-- <v-header></v-header> -->
	<div class="box">
		<v-scroll :onLoadMore="onLoadMore" :dataList="dataList">
			<ul>
                <li v-for="(item,index) in curData" :key="index">
            <img alt="" @click="adds(curData.ID,index)" :style="{backgroundImage:'url('+item.Url+')'}" />
        </li>
				<!-- <li v-for="(item) in listdata" :key="item.name">{{item.name}}</li>
				<li v-for="(item) in downdata" :key="item.name">{{item.name}}</li> -->
			</ul>
		</v-scroll>
	</div>
	<!-- <v-footer></v-footer> -->
</div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import scroll from "@/components/scroll.vue"
import vheader from '@/components/vheader.vue'
import vfooter from '@/components/vfooter.vue'
import {mapState, mapActions} from "vuex"
export default {
    computed:{
        ...mapState({
            curData:state=>state.carlist.curData
        })
    },
	name: 'index',
	components: {
		"v-scroll": scroll,
		'v-header': vheader,
		'v-footer': vfooter,
		
	},
	data() {
		return {
			counter: 1, //当前页
            num: 15, // 一页显示多少条
            pageStart: 0, // 开始页数
            pageEnd: 0, // 结束页数
            listdata: [], // 下拉更新数据存放数组
            downdata: [], // 上拉更多的数据存放数组
			dataList: {
				nulld: false,//暂无更多数据
            },
            Page: 2,
            PageSize: 30
		}
	},
	mounted: function() {
        this.getList();
    },
    methods: {
        ...mapActions({
            getMasterDataListAdd:'carlist/getMasterDataListAdd'
        }),
        getList() {
            var response = []
            for(let i = 0; i < 100; i++) {
                response.push({
                    name: i
                })
            }
            this.listdata = response.slice(0, this.num);
        },

        onLoadMore(done) {
            // this.counter++;
            // let end = this.pageEnd = this.num * this.counter;
            // let i = this.pageStart = this.pageEnd - this.num;
       
            setTimeout(() => {
    //             for(i; i < end; i++) {
    //                 if(i >= 50) {

    //                     //走完数据调用方法
    //                     this.dataList.nulld = true;

    //                     break;
    //                 } else {
    //                     this.downdata.push({
    //                         name: i + "==="
    //                     })
    //                     // more.style.display = 'none'; //隐藏加载条
    //    }
    //             }  
    let Page = this.Page++
    console.log(Page)
    this.getMasterDataListAdd(Page)
                done();
            }, 1000);
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/static/vars.scss";
.index{
	.box{
        ul {
            width: 100%;
    display: flex;
    flex-wrap: wrap;
        li{
			// height: 40px;
			// line-height:40px;
            // border: 1px solid red;
            width: 123px;
        height: 123px;
         margin: 0 2.3px 2.3px 0;
        img{
            width: 100%;
            height: 100%;
            background-size: cover;  
        }
        }
         li:nth-child(3n+3) {
    margin-right: 0;
}
        }
	}
}	
</style>