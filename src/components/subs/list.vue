<template>
  <div class="list">
    <div v-if="mold === 'thumbnail'" v-for="(item,index) in items" :key="index">
      <router-link class="thumbnail" :to="{name:'DetailView', params: {id:item.id}}">
        <div class="content">
          <img :src="item.image_hlarge" alt="cover">
          <h3>{{item.title}}</h3>
          <p>{{contentChange(item.content)}}</p>
        </div>
        <div class="author">
          <span class="name">{{item.category_name}}</span>
          <span class="label" v-if="item.subcategory_name">
            本活动来自栏目 {{item.subcategory_name}}
          </span>
        </div>
      </router-link>
    </div>
    <div v-if="mold === 'basic'">
      <ul class="basic">
        <li v-for="(item,index) in items" :key="index">
          <a href="#">
            <h3>{{item.title}}</h3>
            <div class="info">{{item.comments}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  /* 如果没有传值，那么就设置默认值basic，传值得花就获取传过来的值。 */
  props: {
    mold: {
      type: String,
      default: 'basic'
    },
    items: {
      type: Array,
      require: true
    }
  },
  methods: {
    /* 可圈点的地方,类似于过滤器的作用 */
    contentChange (value) {
      return value.slice(0, 30)
    }
  }
}
</script>
<style scoped>
  .list .thumbnail{
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 1.8rem;
  }
  .thumbnail .content {
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .thumbnail h3 {
    margin-top: 0;
    margin-bottom: 0.6rem;
    line-height: 1.41;
    text-align: justify;
    font-size: 1.7rem;
    font-weight: 500;
    color: #494949;
  }

  .thumbnail p {
    line-height: 1.5;
    text-align: justify;
    color: #aaa;
    font-size: 1.2rem;
    overflow: hidden;
  }

  .thumbnail img {
    float: right;
    width: 25.6%;
    height: 8.678rem;
    margin-left: 2.5rem;
  }

  .thumbnail .author {
    font-size: 1.2rem;
    color: #ccc;
  }

  .thumbnail .label {
    position: absolute;
    bottom: 2.5rem;
    right: 1.8rem;
  }

  .thumbnail ~ .thumbnail::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.1rem;
    content: '';
    background: #e3e3e3;
  }
  .basic h3 {
    padding: 0;
    line-height: 1.41;
    font-size: 1.7rem;
    font-weight: 500;
    color: #494949;
  }

  .basic .info {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    color: #42bd56;
  }
</style>
