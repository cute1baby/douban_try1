<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import scroller from './movies/scroller.vue'
import types from './movies/types.vue'
import downloadApp from './movies/downloadApp.vue'
export default{
  computed: {
    ...mapState({
      hotMovies: state => state.movie.hotMovies,
      newMovies: state => state.movie.newMovies,
      topMovies: state => state.movie.topMovies,
      movieTags: state => state.movie.movieTags
    })
  },
  methods: {
    ...mapActions(['getMovie'])
    /* 或者以下面这种方式去调用store中的actions方法
    getMovie: function () {
      this.$store.dispatch('getMovie')
    } */
  },
  mounted () {
    this.getMovie()
  },
  components: {
    scroller,
    types,
    downloadApp
  }
}
</script>
<style scoped>

</style>
