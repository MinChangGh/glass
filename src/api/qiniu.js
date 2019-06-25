import request from '@/utils/request'
import axios from 'axios'

export function getToken() {
    return request({
        url: '/Admin/Upload/token',
        method: 'get'
    })
}

export function upload(action, uptoken, params, config) {
    const headers = Object.assign({}, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }, config);
    const formData = new FormData()
    formData.append('file', params.file)
    formData.append('token', uptoken)
    formData.append('key', params.keyname)
    return axios.post(action, formData, headers)
}
