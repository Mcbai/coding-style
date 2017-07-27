# CSS书写规范

## 基本格式

+ 每个选择器占一行
+ `{` 前插入一个空格，并且与最后一个选择器同行
+ `}` 独占一行
+ 每个属性的`:`后都跟一个空格
+ 每一段样式的最后一行声明也要加`;`
+ `rgb()` `rgba()`等属性值的逗号后都插入一个空格
+ 属性值中，小数点前的0省略
+ 属性值若是0，则后面不带单位
+ 能缩写值，都尽量缩写
+ 凡是需要使用引号的地方，都使用双引号`""`
+ `url`引用中的引号不能省略，如`background-image: url("")`
+ 当一个属性有多个属性值时，以逗号 , 分隔属性值，每个逗号后添加一个空格，当单个属性值过长时，每个属性值独占一行。
+ 每一个样式声明块后，都保留一个空行

```CSS
/* bad */
html,body,.container{
  width:960px;
  height:100px;
  border:0px;
  margin: 10px 50px 10px 50px;
  background-color:rgba(105,105,105,0.5);
  background-image:url(http://img3.imgtn.bdimg.com/it/u=1536504446,1433824309&fm=26&gp=0.jpg);
  color:#ffffff
}
a[href~='get'] {
  color:#ccc;
  text-decoration:none;
}
.box {
  background: linear-gradient(135deg, deeppink 25%, transparent 25%) -50px 0, linear-gradient(225deg, deeppink 25%, transparent 25%) -50px 0, linear-gradient(315deg, deeppink 25%, transparent 25%), linear-gradient(45deg, deeppink 25%, transparent 25%);
}
```

```CSS
/* good */
html,
body,
.container {
  width: 960px;
  height: 100%;
  border: 0;
  margin: 10px 50px;
  background: url("http://img3.imgtn.bdimg.com/it/u=1536504446,1433824309&fm=26&gp=0.jpg") rgba(105, 105, 105, .5);
  color: #fff;
}

a[href~="get"] {
  color: #ccc;
  text-decoration: none;
}

.box {
  background:
      linear-gradient(135deg, deeppink 25%, transparent 25%) -50px 0,
      linear-gradient(225deg, deeppink 25%, transparent 25%) -50px 0,
      linear-gradient(315deg, deeppink 25%, transparent 25%),
      linear-gradient(45deg, deeppink 25%, transparent 25%);
}
```
## 禁止使用id选择器
在书写样式时，禁止使用id选择器，因为其优先级太高，覆盖样式容易造成麻烦。

## 选择器禁止超过两层

在使用后代选择器、子代选择器、兄弟选择器等，禁止超过两层

```CSS
/* bad */
.news li a {
  color: #ff2;
  text-decoration: none;
}
```

```CSS
/* good */
.news-item-a {
  color: #ff2;
  text-decoration: none;
}
```

## 属性声明顺序

在声明样式属性时，按照chrome开发者工具里的元素布局模型，从里到外的顺序书写，依次是：
1. 盒模型
2. 定位
3. 文字排版
4. 其它

```CSS
div {
  /* 盒模型 */
  box-sizing: border-box;
  display: block;
  float: left;
  width: 200px;
  height: 200px;
  padding: 10px;
  background: url("xx") no-repeat;
  border: 1px solid #ccc;
  border-radius: 50%;
  box-shadow: 1px 1px 1px #ccc;

  /* 定位 */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  /* 文字排版 */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #f23;
  text-indent: 2em;

  /* 其它 */
  transform: rotate(45deg);
  opacity: .5;
}
```

## 除选中状态的元素外，禁止使用`!important`

除了类似于导航或者tab等按钮的选中状态外，其余的选择器里的样式都禁止使用`!important`。



























