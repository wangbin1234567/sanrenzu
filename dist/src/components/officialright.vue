<template>
    <div class="list_right_content">
        <h5 @click="occlude">{{items.GroupName}}</h5>
        <ul>
            <li v-for="(grounitem,key) in items.GroupList" 
                :key="key" 
                @click="particularsitem(grounitem.SerialID)"
                ><img :src="grounitem.Picture" alt="">
                <div><p>{{grounitem.AliasName}}</p>
                <p class="list_ps active">{{grounitem.DealerPrice}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
    props:["items"],
    methods:{
        ...mapMutations({
            amendstatefalse:"home/amendstatefalse"
        }),
        occlude(){
            this.amendstatefalse()
        },
        particularsitem(SerialID){
            this.$router.push(`/car?id=${SerialID}`)
        }, 
    }
}
</script>
<style lang="scss" scoped>
.list_right_content{
    h5{
        width: 100%;
        font-size: 14px;
        font-weight: 100;
        background: #eee;
    }
    ul{
        li{
            width: 100%;
            height: 70px;
            display: flex;
            border-bottom: 1px solid #999;
            div{
                p{
                    margin: 9px 0;
                }
                .list_ps{
                    color: red;
                }
            }
            img{
                height: 60px;
                margin: auto 0;
            }
        }
    }
}

</style>