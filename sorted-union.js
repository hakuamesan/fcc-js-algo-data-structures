function uniteUnique(arr) {
  let a = [];

  for (let i=0; i < arguments.length; i++) {
    
    for (let j = 0; j < arguments[i].length; j++){
      if (!a.includes(arguments[i][j])){
        a.push(arguments[i][j]);
      }
    }
  }

  console.log(a);

  return a;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
