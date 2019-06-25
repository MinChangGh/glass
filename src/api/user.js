import request from '@/utils/request'

export function editUserInfo(data) {
  return request({
    url: 'Admin/User/edit',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: 'Admin/User/logout',
    method: 'post'
  })
}
