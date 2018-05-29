<template>
 <div class="background">
	  <div class="login">
	 	<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
	 	<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
	 	<mt-button type="primary" size="large" v-on:click="login">登录</mt-button>
	  </div>
  </div>
</template>

<script>	
export default {
	data (){
		return{
			username:"",
			password:""
		}
	},
    methods: {
      login(){
      	console.log(this.username+" "+this.password)
      	//传入后台
      	this.$api.post('login', {'userName':this.username,'password':this.password}, r => {
       		console.log(r);
       		this.$router.push({path:'/list'});
        
     	 })
      }
    }
}
</script>

<style scope>
   body {
        background-image: url(../../static/image/background.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        margin: 0px;
        padding: 0px;

    }
    .login{
	   
	   	height:50%;
	   	margin-top:40%;        
    }
    .mint-field{
   	 	margin:20px 0px;
    }
</style>