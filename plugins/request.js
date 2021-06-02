import axios from 'axios'

const request = axios.create({
    baseURL: 'https://conduit.productionready.io/'
})

export {
    request
}
// 通过插件机制获取到上下文对象
export default function ({ store }) {
    request.interceptors.request.use(function (config) {
        /**
         * 需要拿到vuex中的user对象
         * import store from '@/store'
         * 因为store都是通过export按需导出
         * 需要按需加载import { state } from '@/store'
         * 此时拿到的state是一个函数 需要调用一下此函数
         * 这样拿到的数据永远是null
         * 不同于客户端渲染 所以需要放入到plugins中
         */
        const { user } = store.state

        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }

        // 返回 config 请求配置对象
        return config
    }, function (error) {
        return Promise.reject(error)
    })
}