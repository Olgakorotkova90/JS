function countBs(N,b){
  let x=0;
  for (i=0; i<=N.length-1;i++){   
      if(N.charAt(i)==b)
      x+=1;     
    }
  return x;
}
console.log(countBs('BBnFFGBBBBB','B'))
