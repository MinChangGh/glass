import request from '@/utils/request'

export function getModuleThree(data) {
  return request({
    url: 'Mall/Home/ModuleThree',
    method: 'post',
    data
  })
}