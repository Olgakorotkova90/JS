
function range(a,b){
  let x=[];
  
  for(i=0; a<=b; i++){     
    x[i]=a;
    a+=1;
   }
  return x;
}
console.log(range(2,5))

function range1(a,b){
  let x=[]; 
  let s=0;
  for(i=0; a<=b; i++){     
    x[i]=a;
    s+=a
    a+=1;
    ;
   }
  return s;
}
console.log(range1(1,10))


function range3(a,b,step){
  let x=[]; 
  
    if(step>0){
      for(i=0; a<=b; i++){     
    x[i]=a;
    a=a+step;
     }
    }
      else{
        for(i=0; a>b-1; i++){     
      x[i]=a;
      a=a+step;
    }
   }
  return x;
}
console.log(range3(10,2,-2))
