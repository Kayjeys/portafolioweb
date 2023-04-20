function suma() {  
    var x,y,suma,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y 
      suma=0; 
      suma=parseFloat(x)+parseFloat(y);  
      text= suma;  
    }  
    document.getElementById("resultado").innerHTML = text;  
}  

function resta() {  
    var x,y,resta,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y 
      resta=0; 
      resta=parseFloat(x)-parseFloat(y);  
      text= resta;  
    }  
    document.getElementById("resultado").innerHTML = text;  
}  

function multi() {  
    var x,y,multi,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y 
      multi=0; 
      multi=parseFloat(x)*parseFloat(y);  
      text= multi;  
    }  
    document.getElementById("resultado").innerHTML = text;  
}  

function divi() {  
    var x,y,divi,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y 
      divi=0; 
      divi=parseFloat(x)/parseFloat(y);  
      text= divi;  
    }  
    document.getElementById("resultado").innerHTML = text;  
}  