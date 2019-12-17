export var debounce=  (fn,delayTime)=>{
    console.log(fn)
    var timeEd;
    console.log(2)
    return async function(){
        // var context=this
        // var args=arguments;
        console.log(timeEd)
        if(timeEd) clearTimeout(timeEd)
        timeEd =  setTimeout(()=>{
            // console.log(fn(context,args))
            // fn(context,args)
            fn().then(res=>{
                console.log(res)
            })
        },delayTime)
    }
}