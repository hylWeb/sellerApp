<template>
  <div>
   <Header></Header>
    <UpdatePass></UpdatePass>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import UpdatePass from '../components/update-pass.vue'
export default {
  components: { Header,UpdatePass, Footer },

}
</script>

