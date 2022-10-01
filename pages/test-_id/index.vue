<template>
  <div>
    <h3>
      当前链接: <i>{{ this.$route.path }}</i>
    </h3>

     <h3>
      当前路由参数: <i>{{ this.$route.params }}</i>
    </h3>
    <h3>这是一个pages目录下的 自动路由 /pages/test_id/index.vue</h3>
    <h4>尝试使用自动路由生成 /test-id 的形式</h4>

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
