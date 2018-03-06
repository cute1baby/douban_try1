<template>
  <router-link class="user-bar" :to="{ name: currentLink}" tag="div">
    <div class="avatar">
      <div v-if="currentUser.name">
        <img src="../../assets/avatar.png" alt="avatar">
      </div>
      <div v-else>
        <img src="../../assets/user_normal.jpg" alt="未登陆">
      </div>
    </div>
    <div class="holder">{{holder}}</div>
    <div class="icon icon-camera"></div>
    <div class="icon icon-pen"></div>
  </router-link>
</template>
<script>
import {mapGetters} from 'vuex'
export default{
  name: 'userBar',
  computed: {
    currentLink () {
      return this.currentUser.name ? 'HomeView' : 'loginView'
    },
    holder () {
      return this.currentUser.name ? this.currentUser.name : '请先登录'
    },
    ...mapGetters(['currentUser'])
  },
  created () {
    if (localStorage.getItem('email')) {
      this.$store.commit({
        type: 'getLocalUser'
      })
    }
  }
}
</script>
<style scoped>
  .user-bar {
    position: relative;
    padding: 1rem 1.8rem;
    overflow: hidden;
  }
  .user-bar .avatar {
    width: 4rem;
    height: 4rem;
    float: left;
  }
  .user-bar .avatar img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .user-bar .holder {
    float: left;
    padding-left: 1rem;
    line-height: 4rem;
    font-size: 1.5rem;
    color: #aaa;
  }

  .user-bar .icon {
    content: '';
    width: 4rem;
    height: 4rem;
    padding: 0.8rem;
    margin-left: 0.8rem;
    float: right;
    box-sizing: border-box;
  }

  .user-bar .icon::before {
    content: '';
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    background-position: center;
    background-repeat: no-repeat;
  }

  .user-bar .icon-camera::before {
    background-image: url(../../assets/camera.svg);
  }

  .user-bar .icon-pen::before {
    background-image: url(../../assets/pen.svg);
  }

  .user-bar .icon-pen:before {
     content: '';
     position: absolute;
     left: 0;
     bottom: 0;
     width: 100%;
     height: 0.1rem;
     background: #E8E8E8;
   }
</style>
