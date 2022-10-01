import Vue from 'vue';
import Router from 'vue-router';
import MyPage from '~/components/myComponentPage';
import ItemPage from '~/pages/item/index';
Vue.use(Router);

// 接下来很重要  这是官方的实例 通过获取 默认路由 然后合并自定义路由 fixRouters 还可以屏蔽一些默认的路由

export function createRouter(
  ssrContext,
  createDefaultRouter,
  routerOptions,
  config,
  store
) {
  const options =
    routerOptions || createDefaultRouter(ssrContext, config).options;

  return new Router({
    ...options,
    routes: [
      { path: '/some/my-component-page', component: MyPage },
      { path: '/item-:id', component: ItemPage },
    ].concat(fixRoutes(options.routes, store)),  
  });
}

function fixRoutes(defaultRoutes, store) {
  // default routes that come from `pages/`
  // Filter some routes using the content of the store for example
  return defaultRoutes;
}
