const factorial = (n)=> {
    if (n < 0){
        return -1
    }else if(n === 0){
        return 1
    }else{
        return (n* factorial(n-1))
    }
}

const fibo = (n) => {
  let x = 0;
  let y = 0;
  let z = 1;
  while (n-1 >0){
    x = y;
    y = z;
    z = x + y;
    n -=1;
  }
    
  return z
};
console.log(fibo(10));