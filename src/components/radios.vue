<template>
  <div class="status has-header">
    <banner></banner>
    <user-bar></user-bar>
    <div class="content-list">
      <card mold="quote" v-for="item in items" :key="item"></card>
      <a class="list-link" href="#">显示更多广播</a>
    </div>
    <download-app></download-app>
  </div>
</template>
<script>
import banner from './movies/banner.vue'
import userBar from './movies/userBar.vue'
import card from './movies/card.vue'
import downloadApp from './movies/downloadApp.vue'
export default{
  data () {
    return {
      items: 10
    }
  },
  components: {
    banner,
    userBar,
    card,
    downloadApp
  }
}
</script>
<style scoped>
  .list-link {
    display: block;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    color: #42bd56;
  }
</style>
