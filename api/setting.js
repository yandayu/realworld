import { request } from '@/plugins/request'

export const updateUser = (data) => {
    return request({
        method: 'PUT',
        url: '/api/user',
        data
    })
}
