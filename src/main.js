// utils function
const PI = Math.PI

Rand=a=>Math.random()*a
RandInt=a=>Rand(a)|0;
RandIntBetween=(a,b)=>a+RandInt(b-a+1);
Distance=(a,b)=>Math.hypot(a,b);
Max=(a,b)=>a>b?a:b;
Min =(a,b)=>(a<b)?a:b;

localSet=(e,a)=>l.setItem(e,a)
localGet=e=>l.getItem(e)

Continue=_=>{

}

Record=_=>{

}
Set=_=>{

}

let lastUpdate = performance.now();
Update=_=>{
    const now = performance.now();
    const deltaMs = now - lastUpdate;
    const delta = deltaMs / 1000;
    lastUpdate = now;
}
MainLoop=_=>{
    UI()
    
    requestAnimationFrame(MainLoop)
}

// inputs 
// Input
window.addEventListener("blur", e => console.log(e));
window.addEventListener("focus", e => console.log(e));

canvas.addEventListener("mousedown", e => console.log(e));
canvas.addEventListener("mouseup", e => console.log(e));

canvas.addEventListener("touchstart", e => console.log(e));
canvas.addEventListener("touchend", e => console.log(e));

onkeydown=e=>{
    const i = e.key

    console.log(e)
}
onkeyup=e=>{
    const i = e.key

    console.log(e)
}

// Canvas resizing
const resize = () => {
    const unit = 32;
    const size = Min((Min(window.innerWidth, window.innerHeight) / unit)|0, 24);
    canvas.width = size * unit;
    canvas.height = window.innerHeight-50;
    ctx.imageSmoothingEnabled = false;
};
window.addEventListener("resize", resize);
resize()
MainLoop()