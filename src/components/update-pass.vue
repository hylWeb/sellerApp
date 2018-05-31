<template>
 <div>

     <div class="middle-box text-center loginscreen  animated fadeInDown">
        <div>
           <!--  <div class="m-b-md">
                <img alt="image" class="img-circle circle-border" src="../../static/image/a1.jpg">
            </div>  -->
            <h2>找回密码 </h2>
                <div class="input-group">
                    <input type="email" class="form-control" placeholder="手机号" v-model="mobile" required="">
                    <span class="input-group-btn"> <button type="button" class="btn btn-primary">发送验证码</button> </span>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="填写手机验证码" v-model="verifyCode" required="">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="填写新密码" v-model="password" required="">
                </div>
                <button class="btn btn-primary  btn-block" v-on:click="update">修改密码</button>
           

        </div>
    </div>


  </div>
</template>

<script>	
export default {
	data (){
		return{
			mobile:"",
			password:"",
      verifyCode:""
		}
	},
    update: {
      register(){
      	console.log(this.mobile+" "+this.password)
      	//传入后台
      	this.$api.post('login', {'userName':this.mobile,'password':this.password}, r => {
       		console.log(r);
       		this.$router.push({path:'/list'});
        
     	 })
      }
    }
}
</script>

<style scope>
  .form-control{
    border-radius: 1px;
  }
  .form-group{
    margin-top: 10px;
  }
  .input-group-btn{
    padding-left: 3px;
  }
  .text-muted{
     margin-top: 8px;
  }
  .text-muted a{
    color:#337ab7;
  }

</style>