<template>
  <div>
    <Rate :length="5" :value="2"></Rate>
  </div>
</template>
<script>
import Rate from 'vue-rate'
export default{
  props: {
    rating: {
      type: Object,
      reqired: true
    }
  },
  created () {
    console.log(this.rating.average)
    console.log(this.rating)
  },
  components: {
    Rate
  }
}
</script>
<style scoped>

</style>
