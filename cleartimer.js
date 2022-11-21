const myfunc=()=>{
    console.log(`You will not see this one`)
}

// const timerid=setTimeout(myfunc,0);
// clearTimeout(timerid);

// const timerid=setImmediate(myfunc);
// clearImmediate(timerid);

const timerId=setInterval(myfunc,delay);
clearInterval(timerId);
