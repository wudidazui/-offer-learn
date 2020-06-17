// 大家都知道斐波那契数列，现在要求输入一个整数n，
// 请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
// n<=39  



// 思路:   0 1 1 2 3 5 8 13 21 .....
//当n=0时，f(0) = 0
//当n=1时，f(1) = 1
//当n=k时  f(K) = f(k-1) + f(k-2)\
//用递归的话时间复杂度为O(2^n)
 

function Fibonacci(n)
{
  if(n <= 1){
    return n
  }else{
    var a = 0
    var b = 1
    var ret = 0
    for(var i = 2;i <= n;i++){
      ret = a + b
      a = b
      b = ret
    }
      return ret
  }
}
// 时间复杂度为O(n)

