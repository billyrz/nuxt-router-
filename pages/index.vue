<template>
  <div class="container">
    <div>
      <Logo />
      <h6 class="title">@nuxtjs/router 模块的使用</h6>
      <div class="links">
        <nuxt-link to="/item" class="button--grey" alt=" 自动路由 /item">
          自动路由静态的 /item
        </nuxt-link>
        <nuxt-link
          to="/some/my-component-page"
          class="button--grey"
          alt=" 自定路由到 /some/my-component-page"
        >
          自定义路由/some/my-component-page
        </nuxt-link>
      </div>

      <div class="links">
        <nuxt-link
          :to="'/item-' + parseInt(Math.random() * 1000)"
          class="button--grey"
          alt=" 自动路由 /item"
        >
          自动路由+自定义路由 成为动态的 /item-${id}
        </nuxt-link>

        <nuxt-link
          :to="'/item/' + parseInt(Math.random() * 1000)"
          class="button--grey"
          alt=" 自动路由 /item"
        >
          自动路由动态 /item/${id}
        </nuxt-link>

        <nuxt-link :to="'/test-_id'" class="button--grey">
          自动路由生成 /test-_id</nuxt-link
        >
      </div>
    </div>
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 900;
  font-size: 25px;
  color: #35495e;
  background: #ffcc33;
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
