var uniqueInOrder=function(iterable){
    let res=[]
    let arr=iterable

    if(typeof(iterable)==='string'){
        arr=iterable.split('')
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==arr[i+1])res.push(arr[i])

    }
    return res
}