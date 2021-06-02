import { request } from '@/plugins/request'

export const getArticles = (data) => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params: data
    })
}

export const getFeedArticles = (data) => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params: data
    })
}

export const favoriteArticle = (slug) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`
    })
}

export const unfavoriteArticle = (slug) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`
    })
}

export const updateArticle = (slug, data) => {
    return request({
        method: 'PUT',
        url: `/api/articles/${slug}`,
        data
    })
}

export const publishArticle = (data) => {
    return request({
        method: 'POST',
        url: '/api/articles',
        data
    })
}

export const getArticle = (slug) => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}

export const delArticle = (slug) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}`
    })
}

