function pairElement(str) {
    let result = [];

  for (let i =0; i < str.length; i++){
    switch (str[i]){
      case 'A':
        result.push(['A','T']); break;
      case 'T':
        result.push(['T','A']); break;
      case 'G':
        result.push(['G','C']); break;
      case 'C':
        result.push(['C','G']); break;
    }
  }

  console.log(result);
  return result;
}

pairElement("GCG");
