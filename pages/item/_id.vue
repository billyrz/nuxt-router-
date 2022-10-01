<template>
  <div>
    <h3>
      当前链接: <i>{{ this.$route.path }}</i>
    </h3>

     <h3>
      当前路由参数: <i>{{ this.$route.params }}</i>
    </h3>
    <h3>这是一个pages目录下的 自动路由 /pages/item/_id.vue</h3>
    <h4>可以结合 自定义路由 中的一个 /item-:id 生成自定义路由</h4>

    <p>
      <nuxt-link to="/">返回首页</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: '2',
};
</script>

<style scoped></style>
