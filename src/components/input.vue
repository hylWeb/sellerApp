
<template>
	
  <mu-container>
	  <mu-select  placeholder="请选择商品种类"  v-model="normal.value1" icon="check_circle_outline" color="tealA700" >
	  	<mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
	  </mu-select> 

	  <mu-text-field type="number" label="请输入商品数量" label-float help-text="购买的数量"  icon="add_shopping_cart" color="tealA700" ></mu-text-field><br/>
	  <mu-text-field label="请输入姓名" label-float help-text="谨慎填写，用户可用姓名查询运单号" icon="account_circle" color="tealA700" ></mu-text-field><br/>
	  <mu-text-field label="请输入手机号" label-float help-text="电话号码务必填写正确" icon="phone" color="tealA700" ></mu-text-field><br/>
	  <mu-text-field label-float help-text="请输入收获地址"  icon="account_balance" multi-line :rows="2" color="tealA700" full-width></mu-text-field><br/>
	  <!-- <mt-button type="primary" color="" size="large" v-on:click="add"></mt-button> -->
    <mu-button full-width  color="tealA700" v-on:click="add">添加</mu-button>
</mu-container>
</template>

<script>
export default {
  data () {
    return {
      options: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5', 'Option 6', 'Option 7', 'Option 8',
        'Option 9', 'Option 10'
      ],
      normal: {
        value1: '',
        value2: '',
        value3: '',
        value4: 'Option 1',
        value5: 'Option 2'
      },

      goods:"",
      count:0,
      userName:"",
      moblie:"",
      address:""

    }
  },
  methods:{
  	add:function(){
  		  	//传入后台
      	this.$api.post('add', {'goods':this.goods,'count':this.count,'userName':this.username,'moblie':this.moblie,'address':this.address}, r => {
       		console.log(r);
       		this.$router.push({path:'/list'});
        
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