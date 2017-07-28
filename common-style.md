# 通用规范

## 文件命名

文件名统一使用小写英文单词，多个单词之间用`-`分隔，不用驼峰命名，如：`home-logo.png` `about-us.html`。

## 统一使用`tab`键缩进，大小为2个空格大小

使用空格键缩进太麻烦，所以统一使用`tab`键缩进，不过要将编辑器的`tab`键缩进大小设置为两个空格大小。

## 所有业务代码文件必须拥有文件头注释

文件顶部必须包含文件注释，一方面是尊重劳动成果，另一方面方便在需要时快速定位责任人，这在多人合作的项目中尤其重要。格式如下：

```CSS
/*
 * @Name: 文件名或模块名 /*
 * @description: 对于此文件的用途等描述 /*
 * @Author: 该文件创建人
 * @Date: 文件创建时间
 * @Last Modified by:   最近一次文件修改人 
 * @Last Modified time: 最近一次文件修改时间
 */

html,
body {
  height: 100%;
}
```

> 当然，我们并不用每次都手动去添加修改这个文件头注释，大家可以参考[此vscode插件](https://marketplace.visualstudio.com/items?itemName=mikey.vscode-fileheader)。

## 