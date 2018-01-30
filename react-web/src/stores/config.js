let CONFIG = {}
if(process.env.NODE_ENV == 'production'){
  CONFIG = {
    env: true,
    baseURL: window.ServerBaseUrl ? window.ServerBaseUrl : process.env.SERVER,
    metadb: {
      saveEntity: 'ficloud/md/saveEntity', //保存接口
      metaDelete: '/ficloud/md/delete', // 删除接口
      qryEntity: 'ficloud/md/qryEntity', // 查询接口
      initgrid: 'ficloud/ficloud_pub/initgrid', // 获取结构
      qrymdtree: 'ficloud/md/qrymdtree', //获取树数据
      getByid2: 'ficloud/md/get', //实体查询
      getByid:'ficloud/md/qryEntity', //实体查询
    },
    refers: {
      refersUrl: 'ficloud/refbase_ctr/queryRefJSON'
    }
  }
}else if(process.env.NODE_ENV == 'zhangtch'){
  CONFIG = {
    env: true,
    baseURL: 'http://127.0.0.1/',
    metadb: {
      saveEntity: 'meta/saveEntity', //保存接口
      metaDelete: 'meta/delete', // 删除接口
      initgrid: 'meta/initgrid', // 获取结构
      qrymdtree: 'meta/qrymdtree', //获取树数据
      getByid: 'meta/getbyid', //实体查询
    },
    refers: {
      refersUrl: 'meta/queryRefJSON'
    }
  }
}else{
  CONFIG = {
    env: false,
    baseURL: window.ServerBaseUrl ? window.ServerBaseUrl : process.env.SERVER,
    metadb: {
      getData: 'db/metadb.json',
      saveEntity: 'ficloud/md/saveEntity', //保存接口
      metaDelete: 'db/metadb/delete.json', // 删除接口
      initgrid: 'db/metadb/initgrid.json', // 获取结构
      initgrid2: 'db/metadb/initgrid2.json', // 获取结构
      qrymdtree: 'db/metadb/qrymdtree.json', //获取树数据
      getByid: 'db/metadb/getbyid.json', //实体查询
    },
    refers: {
      refersUrl: 'db/metadb/queryRefJSON.json'
    }
  }
}
// CONFIG.baseURL = window.ServerBaseUrl ? window.ServerBaseUrl : process.env.SERVER
// 是否是开发环境
// CONFIG.env = process.env.NODE_ENV == 'production'
export default CONFIG