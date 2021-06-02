import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7b193d0d = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _126758fc = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _3a1335b4 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _4fcef7b4 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _878fdd74 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _6f4a6350 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _823a711a = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _7b193d0d,
    children: [{
      path: "",
      component: _126758fc,
      name: "home"
    }, {
      path: "/register",
      component: _3a1335b4,
      name: "register"
    }, {
      path: "/login",
      component: _3a1335b4,
      name: "login"
    }, {
      path: "/profile:username",
      component: _4fcef7b4,
      name: "profile"
    }, {
      path: "/settings",
      component: _878fdd74,
      name: "settings"
    }, {
      path: "/editor",
      component: _6f4a6350,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _823a711a,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
