<template>
  <div class="verify-box">
    <div class="mark-success" v-if="message!='询价成功'">
      <p class="pf"></p>
      <p class="pt">{{message}}</p>
      <div class="btn">
        <button @click="close">{{hello}}</button>
      </div>
    </div>
    <div v-if="message=='询价成功'" class="wrap">
      <img src="http://h5.chelun.com/2017/official/img/q-icon.png"/>
      <p class="pfs">询价成功</p>
      <p class="pts">
        稍后有专业汽车顾问为你服务
        <br />请保持手机畅通
      </p>
      <div class="btns">
        <button @click="close">{{hello}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "message",
    "hello"
  ],

  methods: {
    close() {
      this.$emit("btnLists");
    }
  }
};
</script>
<style scoped lang="scss">
.verify-box {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  .mark-success {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -135px;
    margin-top: -41px;
    width: 270px;
    height: 104px;
    border-radius: 7px;
    background: #fff;
    .pf {
      width: 216px;
      height: 24px;
      margin: 0 27px 0 27px;
      padding: 18px 0 6px;
    }
    .pt {
      width: 232px;
      height: 36px;
      font-size: 13px;
      margin: 0 18px;
      padding: 0 0 20px;
      text-align: center;
    }
    .btn {
      height: 44px;
      text-align: center;
      padding: 14px 0;
      border-top: 0.5px solid #eee;
      button {
        color: #007aff;
        font-size: 16px;
        border: none;
        background: #fff;
        outline: none;
      }
    }
  }
  .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -157px;
    margin-top: -85px;
    width: 315px;
    height: 191px;
    border-radius: 7px;
    background: #fff;
    padding: 15px 15px 0;
    img{
       width: 40px;
       height: 40px;
       margin: 0 122px 15px; 
    }
    .pfs{
        height: 26px;
        color: #3cc144;
        font-size: 20px;
        margin: 5px;
        text-align: center;
    }
    .pts{
        height: 32px;
        color: #c0c0c0;
        font-size: 12px;
        margin: 7.5px;
        text-align: center;
        line-height: 15px;
    }
     .btns {
      line-height: 40px;
      text-align: center;
      border-top: 0.5px solid #eee;
      margin-top: 4px;
      button {
        color: #3aacff;
        font-size: 16px;
        border: none;
        background: #fff;
        outline: none;
      }
    }
  }
}
</style>