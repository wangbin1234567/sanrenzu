<template>
  <div class="list-box">
        <!-- 列表数据展示 -->
      <div v-if="currentList.length">
            <div class="list-item" v-for="(item,index) of currentList" :key="index">
                <div class="item-content">
                    <p>{{item.key}}</p>
                    <div class="item-text" v-for="(listItem,listIndex) in item.list" :key="listIndex">
                    <li>{{listItem.market_attribute.year}}款{{listItem.car_name}}</li>
                    <li>{{listItem.horse_power}}马力{{listItem.gear_num}}档{{item.trans_type}}</li>
                    <li>
                        <span>指导价{{listItem.market_attribute.dealer_price_max}}</span>
                        <span v-if="listItem.market_attribute.dealer_price_min">{{listItem.market_attribute.dealer_price_min}}起</span>
                        <span v-else>暂无</span>
                    </li>
                    <div class="item-btn">
                        <button @click="clickFloor(listItem.car_id)">询问底价</button>
                    </div>
                    </div>
                </div>
            </div>
      </div>
	
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      currentList: store => store.car.currentList
    })
  },
  methods: {

    //点击询问底价按钮跳转到经销商列表页面
    clickFloor(car_id){
       localStorage.setItem("2017.official.curId",car_id)
        this.$router.push("/quotation")
    }
  }
};
</script>
<style scoped lang="scss">
.list-box{
    width:100%;
    background:#f4f4f4;
    padding-bottom: 50px;
}
.list-box .list-item {
  width: 100%;
  .item-content {
    width: 100%;
    p {
      width: 100%;
      line-height: 25px;
      color: #999;
      font-size: 13px;
      padding: 3px 10px;
      background: #f4f4f4;
    }
  }
  .item-text {
    width: 100%;
    height: 127px;
    background: #fff;
    padding: 0 10px;
    border-bottom: .18rem solid #f4f4f4;
    li:nth-of-type(1) {
      font-size: 15px;
      height: 36px;

      color: #3d3d3d;
      padding: 13px 0 9px;
    }
    li:nth-of-type(2) {
      font-size: 13px;
      height: 16px;
      color: #bdbdbd;
    }
    li:nth-of-type(3) {
      height: 25px;
      display: flex;
      justify-content: flex-end;
      padding: 0 0 5px;
      span:nth-of-type(1) {
        color: #818181;
        font-size: 12px;
        line-height: 16px;
        margin-top: 3px;
      }
      span:nth-of-type(2) {
        font-size: 15px;
        color: #ff2336;
        margin:0 0 0 5px;
        line-height: 20px;
      }
    }
    .item-btn {
      width: 110%;
      height:43px;
      border-top: 1px solid #eee;
      margin: 0 0 0 -15px;
      padding: 1px 6px;
      button {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background: #fff;
        color: #00afff;
        font-size: 16px;
      }
    }
  }
  .item-text:last-child{
     border-bottom: 0;
     height: 118px;
  }
}
</style>