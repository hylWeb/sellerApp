<template>
  <div>
   <!--  <Header></Header> -->
    <Login></Login>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Login from '../components/login.vue'
export default {
  components: { Header,Login, Footer },

}
</script>

