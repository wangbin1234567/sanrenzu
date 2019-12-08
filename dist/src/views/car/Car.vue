<template>
<<<<<<< HEAD

    <div class="car">
        <div class="content">
             <div class="img" @click="carimage(SerialID)">
             <img :src="CoverPhoto" alt="">
             <span>{{pic_group_count}}张图片</span>
         </div>
         <div class="info">
             <div class="text">
                 <p>{{dealer_price}}</p>
             <p>指导价{{official_refer_price}}</p>
             </div>
             <div class="action">
                 <button @click="chelun">{{BottomEntranceTitle}}</button>
             </div>
         </div>       
      </div>
       <div class="c-type">        
           <span v-for="(item,index) in year" :key="index" @click="tab(item)" :class="{active:yearNum==item}">
               {{item}}
           </span>
       </div>
        <List :list="list" ></List>
        <div class="inquiry-btn" @click="chelun">
            <li>
                {{BottomEntranceTitle}}               
            </li>    
            <li>
                 {{BottomEntranceSubTitle}}
            </li>       
        </div>
    </div>

</template>
<script>


import axios from "axios"
import List from "../../components/list.vue"
export default {
    props:{

    },
    components:{
        List
    },
    data(){
        return {
          CoverPhoto:"",//图片
          pic_group_count:"",//个数
          dealer_price:"",//价格
          official_refer_price:"",//指导价
          BottomEntranceTitle:"",//询问底价
          list:"",//数据
          year:"",//年份
          BottomEntranceSubTitle:"",
          yearNum:"全部",//年份下标,
          SerialID:this.$route.query.id
        }
    },
    
    methods:{
        chelun(){
=======
    <div class="car" v-if="Object.keys(carList).length">
        <div class="content">
            <div class="img" @click="handleImg">
                <img :src="carList.CoverPhoto" alt />
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
        <div class="c-type">
            <span
            v-for="(item,index) in year"
            :key="index"
            @click="tab(item,index)"
            :class="{active:curIndex==index}"
            >{{item}}</span>
        </div>
        <List></List>
        <div class="inquiry-btn" @click="chelun">
            <p>{{carList.BottomEntranceTitle}}</p>
            <p>本地销售商为你报价</p>
        </div>
    </div>
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
    methods: {
        ...mapActions({
            getInfoAndListById: "car/getInfoAndListById"
        }),
        ...mapMutations({
            setCurrent: "car/setCurrent",
            seriesfalg:'series/seriesfalg'
        }),
        chelun() {
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
            this.$router.push({
                name: "quotation",
                params: {
<<<<<<< HEAD
                    id: this.SerialID
                }                     
            })
                     
        },
         carimage(SerialID){
             this.$router.push({path:"/img",query:{SerialID}})
            //  this.$router.push({name:"img",params:{SerialID}})
                console.log(SerialID)
            }, 
        tab(item){
             this.yearNum=item
             axios.get(`http://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${this.SerialID}`).then(res=>{       
             this.list=res.data.data.list.filter(i => i.market_attribute.year==item);
            if(this.yearNum=="全部"){
                    axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${this.SerialID}`).then(res=>{
                        this.list=res.data.data.list
                    })
                }
            })
        },       
    },
    created(){
         axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${this.SerialID}`).then(res=>{
        console.log(res)
            window.console.log(res.data.data.list)
            // this.SerialID=res.data.data.
             this.pic_group_count=res.data.data.pic_group_count
             this.CoverPhoto=res.data.data.CoverPhoto
             this.dealer_price=res.data.data.market_attribute.dealer_price
             this.official_refer_price=res.data.data.market_attribute.official_refer_price
             this.BottomEntranceTitle=res.data.data.BottomEntranceTitle
             this.BottomEntranceSubTitle=res.data.data.BottomEntranceSubTitle
             this.list=res.data.data.list
             //获取年份
             let arr=[];//存放年份
            this.list.forEach(item => {
                 arr.push(item.market_attribute.year)  
                 arr.unshift(this.yearNum)             
                 this.year=Array.from(new Set(arr))
                
             });              
         })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.car{
    width:100%;
    height:100%;
    background: #f4f4f4;
     overflow-x: hidden;
    overflow-y: scroll;  
}
.inquiry-btn{
    position: absolute;
    bottom:0;
    width:100%;
    height:55px;
    background:#09f;
    li{
      
        width:100%;
        height:50%;
        color:#fff;
    }
    li:nth-of-type(1){
        font-size:16px;
          display: flex;
        justify-content: center;
        align-items: flex-end;
    }
     li:nth-of-type(2){
        font-size:10px;
          display: flex;
        justify-content: center;
    }
}
.content{
    width:100%;
    height:260px;
    background: #fff;  
    .img{
        width:100%;
        height:176px;
        position: relative;
        overflow: hidden;
        img{
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
        }
        span{
            background:rgba(0,0,0,.5);
            color:#fff;
            font-size:12px;
            padding:0 5px;
            border-radius:8px ;
            position: absolute;
            right:17px;
            bottom:16px;
        }
    }
    .info{
        width:100%;
        position: relative;      
        .text{
           margin-top:18px;
           padding-left:14px;
        p:nth-of-type(1){
            font-size:18px;
            height:24px;
            color:red;
        }
        p:nth-of-type(2){
            font-size:14px;
            height:16.8px;
            color:#c5c5c5;
        }
        }
        .action{
            width:187px;
            height:35px;
            margin-right:5px;
            position: absolute;
            right:0;
            bottom:3px;
            button{
                width:100%;
                height:100%;
                outline: none;
                border:none;
                font-size:16px;
                border-radius: 7px;
                background:#00afff;
                color:#fff;
            }
        }
    }
}
.c-type{
    width:100%;
    height:46px;
    padding:7px 0;
    background:#fff;
    display: flex;
    align-items: center;
    span{
        font-size: 16px;
        margin:0 10px;
    }
    // span:nth-of-type(1){
    //     color:#04f;
    // }
    span.active{
       color:#04f;
=======
                id: this.SerialID
                }
            });
            localStorage.setItem("2017.official.curId",this.currentList[0].list[0].car_id) 
        },
        tab(item,index) {
            this.curIndex=index
            this.setCurrent(item)
            this.getInfoAndListById(this.SerialID);
        },
        handleImg(){
            let SerialID=this.SerialID
            this.$router.push({path:"/img",query:{SerialID}})
        }
    },
    mounted() {
        this.getInfoAndListById(this.SerialID)
        this.seriesfalg()
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
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
    }
}

</style>