<template>
    <div class="home">
        <div class="home_content">
        <!-- 渲染首页左侧链表 -->
            <OfficialListLeft v-for="(item,key) in dataList" :key="key" :item="item"/>
        </div>
        <!-- 渲染通讯录的右侧固定字符 -->
        <officialListFixed :dataList="dataList"/>
        <!-- 渲染首页右侧链表，同时添加动画 -->
        <transition name="drawer">
            <officialListRight v-if="colorlist"/>
        </transition>
    </div>
</template>
<script>
  import {mapActions, mapState, mapMutations} from "vuex"
  import OfficialListLeft from "@/components/official_list_left/index.vue"
  import officialListFixed from "@/components/official_list_fixed/index.vue"
  import officialListRight from "@/components/official_list_right/index.vue"
export default {
    components: {
        OfficialListLeft,
        officialListFixed,
        officialListRight
    },
    
    computed:{
        ...mapState({
            dataList:state=>state.home.dataList,
            colorlist:state=>state.home.colorlist,
        })
    },
    methods:{
        ...mapActions({
            getMasterBrandList:'home/getMasterBrandList',
        }),
        ...mapMutations({
            amendstatefalse: 'home/amendstatefalse'
        }),
    },
    mounted(){
        this.getMasterBrandList()
    }
}
</script>
<style lang="scss" scoped>
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        font-size: 14px;
        flex-direction: column;
    }
    // 设置动画效果
    .drawer-enter,
    .drawer-leave-to {
    /* transform: scale(0); */
        transform: translateX(75%);
    }
    .drawer-enter-active {
        transition: all 1s ease;
    }
    .drawer-leave-active {
        transition: all 0.2s ease;
    }
    .home_content{
        flex: 1;
        overflow-y: scroll;
    }
</style>
