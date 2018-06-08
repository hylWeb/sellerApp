<template>
<!--   <header class="header">
    <mt-header fixed title="Ray-Honey"></mt-header>
  </header> -->

 <mu-appbar style="width: 100%;" color="tealA700">
  <mu-button icon slot="left"  v-on:click="back">
    <mu-icon value="keyboard_arrow_left"></mu-icon>
  </mu-button>
	Ray-Honey
<!--   <mu-button flat slot="right">LOGIN</mu-button> -->
</mu-appbar>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {}
  },
  methods:{
    back(){
      this.$router.back(-1)
    }
  }
}
</script>