function convertHTML(str) {
  // &colon;&rpar;
  let s = [];

  for (let c of str){
    switch (c){
      case '&': s += "&amp;"; break;
      case '<': s += "&lt;"; break;
      case '>': s += "&gt;"; break;
      case '"': s += "&quot;"; break;
      case '\'': s+= "&apos;"; break;
      default: s += c; break;
    }
  }
  console.log(s);
  return s;
}

convertHTML("Dolce & Gabbana");
