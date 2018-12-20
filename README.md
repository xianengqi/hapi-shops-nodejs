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

# 部分效果展示

### 1.首页展示和专题页效果

![](https://user-gold-cdn.xitu.io/2018/8/27/165793588dd8808f?w=323&h=571&f=gif&s=3649872)
![](https://user-gold-cdn.xitu.io/2018/8/25/165717735a9e3c60?w=327&h=573&f=gif&s=3983502)

### 2、分类页面，分类子页面以及搜索功能、搜索列表、历史记录、模糊搜索提示

![](https://user-gold-cdn.xitu.io/2018/8/25/1657185090f5d3cd?w=327&h=573&f=gif&s=884918)
![](https://user-gold-cdn.xitu.io/2018/8/25/1657188bf2746d85?w=327&h=573&f=gif&s=585295)

### 3、购物车功能添加购物车,单选多选,删除和商品收藏功能

![](https://user-gold-cdn.xitu.io/2018/8/25/165719656d9bdb5b?w=327&h=573&f=gif&s=1979300)
![](https://user-gold-cdn.xitu.io/2018/8/25/165719e76bd00f05?w=327&h=573&f=gif&s=1770550)

### 4、地址管理

![](https://user-gold-cdn.xitu.io/2018/8/25/165719e2d9b28ee1?w=327&h=573&f=gif&s=611343)
