# skeleton
vue spa skeleton

1. 下载或clone项目后，切换置项目根目录 npm install 安装依赖

2. 运行 npm run buildSkeleton 生成骨架图内容（skeleton.json）

3. 执行 node ./src/skeleton 将步骤2中的结果注入index.html
(注：需要在模版文件index.html中加入占位符 <!--vue-ssr-outlet-->)
