.
├── app             用来存放原始数据和写的JavaScript模块
│   ├── app.js      写的模块，依据CommonJs规范导出这个模块
│   └── main.js     一个组件，将我们写的一些代码模块返回并插入到页面中
├── common          用来存放之后供浏览器读取的文件（包括使用webpack打包生成的js文件以及一个index.html文件）
│   └── index.html  主入口，需要设置根目录并且将打包后的文件导入
└── tree.md

2 directories, 4 files
