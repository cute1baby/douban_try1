<template>
  <div class="banner">
    <!-- Ad banner -->
    <div v-if="adImg">
      <div class="banner-bg ad" v-if="adImg">
        <img :src="adImg" alt="ad">
        <span>广告</span>
      </div>
    </div>
    <!-- Universal banner -->
    <div v-else>
      <div class="banner-bg">
        <img src="../../assets/promotion_bg.jpg" alt="cover">
      </div>
      <div class="content">
        <span class="title">{{title}}</span>
        <div class="button-wrapper">
          <span class="download">极速下载</span>
          <span class="open">打开</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'banner',
  props: {
    title: {
      type: String,
      required: false,
      default: '打开App,浏览更多信息'
    },
    adImg: {
      type: String,
      required: false
    }
  }
}
</script>
<style scoped>
  .banner {
    position: relative;
    height: 8rem;
  }
  .banner .banner-bg{
    position:absolute;
    left:0;
    top:0;
  }
  .banner img {
    max-width: 100%;
  }
  .ad span {
    position: absolute;
    right: 0;
    bottom: 0.2rem;
    padding: 0.4rem;
    font-size: 1.2rem;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.3);
  }

  .content {
    position: absolute;
    right: 1rem;
    left: 1.8rem;
    display: flex;
    height: 8rem;
    justify-content: space-between;
    align-items: center;
  }
  .content .title {
    padding-left: 1.8rem;
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 2.2rem;
    color: #2CA532;
  }

  .content .download,.content .open {
    display: inline-block;
    width: auto;
    padding: 0 1.4rem;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 2;
    border: 0.1rem solid #42bd56;
    border-radius: 0.3rem;
  }

  .content .download {
    color: #fff;
    background: #42bd56;
  }

  .content .open {
    color: #42bd56;
  }
</style>
