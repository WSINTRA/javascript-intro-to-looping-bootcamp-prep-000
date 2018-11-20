var ar = [];
function forLoop(a){
  for (let i = 0; i < 25; i++) {
  output = `I am ${i} strange loop${i === 1 ? '' : 's'}.`

  a[a.length] = output
    }
return a
}
console.log(forLoop())

function whileLoop(Num){
  while (Num > 0){
    console.log(Num);
    Num -= 1
  }
  return "done"
}
