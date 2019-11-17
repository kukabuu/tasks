/* 
	Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
				F(n) * F(n+1) = prod.

	Your function productFib takes an integer (prod) and returns an array:
				[F(n), F(n+1), true]

	If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prod you will return
				[F(m), F(m+1), false]. 
	F(m) being the smallest one such as F(m) * F(m+1) > prod. 
*/
//Soluiton 1
function productFib(prod){
  let prev = 1,
      curr = 1;
    
  const fibonacci = () => {
    while (prev * curr < prod) {
      let temp = curr;
      curr = prev + curr;
      prev = temp;
    };
  };
  
	fibonacci();
	
  return [prev, curr, prev*curr === prod];
}


productFib(4895) //[55, 89, true]
productFib(5895) //[89, 144, false]
productFib(74049690) //[6765, 10946, true]
productFib(84049690) //[10946, 17711, false]
productFib(193864606) //[10946, 17711, true]
productFib(447577) //[610, 987, false]
productFib(602070) //[610, 987, true]
