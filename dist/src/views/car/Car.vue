<template>

    <div class="car" v-if="Object.keys(carList).length">
      <!-- 详情页基本数据的展示 -->
      <div class="content">
        <div class="img" @click="handleImg">
          <img :src="carList.Picture" alt />
          <span>{{carList.pic_group_count}}张图片</span>
        </div>
        <div class="info">
            <p>{{carList.market_attribute.dealer_price}}</p> 
            <p>指导价 {{carList.market_attribute.official_refer_price}}</p> 
          <div class="action">
            <button @click="chelun">{{carList.BottomEntranceTitle}}</button>
          </div>
        </div>
      </div>

      <!-- 年份展示 -->
      <div class="c-type" v-if="year">
        <span
          v-for="(item,index) in year"
          :key="index"
          @click="tab(item,index)"
          :class="{active:curIndex==index}"
        >{{item}}</span>
      </div>
      <div class="c-type" v-else>
        <span></span>
      </div>

        <!-- 列表数据展示 -->
      <carList></carList>

      <!-- 底部按钮展示 -->
      <div class="inquiry-btn" @click="chelun">
        <p>{{carList.BottomEntranceTitle}}</p>
        <p>本地销售商为你报价</p>
      </div>
    </div>
</template>
<script>
import carList from "../../components/list.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {
    carList
  },
  data() {
    return {
      SerialID: this.$route.query.id,
      curIndex: 0
    };
  },
  computed: {
    ...mapState({
      carList: store => store.car.carList,
      year: store => store.car.year,
      currentList: store => store.car.currentList
    })
  },
  methods: 
  {
    ...mapActions({
      getInfoAndListById: "car/getInfoAndListById",
         getCityAddress: 'city/getCityAddress'
    }),
     ...mapMutations({
      setCurrent: "car/setCurrent",
      seriesfalg:'series/seriesfalg',
      setCarId: "car/setCarId"
    }),
    chelun() {
      this.$router.push({
        name: "quotation",
        params: {
          id: this.SerialID
        }
      });
      this.setCarId(this.currentList[0].list[0].car_id)
    },
    tab(item,index) {
      this.curIndex=index
      this.setCurrent(item)
      this.getInfoAndListById(this.SerialID);
    },
    //点击图片，跳转到img页面
    handleImg(){
      this.$router.push("/img")
    }
  },
mounted() {
  this.getInfoAndListById(this.SerialID)
   this.seriesfalg()
    this.getCityAddress()
}
};
</script>
<style scoped lang="scss">
.car {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    overflow-x: hidden;
    position: relative;
}
.inquiry-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #3aacff;
    display: flex;
    flex-direction: column;
    align-items: center;
    p:nth-of-type(1){
        width:64px;
        height:20px;
        color:#fff;
        font-size:16px;
        margin:6px 0 0;
    } 
    p:nth-of-type(2){
        width:108px;
        height:16px;
        color:#fff;
        font-size:12px;
    }
}
.content {
    width: 100%;
    height: 260px;
    background: #fff;
    .img {
        width: 100%;
        height: 176px;
        position: relative;
        background: #f4f4f4;
        overflow: hidden;
        img {
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
        }
        span {
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            font-size: 12px;
            padding: 1px 5px;
            border-radius: 8px;
            position: absolute;
            right: 17px;
            bottom: 16px;
            line-height: 18px;
        }
    }
    .info {
        width: 100%;
        position: relative;
        padding: 18px 10px 15px;
        height: 73px;
        p:nth-of-type(1){
            color: #ff0000;
            font-size: 18px;
            line-height: 24px;
        }
        p:nth-of-type(2){
            color: #c0c0c0;
            font-size: 13px;
        }
        .action{
            padding: 10px 0 0;
            justify-content: space-between;
            width: 50%;
            position: absolute;
            right: .1rem;
            top: .22rem;
            button {
                width: 100%;
                height: 35px;
                outline: none;
                border: none;
                font-size: 16px;
                border-radius: 5px;
                background: #00afff;
                color: #fff;
            }
        }
    }
}

.c-type {
    width: 100%;
    line-height: 46px;
    padding: 0 15px;
    background: #fff;
    border-top: .15rem solid #f4f4f4;
    span {
        font-size: 16px;
        padding: 0 23px 0 0;
        color:#000;
    }
    span.active {
        color: #3AACFF;
    }
}
</style>