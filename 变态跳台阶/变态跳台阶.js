// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法。


function jumpFloorII(number)
{
  if(number == 1){
      return 1
  }
  let a = 1
  let ret = 1
  for(let i = 1;i < number;i++){
    ret = 2 * a
    a = ret
  }
  return ret
}


// 时间复杂度为O(n)
 
