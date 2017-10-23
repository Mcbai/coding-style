import {maparr} from './cmn/com.js'

var arr2 = [4,5,6];
var square = function (x) {
  return x*x
}
var result = maparr(square, arr2)
console.log(result)