import { request } from '@/plugins/request'

export const getComments = (slug) => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`
    })
}

export const addComments = (slug, data) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        data
    })
}

export const delComment = (slug, id) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/comments/${id}`
    })
}