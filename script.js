
function sherryjs(){  

Shery.mouseFollower();
Shery.makeMagnet("#nav i")
Shery.makeMagnet("#nav h1")
Shery.makeMagnet("#footer i")


for(let i =0; i<10;i++){
    console.log(i)
}
};

sherryjs();


let nav = 0;

// let a = document.querySelector("#nav")
let b = document.querySelector("#nav h1, #nav i")
let c = document.querySelector("#nav-prt2 h5")

b.addEventListener("click",function(){
    if(nav==0){
    c.style.display = "inline"
    nav = 1
    }else{
        c.style.display = "none"
        nav = 0
    }
    // c.style.flexDirection = "column"
})






