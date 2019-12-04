<template>
  <div class="list-box">
    <div class="list-item" v-for="(item,index) of currentList" :key="index">
      <div class="item-content">
        <p>{{item.key}}</p>
        <div class="item-text" v-for="(listItem,listIndex) in item.list" :key="listIndex">
          <li>{{listItem.market_attribute.year}}款{{listItem.car_name}}</li>
          <li>{{listItem.horse_power}}马力{{listItem.gear_num}}档{{item.trans_type}}</li>
          <li>
            <span>指导价{{listItem.market_attribute.dealer_price_max}}</span>
            <span>{{listItem.market_attribute.dealer_price_min}}起</span>
          </li>
          <div class="item-btn">
            <button>询问底价</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      currentList: store => store.car.currentList
    })
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.list-box {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.list-box .list-item {
  width: 100%;
  .item-content {
    width: 100%;
    p {
      width: 100%;
      height: 25px;
      color: #999;
      font-size: 12px;
      padding-left: 10px;
      display: flex;
      align-items: center;
    }
  }
  .item-text {
    width: 100%;
    height: 138px;
    background: #fff;
    padding: 14px;
    li {
      width: 100%;
      display: flex;
      align-items: center;
    }
    li:nth-of-type(1) {
      font-size: 17px;
      height: 36.45px;
      color: #3d3d3d;
    }
    li:nth-of-type(2) {
      font-size: 13px;
      height: 17.4px;
      color: #c4c4c4;
    }
    li:nth-of-type(3) {
      height: 24.5px;
      display: flex;
      justify-content: flex-end;

      span:nth-of-type(1) {
        color: #c4c4c4;
        font-size: 16px;
      }
      span:nth-of-type(2) {
        font-size: 19.5px;
        color: red;
        margin: 0 0 0 4.9px;
      }
    }
    .item-btn {
      width: 100%;
      height: 40.93px;
      border-top: 1px solid #c5c5c5;
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
}
</style>