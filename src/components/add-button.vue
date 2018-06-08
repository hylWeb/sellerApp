<template>
  <mu-button class="add_button" large fab color="tealA700" @click="addUI">
    <mu-icon  value="add"></mu-icon>
  </mu-button>
</template>
<script>
	export default {
		methods:{
			addUI:function(){
					this.$router.push({path:'/add'});
			}
		}
	}

</script>
<style scoped>
	.add_button{
		 position:fixed;
	     margin:0px auto;
	     right:0px;
	     left:0px;
	     bottom:0;
	}

</style>