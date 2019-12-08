<template>
  <div class="wrap-q">
    <header @click="Tclick()">
        <p>可向多个商家咨询最低价，商家及时回复</p>
        <img src="http://h5.chelun.com/2017/official/img/icon-help.png" alt="">
    </header>
<<<<<<< HEAD
    <!-- <div class="q-tip"> -->
    <div class="q-tip" v-if="flog" @click="Tclick()">
=======
    <div class="q-tip" v-if="flog" @click="Tclick">
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
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
<<<<<<< HEAD
            <p>2019款 35 TFSI 进取版 国V</p>
=======
            <p>{{sortArr.market_attribute.year}}款 {{sortArr.car_name}}</p>
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
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
<<<<<<< HEAD
              
                <span>{{getCityData}}</span>
                
=======
                <span @click="handleAddress">{{this.$route.params.CityName}}</span>
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
            </li>
            </ul>
            <div class="quotation">
            <button data-hover="hover" @click="btnList()">询最低价</button>
            </div>
        </div>
        <!-- !!!!!!!! -->
        <Dealer :dealer="dealerList"/>
<<<<<<< HEAD
        
    </div>
     <transition name="cityjudge">
         
        <CityListLeft v-if="flag"/>
=======
         <!-- 验证弹窗 -->  
        <Verify @btnLists="btnLists" 
        :message="message" 
        :hello="hello" 
        v-show="isUser" 
        @btnList="btnList"></Verify>  
    </div>
    <transition name="scroll-top">
        <div class="wrap" v-show="showAddress">
            <Address />
        </div>
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
    </transition>
  </div>
</template>


<script>
<<<<<<< HEAD
import {mapMutations, mapActions,mapState} from "vuex"
import axios from "axios";
import Dealer from '../../components/dealer'
import CityListLeft from "@/components/city_list_left/index"
export default {
    components:{
        Dealer,
        CityListLeft
=======
import Dealer from '../../components/dealer'
import Verify from "../../components/verify.vue"
import Address from "../site/index"
import {mapActions,mapState} from "vuex"
export default {
    components:{
        Dealer,
        Verify,
        Address
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
    },
    data() {
        return {
<<<<<<< HEAD
            list: [],
            dealerList:[],
            flog: false,
            phone:"",
            username:"",
            SerialID:"",
            id: this.$route.params.id,
            cityId: "",
            timestamp: ""
=======
            list: JSON.parse(localStorage.getItem("2017.official.carInfo")) || {},
            flog: false,
            phone:"",
            username:"",
            carId: localStorage.getItem("2017.official.curId") || "",
            sortArr: JSON.parse(localStorage.getItem("2017.official.sortArr"))[0].list[0] || [],
            isUser:false,//默认弹窗隐藏
            message:"",//弹窗中部信息
            hello:"",//弹窗按钮,
            showAddress: false
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
        };
    },
    computed:{
        ...mapState({
             flag:state=>state.site.flag,
             getCityData:state=>state.site.getCityData,
             cityJudgeFals:state=>state.site.cityJudgeFals
        })
    },
    methods: {
<<<<<<< HEAD
         ...mapMutations({
            ctxfalg:'site/ctxfalg'
        }),
        ...mapActions({
            getMasterStair:'stair/getMasterStair'
        }),
        getcity(){
            this.getMasterStair()
            this.ctxfalg()
=======
         ...mapActions({
           getCityAddress: 'city/getCityAddress',
           getDealer: 'dealer/getDealer'
          }),
        handleAddress(){
           this.showAddress = true
        },
         btnLists(){
              this.isUser=false 
              this.hello=""
              this.message=""
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
        },
        Tclick(){
            this.flog = !this.flog
        },
<<<<<<< HEAD
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
        },
    },
    mounted() {
        console.log(this.$route)
        axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=2593`).then(res => {
            this.list = res.data.data;
        }),
        axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${this.id}`).then(res => {
            this.list = res.data.data;
            // this.SerialID=res.data.data.SerialID
            console.log(res);
        }),
       axios.get(`http://baojia.chelun.com/v2-dealer-alllist.html?carId=131315&cityId=201&_1575354331`).then(res => {
            this.dealerList = res.data.data.list
            // console.log(this.dealerList);
        }),
        axios.get('https://baojia.chelun.com/location-client.html').then(res => {
            
            this.cityId = res.data.data.CityID;
            this.timestamp=res.data.data.timestamp
            console.log(this.cityId,"============>");
        })
=======
        typeClick(){  
            this.$router.push({
                path:"/type",
                query:{
                    carId: this.carId
                }
            })
        },
        btnList(){  
           
            if(!(/^[\u4e00-\u9fa5]{2,}$/.test(this.username))){
                this.message="请输入真实的中文姓名"
                this.hello="好"
                this.isUser=true
            }else if(!(/^1[34578]\d{9}$/.test(this.phone))){
                this.isUser=true 
                this.hello="好"
                this.message="请输入正确的手机号"
            }else {
                this.isUser=true
                this.hello="确定"
                this.pic="http://h5.chelun.com/2017/official/img/q-icon.png"
                this.message="询价成功"
            }
        }
    },
    mounted() {
        this.getDealer(this.carId)
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
    }
};
</script>
<style lang="scss" scoped>
.cityjudge-enter-active {
  transition: all .3s ease;
}
.cityjudge-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.cityjudge-enter, .cityjudge-leave-active {
transform: translateY(100%)
}
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
        position: relative;
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
            width: 215px;
        }
        .flex-column p:first-child {
            font-size: 18px;
<<<<<<< HEAD
            line-height: 2;
=======
            margin-top: 7px;
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
        }
        .flex-column p:nth-child(2) {
            font-size: 16px;
            line-height: 2.2;
            color: #333;
<<<<<<< HEAD
=======
            margin: 13px 0 0;
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
        }
    }
    .q-info:before {
        content: "";
        display: inline-block;
        padding-top: 8px;
        padding-right: 8px;
        border-top: 2px solid #ccc;
        border-right: 2px solid #ccc;
        transform: rotate(45deg);
        position: absolute;
        right: 13px;
        top: 40px;
    }
    .self-info {
        width: 100%;
        .tip{
            line-height: 25px;
            padding: 0 10px;
            font-size: 12px;
            color: #666;
            background: #eee;
        }
        ul{
          height: 132px;
          background: #fff;
          padding: 0 10px;  
        }
        ul li {
<<<<<<< HEAD
            font-size: 18px;
            height: 48px;
            line-height: 48px;
=======
            font-size: 16px;
            height: 44px;
            line-height: 44px;
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
            border-bottom: 1px solid #eee;
            input {
                font-size: 16px;
                padding-right: 10px;
                width: 88%;
                text-align: right;
                color: #555;
                outline: none;
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
                width: 300px;
                outline: none;
                background: #3aacff;
                height: 35px;
                border-radius: 5px;
                border: 0;
                padding: 1px 6px;
            }
        }
    }
    .scroll-top-enter,.scroll-top-leave-to{
    transform: translate3d(0, 100%, 0)
}
.scroll-top-enter-active, .scroll-top-leave-active{
    transition: transform .3s linear;
}

.wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 100;
    overflow: auto;
}
</style>