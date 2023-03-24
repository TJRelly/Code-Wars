//Clumsy solution using nested loops
function explode(s) {
    let output = []
    s.split('').forEach(num => {
      for (let i = 0; i < num; i++){
        output.push(num)
        }  
      } 
    )
    return output.join('');
  }
  
//Cleaner solution using repeat method and arrow function
let explode = (s) => s.split('').map(num => num.repeat(num)).join('')