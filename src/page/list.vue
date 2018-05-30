<template>
  <div>
  <!--  <Header></Header> -->
   <List></List>
   <Add></Add> 
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Add from '../components/add-button.vue'
import List from '../components/list.vue'
export default {
  components: { Header,List, Add },

}
</script>