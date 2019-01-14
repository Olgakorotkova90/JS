
let x;
let y;
let z='';
let size=8;

for (y=1; y<=size; y++){
  if (y%2!=0){
    for(x=''; x.length<size; x+='#'+' '){}   
    }
   else{
    for(x=''; x.length<size; x+=' '+'#' ){}   
  }
z+=x;
z+='\n'; 
}
 console.log('\n'+z)
