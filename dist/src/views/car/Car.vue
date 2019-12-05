<template>
  <transition name="slide-fade">
    <div class="car" v-if="Object.keys(carList).length">
      <div class="content">
        <div class="img">
          <img :src="carList.CoverPhoto" alt />
          <span>{{carList.pic_group_count}}张图片</span>
        </div>
        <div class="info">
          <div class="text">
            <p>{{carList.market_attribute.dealer_price}}</p>
            <p>指导价{{carList.market_attribute.official_refer_price}}</p>
          </div>
          <div class="action">
            <button @click="chelun">{{carList.BottomEntranceTitle}}</button>
          </div>
        </div>
      </div>
      <div class="c-type">
        <span
          v-for="(item,index) in year"
          :key="index"
          @click="tab(item)"
          :class="{active:current==item}"
        >{{item}}</span>
      </div>
      <List></List>
      <div class="inquiry-btn" @click="chelun">
        <li>{{carList.BottomEntranceTitle}}</li>
        <li>本地销售商为你报价</li>
      </div>
    </div>
  </transition>
</template>
<script>
import List from "../../components/list.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {
    List
  },
  data() {
    return {
      SerialID: this.$route.query.id
    };
  },
  computed: {
    ...mapState({
      carList: store => store.car.carList,
      year: store => store.car.year,
      current:store=>store.car.current
    })
  },
  methods: {
    ...mapActions({
      getInfoAndListById: "car/getInfoAndListById"
    }),
    ...mapMutations({
      setCurrent: "car/setCurrent"
    }),
    chelun() {
      this.$router.push({
        name: "quotation",
        params: {
          id: this.SerialID
        }
      });
    },
    tab(item) {
      this.setCurrent(item);
      this.getInfoAndListById(this.SerialID);
    }
  },
  mounted() {
    this.getInfoAndListById(this.SerialID);
  }
};
</script>
<style scoped lang="scss">
.car {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  position: relative;
}
.inquiry-btn {
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 55px;
  background: #09f;
  display: flex;
  flex-direction: column;
  align-items: center;
  li:nth-of-type(1) {
    width: 63.94px;
    height: 21.01px;
    color: #fff;
    font-size: 15px;
    margin: 6.03px 0 0;
  }
  li:nth-of-type(2) {
    width: 109.2px;
    height: 15.92px;
    color: #fff;
    font-size: 11.98px;
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
      transform: translateY(-52%);
      position: absolute;
    }
    span {
      height: 17.75px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      font-size: 12px;
      padding: 0.9051px 5px;
      border-radius: 8px;
      position: absolute;
      right: 17px;
      bottom: 16px;
    }
  }
  .info {
    width: 100%;
    position: relative;
    .text {
      margin-top: 18px;
      padding-left: 14px;
      p:nth-of-type(1) {
        font-size: 18px;
        height: 23.8px;
        color: red;
      }
      p:nth-of-type(2) {
        font-size: 14px;
        height: 17.37px;
        color: #c5c5c5;
      }
    }
    .action {
      width: 187.5px;
      height: 35px;
      margin-right: 5px;
      position: absolute;
      right: 0;
      bottom: 3px;
      button {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        font-size: 16px;
        border-radius: 7px;
        background: #00afff;
        color: #fff;
      }
    }
  }
}
.c-type {
  width: 100%;
  height: 45.95px;
  padding: 0 15px;
  background: #fff;
  display: flex;
  align-items: center;
  margin-top: 10px;
  span {
    width: 57px;
    height: 21px;
    font-size: 16px;
    padding: 0 23px 0 0;
    color: #000;
  }
  span.active {
    color: #3aacff;
  }
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>