
<template>
	
  <mu-container>
	  <mu-select  placeholder="请选择商品"  v-model="orderVo.goodsId" icon="check_circle_outline" color="tealA700" >
	  	<mu-option v-for="(option,index) in goods" :key="option.id" :label="option.name" :value="option.id"></mu-option>
	  </mu-select> 

	  <mu-text-field type="number" label="请输入商品数量" label-float help-text="购买的数量"  v-model="orderVo.quantity" icon="add_shopping_cart" color="tealA700" ></mu-text-field><br/>
	  <mu-text-field label="请输入姓名" label-float help-text="谨慎填写，用户可用姓名查询运单号" icon="account_circle" v-model="orderVo.name" color="tealA700" ></mu-text-field><br/>
	  <mu-text-field label="请输入手机号" label-float help-text="电话号码务必填写正确" icon="phone" v-model="orderVo.mobile" color="tealA700" ></mu-text-field><br/>
	  <mu-text-field label-float help-text="请输入收获地址"  icon="account_balance" v-model= "orderVo.address" multi-line :rows="2" color="tealA700" full-width></mu-text-field><br/>
	  <!-- <mt-button type="primary" color="" size="large" v-on:click="add"></mt-button> -->
    <mu-button full-width  color="tealA700" v-on:click="add">添加</mu-button>
</mu-container>
</template>

<script>
export default {
  data () {
    return {
      goods: [],
      orderVo:{
        goodsId :"",
        quantity:0,
        name:"",
        mobile:"",
        address:""
      }

    }
  },
   mounted(){
    this.loadGoodList();  //初次访问查询列表
  },
  methods:{
  	add:function(){
  		  	//传入后台
      	this.$api.post('addOrder',this.orderVo, r => {
       		console.log(r.code);
          if (r.code == '1') {
              this.$router.push({path:'/list'}); //成功
          }else{
              alert(r.result);
              this.loadGoodList();
          }

       		
        
     	 })
  	},
    loadGoodList:function(){
            // 查询数据
      this.$api.get('/getGoods' , null, r => {
        console.log(r.result);
         this.goods = r.result;
      })
    }
  }
}
</script>
<style scoped>
	  @import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
	  .container{
	  	margin-top: 30px;
	  }
	  .mu-button{
	  	margin-top: 20px;
	  }
</style>