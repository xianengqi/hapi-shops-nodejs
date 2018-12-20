### 仿网易严选 后端接口布局
### 项目技术选型基于nodejs：[Hapi](https://hapijs.com/api)+[Sequelize](https://sequelize.readthedocs.io/en/v3/)+[Swagger生成接口文档](https://swagger.io/)

```js
├── LICENSE
├── README.md
├── README1.md
├── app.js                   # 项目入口文件
├── config                   # 项目配置目录 
│   └── index.js             # 配置项目中的配置信息
├── models                   # 数据库 model
├── package-lock.json
├── package.json             # JS 项目工程依赖库
├── plugins                  # 插件目录
│   ├── hapi-pagination.js   # 分页配置
│   └── hapi-swagger.js      # swagger生成api文档配置
├── routes                   # 路由目录
│   ├── address.js           # 收货地址相关接口
│   ├── brand.js             # 首页数据相关接口
│   ├── cart.js              # 购物车相关接口
│   ├── category.js          # 分类相关接口
│   ├── collect.js           # 收藏相关接口
│   ├── feedback.js          # 意见反馈相关接口
│   ├── goods.js             # 商品相关接口
│   ├── hello-hapi.js        # 测试接口
│   ├── home.js              # 首页接口
│   ├── order.js             # 订单相关接口
│   ├── search.js            # 搜索相关接口
│   └── topic.js             # 专题相关接口
└── utils                    # 工具类相关目录

5 directories, 21 files
```