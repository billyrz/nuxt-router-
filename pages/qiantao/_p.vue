<template>
  <div class='box'>
    <h3>
      当前链接: <i>{{ this.$route.path }}</i>
    </h3>

     <h3>
      当前路由参数: <i>{{ this.$route.params }}</i>
    </h3>
    <h3>{{msg}}</h3>
    <h4>{{h4}}</h4>

    <p>
      <nuxt-link to="/">返回首页</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'q1',
  data(){
    return {
      msg:'嵌套路由对seo的影响',
      h4:'我是一个嵌套的路由 q1'
    }
  }
};
</script>

<style scoped>
.box{
  min-width: 840px;
  min-height:340px;
  border:1px solid;
  margin-top:30px;
}

</style>
