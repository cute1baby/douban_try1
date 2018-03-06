<template>
  <div class="scroller">
    <div class="header">
      <h2>{{title}}</h2>
      <a href="#">更多</a>
    </div>
    <div class="content">
      <slot name="promItem"></slot>
      <ul class="hasCover" v-if="type === 'hasCover'">
        <li v-for="(item,index) in items" :key="index">
          <router-link :to="'subject/' + item.id" append>
            <img v-if="item.images" :src="item.images.large" alt="">
            <span class="title">{{item.title}}</span>
            <!-- 这个是评分的组件吗？ -->
            <rating v-if="item.rating" :rating="item.rating"></rating>
          </router-link>
        </li>
      </ul>
      <ul class="onlyString" v-if="type === 'onlyString'">
        <li v-for="(item,index) in items" :key="index" style="border-color: #FFAC2D;">
          <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Rating from './rating.vue'
export default{
  props: ['title', 'type', 'items'],
  components: {Rating}
}
</script>
<style scoped>
  .scroller {
    padding-top: 1rem;
  }

  .header {
    height: 2.6rem;
    line-height: 2.6rem;
    padding: 0 1.6rem;
  }
  .header a {
    float: right;
    font-size: 1.44rem;
  }
  .header a:last-child {
     color: #42bd56;
   }

  .header h2 {
    display: inline-block;
  }

  .content {
    box-sizing: content-box;
  }
  .content ul {
    padding: 0.8rem 0;
  }

  .hasCover {
    overflow-x: auto;
    white-space: nowrap;
    text-align: center;
  }
  .hasCover .title {
    display: block;
    max-width: 100%;
    margin-top: 1rem;
    line-height: 1.6rem;
    font-size: 1.6rem;
    color: #111;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .hasCover li {
    display: inline-block;
    width: 10rem;
    margin-left: 1rem;
    overflow:hidden;
  }

  .hasCover li:first-child {
    padding-left: 0.8rem;
  }

  .hasCover img {
    height: 15rem;
  }

  .onlyString {
    overflow-x: auto;
    white-space: nowrap;
  }
  .onlyString li {
    display: inline-block;
    margin: 0 0 0.8rem 1.6rem;
    font-size: 1.6rem;
    border: solid 0.1rem;
    border-radius: 0.4rem;
    vertical-align: middle;
  }

  .onlyString a {
    height: 5rem;
    line-height: 5rem;
    padding: 0 2.4rem;
    letter-spacing: 0.16rem;
    overflow: auto;
    display: block;
    text-align: center;
  }

  .onlyString li:empty {
    width: 100%;
    display: block;
    height: 0.1rem;
    border: 0;
    margin: 0;
  }
</style>
