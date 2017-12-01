import fetch from '@/utils/fetch'
// ../../static/data/inlineedittable/inlineEditTable.json
export function fetchList(query) {
  return fetch({
    url: './static/data/inlineedittable/inlineEditTable.json',
    method: 'get',
    params: query
  })
}

export function fetchArticle() {
  return fetch({
    url: '/article/detail',
    method: 'get'
  })
}

export function fetchPv(pv) {
  return fetch({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

