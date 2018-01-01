import {maparr} from './cmn/com.js'
import oo from'./cmn/oo.js'

var arr1 = [3,4];
var arr2 = [4,5,6];
var newarr = oo.concat(arr1,arr2)
var square = (x) => {
  return x*x
}
var result = maparr(square, newarr)
console.log(result)