function decrement(){
    const x= document.querySelector("h1");
    const y= Number(x.innerText);
    const z= y-1;
    x.innerText=z;
    if((z%5==0) &&(z!=0)){
        document.querySelector("h1").style.color='red';
    }
    else{
        document.querySelector("h1").style.color='black';
    }
}
function increment(){
    const x= document.querySelector("h1");
    const y= Number(x.innerText);
    const z= y+1;
    x.innerText=z;
    if((z%5==0) &&(z!=0)){
        document.querySelector("h1").style.color='red';
    }
    else{
        document.querySelector("h1").style.color='black';
    }
}