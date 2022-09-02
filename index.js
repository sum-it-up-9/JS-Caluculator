


var buttons=document.getElementsByTagName("button");

var resultDisplay=document.getElementById("result-display");
var input1=0;
var input2=0;
var operator="";

for(var i=0;i<buttons.length;i++){
  buttons[i].addEventListener('mouseover', function(){
        var value=this.getAttribute('data_value');
        if(value === 'AC' || value=== "=" || (value === '.') || (value === '+/-') || (value === '0') || value == '%' || value == '/' || value == '+' || value == '-' || value == '*' )
        this.style.backgroundColor = "green";
        else
        this.style.backgroundColor = "lightgrey";
    });

    buttons[i].addEventListener('mouseout', function(){
      var value=this.getAttribute('data_value');
      if((value === "AC") ||  (value === "%") || (value === '/') || (value === '+') || (value === '-') || (value === '*') || (value === '+/-') || (value=== "=")){
        this.style.backgroundColor = "#c14444";
      }
      else{
        this.style.backgroundColor = "white";
      }
     
  });
 

    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data_value');
        if(value==="*" || value==="/" || value==="+" || value==="-"){
            //if alredy has operator
            if(operator !== ""){
                input1=Math.round(eval(input1 + operator + input2) * 100) / 100;
                input2=0;
                resultDisplay.innerText=Math.round(input1 * 100) / 100;
                operator=value;    
            } 
            else{
              operator=value;
            }  
        }
        else if(value=="%"){
            if(operator!==""){
              if(input2!==0){
                input2=Math.round(input2) / 100;
                input1=Math.round(eval(input1 + operator + input2) * 100) / 100;
                resultDisplay.innerText=Math.round(input1 * 100) / 100;
                input2=0;
                operator="";
              }    
            }
            else{
              resultDisplay.innerText=Math.round(input1) / 100;
              operator="";
              input2=0;
            }
            
        }
        else if(value=== "="){
          if(operator!==""){
            input1=Math.round(eval(input1 + operator + input2) * 100) / 100;
            resultDisplay.innerText=input1;
            input2=0;
            operator=""; 
          }
            

        }
        else if(value==="AC"){
            operator="";
            input2=0;
            input1=0;
            resultDisplay.innerText="";
        }
        else{
            if(operator!==""){
                if(input2!==0){
                    input2=input2+value;
                }
                else{
                    input2=value;
                }
                resultDisplay.innerText=input2;   
            }
            else{
                if(input1!==0){
                    input1=input1+value;
                }
                else{
                    input1=value;
                }
                resultDisplay.innerText=input1;
            }
    }
    });
  }
  
