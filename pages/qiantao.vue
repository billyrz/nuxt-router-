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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.btn-gray {
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 900;
  font-size: 25px;
  color: #35495e;
  background: #cccc33;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
