<template>
  <div class="pages-view">
    <header-bar @showTalion="open"></header-bar>
    <router-view></router-view>
    <talion-view v-show="talion" @closeTalion="close"></talion-view>
  </div>
</template>
<script>
import headerBar from './part/header'
import talionView from './part/talionView.vue'
export default{
  data () {
    return {
      talion: ''
    }
  },
  methods: {
    open () {
      this.talion = 'open'
    },
    close () {
      this.talion = ''
    }
  },
  components: {
    headerBar,
    talionView
  }
}
</script>
<style scoped>

</style>
