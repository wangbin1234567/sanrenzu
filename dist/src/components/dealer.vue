<template>
    <div class="dealer-info">
        <p class="tip">选择报价经销商</p>
        <ul>
          <li data-hover="hover" data-id="8295" 
          :class="{active: item.newsRemainingDays == 1}" 
          @click="activeClick(item)" 
          v-for="(item,index) in dealer" :key="index">
            <p>
              <span>{{item.dealerShortName}}</span>
              <span>万</span>
            </p>
            <p>
              <span>{{item.address}}</span>
              <span>售{{item.saleRange}}</span>
            </p>
          </li>
        </ul>
      </div>
</template>

<script>
    export default {
        props:["dealer"],
        data() {
            return {
                curIndex:0  
            }
        },
        methods: {
            activeClick(item){
                item.newsRemainingDays = !item.newsRemainingDays;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .dealer-info{
        width: 100%;
        .tip {
            line-height: 25px;
            padding: 0 10px;
            font-size: 12px;
            color: #666;
            background: #eee;
        }
        ul{
            background: #fff;
            padding: 0 10px;
            li{
                position: relative;
                padding: 15px 0 15px 25px;
                border-bottom: 1px solid #eee;
                box-sizing: border-box;
                height: 90px;
                p:first-child {
                    font-size: 16px;
                    span:last-child {
                        font-size: 14px;
                        float: right;
                        color: red;
                    }
                }
                p:nth-child(2) {
                    margin-top: 6px;
                    font-size: 12px;
                    color: #a2a2a2;
                    span:first-child {
                        display: inline-block;
                        max-width: 254px;
                    }
                    span:nth-child(2) {
                        float: right;
                    }
                }
            }
        }
    }
    .dealer-info ul li:before {
        content: "";
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        border: 2px solid #ccc;
        box-sizing: border-box;
        position: absolute;
        left: .05rem;
        top: 50%;
        -webkit-transform: translate3d(0,-50%,0);
        transform: translate3d(0,-50%,0);
    }
    .dealer-info ul li.active:before {
        background: #3aacff;
        border: none;
    }
    .dealer-info li.active:after {
        content: "";
        display: inline-block;
        padding-top: 10px;
        padding-right: 6px;
        border: 2px solid #fff;
        -webkit-transform: rotate(40deg) translate3d(0,-50%,0);
        transform: rotate(40deg) translate3d(0,-50%,0);
        position: absolute;
        left: .07rem;
        border-left: none;
        border-top: none;
        top: 47%;
    }
</style>