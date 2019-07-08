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
  },
  // 运营管理 - 创建合同
  {
    fsUrl: `contract-save`,
    methond: 'post',
    reqUrl: '/api/om/contract/save'
  },
  // 运营管理 - 根据条件搜索合同-根据时间显示合同到期合同
  {
    fsUrl: `contract-list`,
    methond: 'get',
    reqUrl: '/api/om/contract/list'
  },
  // 运营管理 - 根据时间显示合同到期监控图
  {
    fsUrl: `contract-chart`,
    methond: 'get',
    reqUrl: '/api/om/contract/chart'
  },
  // 运营管理 - 查看合同详情
  {
    fsUrl: `contract-detail`,
    methond: 'get',
    reqUrl: '/api/om/contract/detail'
  },

]
