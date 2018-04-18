import http from './helper'
export const getSelection = () => http.get('3/sections')
// 最新消息
export const getLatest = () => http.get('4/news/latest')
// 消息详情
export const getNewDetails = (id) => http.get(`4/news/${id}`)

export default {
  getSelection,
  getLatest,
  getNewDetails
}
