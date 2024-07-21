let intervalid
function runtime(){
    let m=Number(document.getElementById('hrs').innerHTML)
    let s=Number(document.getElementById('mins').innerHTML)
    let ms=Number(document.getElementById('secs').innerHTML)
    ms++
    if(ms>99){
        ms=0
        s++
    }
    if(s>59){
        s=0
        m++
    }
    document.getElementById('hrs').innerHTML=padzero(m)
    document.getElementById('mins').innerHTML=padzero(s)
    document.getElementById('secs').innerHTML=padzero(ms)
    console.log(intervalid)
}

function padzero(n){
    return n<10?"0"+n:n
}

function starttimer(){
    if(!intervalid)
       intervalid=setInterval(runtime,10)
    console.log(intervalid)
}

function stoptimer(){
    clearInterval(intervalid)
    intervalid = null
    console.log(intervalid)
}

function resettimer(){
    stoptimer()
    document.getElementById('hrs').innerHTML="00"
    document.getElementById('mins').innerHTML="00"
    document.getElementById('secs').innerHTML="00"
    console.log(intervalid)
}