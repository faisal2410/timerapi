const myfunc=(delay)=>{
console.log(`Hello after ${delay} seconds`)
}

setTimeout(myfunc,5000,"five");
setTimeout(myfunc,10000,"ten");