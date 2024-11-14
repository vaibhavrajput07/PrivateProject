let inp1=document.querySelector(".i1");
let inp2=document.querySelector(".i2");
let btn=document.querySelector(".a");



btn.addEventListener("click",function(){
    let a=inp1.value;
    console.log(a);
    if(inp1.value==0 || inp2.value==0){
        alert("please enter all fields");
        
        
        console.log("enter the values");
    }
    else{
        console.log("successful");
    }
})
    // console.dir(inp1.value);
