<template>
  <div>
    <div class="home-view has-header">
      <sub-nav mold="quickNav"></sub-nav>
      <list mold="thumbnail" :items="events"></list>
      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
        <loading slot="spinner"></loading>
      </infinite-loading>
    </div>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import SubNav from './subs/subnav.vue'
import List from './subs/list.vue'
import Loading from './subs/loading.vue'

export default{
  computed: {
    ...mapState({
      events: state => state.homevuex.events
    })
  },
  methods: {
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    ...mapActions(['loadMore'])
  },
  components: {
    InfiniteLoading,
    SubNav,
    List,
    Loading
  }
}
</script>
<style scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>
