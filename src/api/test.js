import request from '@/utils/request'

const base_url = ''

export function queryPage(data) {
  return request({
    url: base_url + '/select',
    method: 'get',
    data
  })
}




