#### 启动步骤

1. 搭建好mongo数据库
2. 打开insertData，执行 node index.js
3. 使用可视化工具查看数据库插入的数据
4. 注释掉insertData,打开queryData,执行 node index.js
5. 使用可视化工具查看数据库插入的数据
6. 其它接口类似以上步骤。

#### mongo命令

```js
1. 进入数据库
无密码连接，直接 mongo 回车
有密码连接， mongo -u admin -p admin --authenticationDatabase=admin

2. 查看数据库
show dbs;

3. 进入数据库
use 数据库名；

4. 查看表
show tables;

5. 查看表
db. 表名称.find({})

6. 使用robot 3T或者NoSQLBooster可视化工具建表;查表

右键数据库名 -> 选择RUN SQL Query -> 输入指令db.表名.insert([{"number":0,"hash":"","bool":true}])

右键数据库名 -> 选择RUN SQL Query -> 输入指令db.表名.find({})
```



