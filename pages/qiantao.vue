<template>
  <div class="container">
    <div>
      <Logo />
      <h6 class="title">嵌套的路由</h6>
      <div>
        <nuxt-link to="/qiantao/q1" class="button--green">child-1</nuxt-link>
        <nuxt-link to="/qiantao/q2" class="button--green">child-2</nuxt-link>
        <nuxt-link to="/qiantao/q3" class="button--green">child-3</nuxt-link>
        <nuxt-link to="/qiantao/q4" class="button--green">child-4</nuxt-link>
      </div>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <div>
        <nuxt-link class="button--green" to="/">返回首页</nuxt-link>
      </div>
    </div>
    <nuxt/>
  </div>
</template>

<script>
export default {};
</script>

<style>
 
</style>
