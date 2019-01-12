
let x;
let y;
let z='';
let size=8;

for (y=1; y<=8; y++){
  if (y%2!=0){
    for(x=' '; x.length<8; x+='#'+' '){}   
    }
   else{
    for(x=' '; x.length<8; x+=' '+'#' ){}   
  }
z+=x;
z+='\n'; 
}
 console.log('\n'+z)