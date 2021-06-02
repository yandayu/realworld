import cookieparser from 'cookieparser'
export const state = () => ({
    user: null
})
export const mutations = {
    setUser (state, user) {
        state.user = user
    }
}
export const actions = {
    // nuxtServerInit 是一个nuxt提供的特殊的 action 方法
    // 这个 action 会在服务端渲染期间自动调用，且仅在服务端中运行
    // 作用：初始化容器数据，以及需要传递数据给客户端使用的数据
    // commit提交mutations的方法 req服务端渲染期间的请求对象
    nuxtServerInit({ commit }, { req }) {
        let user = null
        // 如果请求头中有 Cookie
        if (req.headers.cookie) {
            // 使用 cookieparser 把 cookie 字符串转为 JavaScript 对象
            // 接口中会自动将本地存储的cookie数据发送到服务端
            const parsed = cookieparser.parse(req.headers.cookie)
            // try...catch...防止cookie的数据格式不对
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {

            }
        }

        // 提交 mutation 修改 state 状态
        commit('setUser', user)
    }
}