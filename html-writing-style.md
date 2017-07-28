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

## 尽量减少标签的数量

编写HTML代码时，尽量避免多余的父元素。