const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v){
{
  let sum= 0;
  let degreeList= mtrx(v-1);

  console.log(degreeList)
  for (let i=0 <= degreeList.length, i++)
}
sum+= degreeList[i]
}
return sum;

function degreecentrality(){

}

//Challenge

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));
