
var a="";
var screen=document.getElementById("screen");
var x=document.getElementsByClassName('number');
for(var i=0;i<x.length;i++){   
 var t;   
x[i].addEventListener('mouseover',function(){
    t=this.style.backgroundColor;   
    this.style.backgroundColor="yellow";
});
x[i].addEventListener('mouseout',function(){
    this.style.backgroundColor=t;
});
}
document.getElementById("1").addEventListener('click',function(){
    a=a+'1';
    screen.innerHTML=a;
});
document.getElementById("2").addEventListener('click',function(){
    a=a+'2';
    screen.innerHTML=a;
});
document.getElementById("3").addEventListener('click',function(){
    a=a+'3';
    screen.innerHTML=a;
});
document.getElementById("4").addEventListener('click',function(){
    a=a+'4';
    screen.innerHTML=a;
});
document.getElementById("5").addEventListener('click',function(){
    a=a+'5';
    screen.innerHTML=a;
});
document.getElementById("6").addEventListener('click',function(){
    a=a+'6';
    screen.innerHTML=a;
});
document.getElementById("7").addEventListener('click',function(){
    a=a+'7';
    screen.innerHTML=a;
});
document.getElementById("8").addEventListener('click',function(){
    a=a+'8';
    screen.innerHTML=a;
});
document.getElementById("9").addEventListener('click',function(){
    a=a+'9';
    screen.innerHTML=a;
});
document.getElementById("0").addEventListener('click',function(){
    a=a+'0';
    screen.innerHTML=a;
});
document.getElementById("AC").addEventListener('click',function(){
    a="";
    screen.innerHTML=a;
});
document.getElementById(".").addEventListener('click',function(){
    a=a+'.';
    screen.innerHTML=a;
});
document.getElementById("+").addEventListener('click',function(){
    a=a+'+';
    screen.innerHTML="";
});
document.getElementById("-").addEventListener('click',function(){
    a=a+'-';
    screen.innerHTML="";
});
document.getElementById("/").addEventListener('click',function(){
    a=a+'/';
    screen.innerHTML="";
});
document.getElementById("*").addEventListener('click',function(){
    a=a+'*';
    screen.innerHTML="";
});
document.getElementById("=").addEventListener('click',function(){
    if(a.length==0){
        screen.innerHTML="Enter a operand";
    }else{
    a=eval(a);
    screen.innerHTML=a;
    window.alert("Your ans is "+a);
    }
});

