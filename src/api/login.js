import request from '@/utils/request'

export function bindingToErp(data) {
  return request({
    url: 'Mall/Login/login',
    method: 'post',
    data
  })
}

export function loginByUsername(token) {
  return request({
    url: 'Mall/User/info',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: 'Mall/User/info',
    method: 'post'
  })
}

