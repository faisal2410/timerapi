let counter=0;
const myfunc=()=>{
    console.log(`Hello world`);
    counter +=1

    if(counter === 5){
        console.log(`Done`);
        clearInterval(timerId);
    }
}



const timerId=setInterval(myfunc,1000)