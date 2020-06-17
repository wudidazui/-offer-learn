// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。


function jumpFloor(number)
{
  if(number < 0){
    return 0
  }else if(number <= 2){
    return number
  }else{
    let a = 1
    let b = 2
    let ret = 0
    for(let i = 3;i <= number;i++){
      ret = a + b
      a = b
      b = ret
    }
    return ret
  }  
}
// 时间复杂度为O(n)
