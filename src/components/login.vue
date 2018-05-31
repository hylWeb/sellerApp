<template>
 <div>
<!-- 	  <div class="login">
	 	<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
	 	<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
	 	<mt-button type="primary" size="large" v-on:click="login">登录</mt-button>
	  </div> -->
     <div class="middle-box text-center loginscreen  animated fadeInDown">
        <div>
           <div class="m-b-md">
                <img alt="image" class="img-circle circle-border" src="../../static/image/a1.jpg">
            </div>
            <h3>登录 Ray-Honey </h3>

          <!--   <form class="m-t" role="form" action="http://www.zi-han.net/theme/hplus/index.html"> -->
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="手机号" v-model="username" required="">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="密码" v-model="password" required="">
                </div>
                <button class="btn btn-primary btn-rounded btn-block" v-on:click="login">登 录</button>
                <p class="text-muted text-center"> <!-- <a href="/register"></a> -->
                 <router-link to="update-pass"><small>忘记密码了？</small></router-link>
                <router-link to="register">注册一个新账号</router-link>
                </p>

           <!--  </form> -->
        </div>
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
  .form-control{
    border-radius: 21px;
  }
  .text-muted{
     margin-top: 8px;
  }
  .text-muted a{
    color:#337ab7;
  }
  /*@import '../../static/css/animate.min.css';*/

  
/*   body1 {
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
    }*/
</style>