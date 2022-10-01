<template>
  <div>
    <h3>
      当前链接: <i>{{ this.$route.path }}</i>
    </h3>
    <h3>这是一个组件目录中的自定义组件 通过 @nuxtjs/router 模块定义后成为一个路由页面</h3>
    <h4>
      我不是自动生成的 但是通过 @nuxtjs/router 的模块配置
      可以和自动生成的路由结合
    </h4>
  
    <p>
      <nuxt-link to="/">返回首页</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'mycomponentpage',
};
</script>

<style scoped></style>
