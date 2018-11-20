var ar = [];
function forLoop(a){
  for (let i = 0; i < 26; i++) {
  output = `I am ${i} strange loop${i === 1 ? '' : 's'} `

  ar[ar.length] = output
    }
return ar
}
console.log(forLoop())
