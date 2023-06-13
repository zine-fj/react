## my-react

### 命令

```js
// 生成项目
create-react-app my-react

// 安装包
npm i

// 运行
npm start
```

### 目录结构

```js
.
├── node_modules // 下载的包
├── public // 公用文件夹
│   ├── index.html // 页面入口
│   ├── ...
├── src
│   ├── components // 公用组件
│   ├── ├── Form // 表单组件
│   ├── ├── public // 公用的头部、底部、中间内容
│   ├── pages // 公用组件
│   ├── ├── ListPage // 列表页面
│   ├── ├── CartPage.js // 购物车页面
│   ├── ├── DetailPage.js // 详情页
│   ├── ├── HomePage.js // 首页
│   ├── ├── LoginPage.js // 登录
│   ├── ├── MinePage.js // 我的
│   ├── App.js // 放置路由集合的入口文件
│   ├── App.test.js //
│   ├── index.js // 页面入口
│   ├── reportWebVitals.js //
│   ├── setupTests.js //
├── .gitignore // 忽略提交的文件
├── package-lock.json //
├── package.json // 项目配置
├── README.md // 项目介绍
```

### 常用写法

#### 点击事件绑定

```js
// 组件式编程
// 写法一
<span onClick={() => clickBack()}>点我</span>

// 写法二
<span onClick={clickBack.bind(this)}>点我</span>

// 函数式编程
constructor(props) {
  this.clickBack = this.clickBack.bind(this);
}
<span onClick={this.clickBack}>点我</span>
```

#### 跳转链接

```js
import { NavLink, Link } from "react-router-dom";

<NavLink
  to="/"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  首页
</NavLink>

<Link to={`/detail?src=${ele}&id=1`}  key={ele}><img src={ele} alt="" /></Link>
```

#### 页面间传参

```js
// 传递参数页
<Link to={`/detail?src=${ele}&id=1`} key={ele}>
  <img src={ele} alt="" />
</Link>;

// 接收参数页（函数式编程）
import { useSearchParams } from "react-router-dom";
export default function DetailPage() {
  const [search] = useSearchParams();
  const imgSrc = search.get("src");
  const id = search.get("id");
}
```

#### 返回上一页

```js
// 需要使用函数式编程
import { NavLink, useNavigate } from "react-router-dom";

const clickBack = () => {
  navigate(-1);
};

<span onClick={clickBack.bind(this)}>{"<"}</span>;
```

#### 函数式编程绑定默认值

```js
function Header(props) {}
Header.defaultProps = {
  hasBack: true,
};
```

## API

1. 狗狗品种列表:
   `https://dog.ceo/api/breed/hound/list`
1. 单个品种下随机 6 张图片：
   `https://dog.ceo/api/breed/hound/${id}/images/random/6`


## 路由
### 下载
```js
npm i react-router-dom
```
### 用法
```js
// index.js
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter>
  <App />
</BrowserRouter>

// App.js
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

<div className="App">
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/list" element={<ListPage />}></Route>
  </Routes>
</div>
```
## redux
### 下载

```js
npm i redux
```

### 用法

```js
import { createStore } from "redux";

// 管理员 reducer
let reducer = function (state = { price: 15000 }, action) {
  switch (action.type) {
    case "borrow":
      let price = action.payload.price;
      return { price: state.price - price };
    // 不能预测的结果，就不管它
    default:
      return state;
  }
};

// 创建仓库 createStore
let store = createStore(reducer);
console.log(store.getState());

// 订阅 subscribe
let xiaoxin = {
  sub() {
    // 订阅
    store.subscribe(function () {
      // 如果钱有变动，就会触发
      console.log("短信通知：", store.getState());
    });
  },
};
xiaoxin.sub();

// 行为: action 借13000
const action = { type: "borrow", payload: {price: 1000} };

setTimeout(() => {
  // 发起请求
  store.dispatch(action);
}, 3000);

setTimeout(() => {
  // 发起请求
  store.dispatch({ type: "borrow", payload: {price: 1000} });
}, 1000);

console.log(store.getState());
```
