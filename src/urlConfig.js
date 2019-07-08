module.exports = [
  {
    fsUrl: `src/json/`,
    methond: 'get',
    reqUrl: '/api/query_data',
    useQuery: true
  }, {
    fsUrl: `projectList`,
    methond: 'get',
    reqUrl: '/api/project/list'
  }, {
    fsUrl: `chainDateList`,
    methond: 'get',
    reqUrl: '/asset2/api/project/chainDateList'
  }, {
    fsUrl: `projectSearch`,
    methond: 'get',
    reqUrl: '/asset2/api/project/get'
  }
]
