<template>
  <div>
  <!--  <Header></Header> -->
   <List></List>
   <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import List from '../components/list.vue'
export default {
  components: { Header,List, Footer },

}
</script>