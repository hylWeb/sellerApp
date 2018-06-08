<template>
 <div>
     <div class="middle-box text-center loginscreen  animated fadeInDown">
        <div>
           <div class="m-b-md">
                <img alt="image" class="img-circle circle-border" src="../../static/image/a1.jpg">
            </div>
            <h3>登录 Ray-Honey </h3>

          <!--   <form class="m-t" role="form" action="http://www.zi-han.net/theme/hplus/index.html"> -->
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="手机号" v-model="ruleForm.userName" required="">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="密码" v-model="ruleForm.password" required="">
                </div>
                <button class="btn btn-primary btn-rounded btn-block" v-on:click="login">登 录</button>
                <p class="text-muted text-center"> <!-- <a href="/register"></a> -->
                 <router-link to="update-pass"><small>忘记密码了？</small></router-link>
                <router-link to="register">注册一个新账号</router-link>
                </p>
        </div>
    </div>


  </div>
</template>

<script>	
export default {
	data (){
		return{
      ruleForm: {
         userName: '', //用户名
         password: ''  //密码
     },
		}
	},
  methods: {
      login(){
     //保存的账号
        var name=this.ruleForm.userName;
        //保存的密码
        var pass=this.ruleForm.password;
        if(name==''||name==null){
          alert("请输入正确的用户名");
          return;
        }else if(pass==''||pass==null) {
          alert("请输入正确的密码");
          return;
        }
      	//传入后台
      	this.$api.post('login', this.ruleForm, r => {
       		console.log(r);
          if(r.userName != null && r.userName != 'undefined'){
                 //传入账号名，密码，和保存天数3个参数
                  this.setCookie(name,pass,7);
                  this.$router.push({ path: '/list' }) 
            }else{
               //   alert('');
                  alert("请输入正确的用户名和密码！！！", "提示");
                  this.username=''
                  this.password= ''
            }
     	 })
      },
      //设置cookie
      setCookie(c_name,c_pwd,exdays) {
        var exdate=new Date();//获取时间
        exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
        //字符串拼接cookie
        window.document.cookie="userName"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
        window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
      },
      //读取cookie
      getCookie:function () {
        if (document.cookie.length>0) {
          var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
          for(var i=0;i<arr.length;i++){
            var arr2=arr[i].split('=');//再次切割
            //判断查找相对应的值
            if(arr2[0]=='userName'){
              this.ruleForm.userName=arr2[1];//保存到保存数据的地方
            }else if(arr2[0]=='userPwd'){
              this.ruleForm.password=arr2[1];
            }
          }
        }
      },
     //清除cookie
      clearCookie:function () {
        this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
    }
   
    },
        //页面加载调用获取cookie值
    mounted(){
            this.getCookie()
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

</style>