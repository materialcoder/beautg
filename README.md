## 初始化项目

```shell
npx create-react-app demo template --typescript
```

**开启es-lint**

根目录下创建 `.vscode/setting.json`

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```

**样式解决方案**

- inline-CSS
- CSS-in-JS
- Styled Component
- Sass/Less(√)
  ```shell
  cnpm install node-sass -S
  ```

**样式系统文件结构**

```js
styles/
  _variables.scss(各种变量以及可配置设置)
  _reboot.scss(基础样式重置)
  _mixins.scss(全局 mixins)
  _functions.scss(全局 functions)
Components/
  Button/
    style.scss(组件单独的样式)
```

**组件库的色彩体系**

- 系统色板 基础色板 + 中性色板 （http://zhongguose.com）
- 产品色板 品牌色 + 功能色

**组件库样式变量分类**

- 基础色彩系统
- 字体系统
- 表单
- 按钮
- 边框和阴影
- 可配置开关

## Button 组件

**需求分析**

- 不同的button type
  - primary
  - default
  - danger
  - link button
- 不同的size
  - normal(middle)
  - small
  - large
- disabled 状态

**使用方法**

```js
<Button
  size="lg"
  type="primary"
  disabled
  href=""?
  className=""?
  autoFocus=""?
>
  beautg Button
</Button>
```

**实现**

安装 `classnames` 用来方便添加 `className`

```shell
cnpm install classnames -S
cnpm install @types/classnames -S
```

## Alert 组件

**需求分析**

- 不同的alert type
  - default
  - primary
  - danger
  - warning
- 描述信息 description string (可选)
- 是否可关闭 closable boolean (可选)
- 关闭时触发事件 onClose function (可选)
- 关闭动画（暂未实现）

**使用方法**

```js
<Alert title="This is Default" onClose={() => {console.log('closed')}} />
<Alert title="This is Success" type={AlertType.Success} />
<Alert title="This is Warning" description="this is a long description" type={AlertType.Warning} />
<Alert closable={false} title="This is Danger" type={AlertType.Danger} />
```

## 图标 react-fontawesome

```shell
cnpm install --save @fortawesome/fontawesome-svg-core
cnpm install --save @fortawesome/free-solid-svg-icons
cnpm install --save @fortawesome/react-fontawesome
```

## 动画 React Transition Group

```shell
cnpm install react-transition-group --save
cnpm install --save @types/react-transition-group
```

## storybook

[storybook](https://storybook.js.org)

```shell
npx -p @storybook/cli sb init
```

> 科学上网或者使用淘宝镜像安装，否则可能安装失败

```shell
# 设置全局npm镜像
npm config set registry https://registry.npm.taobao.org
```

> 使用CRA创建的项目，`storybook` 可以直接重用CRA对 `typescript` 的配置，不需要进行额外配置

**Addon**

- addon-info
- react-docgen

## jsdoc

[jsdoc](https://devdocs.io/jsdoc)

## 单元测试

`jest`

[testing-library](https://testing-library.com)

## npm link 测试

在被引用的库中执行：
```shell
npm link
```

在需要引用的项目中执行：
```shell
npm link xxx
```

## npm 上传

> npm 不能使用镜像，否则会登录不上

```shell
# 设置会原镜像
npm config set registry https://registry.npmjs.org
```

**注册或登录**
```shell
npm adduser
npm whoami  # 查看是否登陆
```

**版本号**

主版本号.次版本号.修订号

- 主版本号 当做了不兼容的API修改
- 次版本号 当做了向下兼容的功能性新增
- 修订号 当做了向下兼容的问题修正

**发布**

```shell
npm publish
```

> 解决用户环境和包中react版本不同的问题
- 将 react 和 react-dom 放入 devDependencies中
- 在 peerDependencies 中加入版本提示

## 代码规范检查

**代码规范检查**

```shell
eslint --ext js,ts,tsx src --max-warnings 5
```

**代码测试**

```shell
cross-env CI=true react-scripts test
```

## CI/CD

**CI**

- 频繁的将代码集成到主干（master）
- 快速发现错误
- 房主分支答复偏离主干

**CD**

持续交付、持续部署

- 频繁的将软件的新版本，交付给质量团队或者用户
- 代码通过评审后，自动部署到生产环境

**Travis CI**

[Travis](https://travis-ci.com)

## 小工具

- rimraf 兼容Windows和iOS，相当于 rm -rf
- cross-env 兼容Windows和iOS，跨平台设置环境
- husky 支持pre-commit

## 其他链接

[reacthooks](https://usehooks.com/)
[typescript](https://typescriptlang.org)
