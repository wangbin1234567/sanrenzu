<template>
  <div class="wrap-q">
    <header @click="Tclick()">
        <p>可向多个商家咨询最低价，商家及时回复</p>
        <img src="http://h5.chelun.com/2017/official/img/icon-help.png" alt="">
    </header>
    <div class="q-tip" v-if="flog" @click="Tclick()">
        <div>
            <div class="flex-row">
                <li>
                    <img src="http://h5.chelun.com/2017/official/img/q-l.png">
                    <span>安全高效</span>
                </li> 
                <li>
                    <img src="http://h5.chelun.com/2017/official/img/q-m.png"> 
                    <span>省心省力</span>
                </li> 
                <li>
                    <img src="http://h5.chelun.com/2017/official/img/q-r.png"> 
                    <span>贴心服务</span>
                </li>
            </div> 
            <div>
                <li>私人信息严格保密，最新报价立等可取</li> <li>足不出户，提交即可获得多家经销商的最低价格</li>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="q-info" @click="typeClick(SerialID)">
            <img :src="list.CoverPhoto" />
            <div class="flex-column">
            <p>{{list.AliasName}}</p>
            <p>2019款 35 TFSI 进取版 国V</p>
            </div>
        </div>
        <div class="self-info">
            <p class="tip">个人信息</p>
            <ul>
            <li>
                <span>姓名</span>
                <input type="text" placeholder="输入你的真实中文姓名" maxlength="4" v-model="username"/>
            </li>
            <li>
                <span>手机</span>
                <input type="tel" placeholder="输入你的真实手机号码" maxlength="11" v-model="phone"/>
            </li>
            <li>
                <span>城市</span>
                <span>北京</span>
            </li>
            </ul>
            <div class="quotation">
            <button data-hover="hover" @click="btnList()">询最低价</button>
            </div>
        </div>
        <!-- !!!!!!!! -->
        <Dealer :dealer="dealerList"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Dealer from '../../components/dealer'
export default {
    components:{
        Dealer
    },
    data() {
        return {
            list: [],
            dealerList:[],
            flog: false,
            phone:"",
            username:"",
            SerialID:""
        };
    },
    methods: {
        Tclick(){
            this.flog = !this.flog
        },
        typeClick(SerialID){
            console.log(SerialID);
            
            this.$router.push({
                path:"type",
                query:{
                    SerialID:SerialID
                }
            })
        },
        btnList(){
            if (!(/^1[34578]\d{9}$/.test(this.phone)) || !(/^[\u4e00-\u9fa5]{1,}$/.test(this.username))) {
                alert("请输入正确的手机号或名字")
            }else{
                alert("输入正确")
            }
        }
    },
    created() {
        axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=2593`).then(res => {
            this.list = res.data.data;
            this.SerialID = res.data.data.SerialID
            console.log(res);
        });
        axios.get(`http://baojia.chelun.com/v2-dealer-alllist.html?carId=131315&cityId=201&_1575199616353`).then(res => {
            this.dealerList = res.data.data.list
            // console.log(this.dealerList);
        })
    }
};
</script>

<style lang="scss" scoped>
    .wrap-q {
        width: 100%;
        height: 100%;
    }
    header {
        height: 32.8px;
        line-height: 32.8px;
        width: 100%;
        background: #79cd92;
        text-align: center;
        z-index: 99;
        position: static;
        top: 0;
        p{
            color: #fff;
            font-size: 15px;
            display: inline-block
        }
        img{
            width: 16.55px;
            height: 16.55px;
            vertical-align: -9%;
            margin-left: 5px;
        }
    }
    .q-tip {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.1);
        z-index: 101;
    }
    .q-tip>div {
        position: relative;
        width: 86%;
        margin-left: 7%;
        background: #fff;
        border-radius: 10px;
        margin-top: 38px;
    }
    .q-tip>div:before {
        position: absolute;
        content: "";
        display: inline-block;
        width: 2;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 5px solid #fff;
        right: 16px;
        top: -5px;
    }
    .flex-row{
        display: flex;
        height: 79px;
        padding: 15px 0;
        li{
            flex-direction: column;
            flex: 1;
            height: 79px;
            text-align: center;
            img{
                width: 33px;
                height: 33px;
                text-align: center;
            }
            span{
                display: block;
                text-align: center;
                font-size: 12px;
            }
        }
    }
    .q-tip>div div:nth-child(2) {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 5px 0;
        background: #f4f4f4;
        li {
            list-style: initial;
            margin-left: 5px;
            font-size: 12px;
            color: silver;
        }
    }
    .content {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .q-info {
        width: 100%;
        height: 100px;
        padding: 10px;
        display: flex;
        position: relative;
        img {
            width: 127px;
            height: 77px;
            border: 1px solid #eee;
            box-sizing: border-box;
            border-radius: 5px;
        }
        .flex-column {
            margin-left: 10px;
        }
        .flex-column p:first-child {
            font-size: 18px;
            line-height: 2;
        }
        .flex-column p:nth-child(2) {
            font-size: 16px;
            line-height: 2.2;
            color: #333;
        }
    }
    .q-info:before {
        content: "";
        display: inline-block;
        padding-top: 8px;
        padding-right: 8px;
        border-top: 2px solid #ccc;
        border-right: 2px solid #ccc;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        right: 13px;
        top: 40px;
    }
    .self-info {
        width: 100%;
        height: 243px;
        .tip{
            height: 28px;
            line-height: 28px;
            padding: 0 5px;
            font-size: 12px;
            color: #666;
            background: #eee;
        }
        ul li {
            font-size: 18px;
            height: 48px;
            line-height: 48px;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            color: #000;
            padding: 2px 10px;
            input {
                font-size: 18px;
                padding-right: 10px;
                width: 88%;
                text-align: right;
                box-sizing: border-box;
                color: #555;
                outline: none;
                -webkit-appearance: none;
                border: none;
            }
            span:nth-child(2) {
            display: inline-block;
            width: 88%;
            color: #555;
            text-align: right;
            box-sizing: border-box;
            }
            span:nth-child(2):after {
                content: "";
                width: 6px;
                height: 6px;
                display: inline-block;
                padding-top: 5px;
                padding-right: 5px;
                border-top: 1px solid silver;
                border-right: 1px solid silver;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }
        .quotation {
            background: #fff;
            text-align: center;
            padding-top: 15px;
            padding-bottom: 15px;
            button {
                font-size: 16px;
                color: #fff;
                width: 80%;
                outline: none;
                background: #3aacff;
                height: 39px;
                border-radius: 10px;
                border: 0;
            }
        }
    }
</style>