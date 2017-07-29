# HTML书写规范

## 基本格式

+ 使用HTML5标准模式的文档声明`<!DOCTYPE html>`
+ 使用`<meta>`标签，明确字符编码为`UTF-8`
+ 所有元素标签必须使用小写
+ 自闭合标签末尾都不添加斜杠`/`
+ 非自闭合标签必须添加闭合标签
+ 元素属性值全部使用双引号`""`

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <input type="text" value="我是自闭合标签">
  <p>我是非自闭合标签</p>
</body>
</html>
```

## IE 兼容模式

如果主要是在PC端浏览的网页，通过`<meta>`标签来指定IE版本：

```HTML
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

## 为文档添加语言属性

为html元素添加lang属性，设置合适的语言：

```HTML
<!-- 中文 -->
<html lang="zh"></html>

<!-- 英语 -->
<html lang="en"></html>
```

> 小提示：使用[Emmet](https://www.emmet.io/)插件，可以快速生成HTML5标准文档。

## 布尔型属性不赋值

根据HTML5 规范，声明布尔型属性时不需要赋值，所以书写时，统一不赋值：
```HTML
<!-- bad -->
<input type="text" disabled="true">

<!-- good -->
<input type="text" disabled>
```

## 自定义属性以`data-`为前缀

根据HTML5规范，使用`data-`前缀来区分自定义属性和标准属性，如：

```HTML
<div data-pid="3355"></div>
```

## 用于JavaScript操作的DOM选择器，尽量使用`id`

对于需要单个操作的DOM，尽量使用`id`选择器，可以在一定程度上提高效率，并且避免错误。

```HTML
<!-- login.html -->
<input type="text" id="login-name">
<input type="password" id="login-password">

<script>
var loginName = document.getElementById('login-name')
var loginPassword = document.getElementById('login-password')  
</script>
```

## 为重要图片添加 alt 属性

可图片加载失败时，可以显示文字，提高用户体验。

## 为`input`元素指定`type`属性

根据内容类型指定输入框类型，会更加语义化，并且在移动端能获得能友好的输入体验。

```HTML
<input type="tel" placeholder="请输入手机号">
```

## CSS与JavaScript文件引入

+ `<link>`与`<script>`标签的`type`属性可以省略，但`<link>`标签必须添加`rel`属性
+ `<link>`标签放在`<head>`标签里的最下面
+ `<script>`标签放在`<body>`标签里的最下面

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  
  ...
  <link rel="stylesheet" href="xxx">
</head>
<body>

  ...
  <script src="xxx"></script>
</body>
</html>
```

## 尽可能使用语义化标签

尽可能使用语义化标签，使用户在无法加载CSS的情况下也能获得更好的体验，并且开发与维护也能更容易。

```HTML
<!-- bad -->
<div class="list">
  <div class="item"></div>
  <div class="item"></div>
</div>

<!-- good -->
<ul class="list">
  <li class="item"></li>
  <li class="item"></li>
</ul>
```

## 尽量减少标签的数量

编写HTML代码时，尽量避免多余的父元素。
