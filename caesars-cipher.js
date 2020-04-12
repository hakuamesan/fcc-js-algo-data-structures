function rot13(str) { // LBH QVQ VG!
  console.log("str="+str);

  let res=[];

  for (let i=0; i < str.length; i++){
    switch (str[i]){
      case 'A': res += 'N'; break;
      case 'B': res += 'O'; break;
      case 'C': res += 'P'; break;
      case 'D': res += 'Q'; break;
      case 'E': res += 'R'; break;
      case 'F': res += 'S'; break;
      case 'G': res += 'T'; break;
      case 'H': res += 'U'; break;
      case 'I': res += 'V'; break;
      case 'J': res += 'W'; break;
      case 'K': res += 'X'; break;
      case 'L': res += 'Y'; break;
      case 'M': res += 'Z'; break;
      case 'N': res += 'A'; break;
      case 'O': res += 'B'; break;
      case 'P': res += 'C'; break;
      case 'Q': res += 'D'; break;
      case 'R': res += 'E'; break;
      case 'S': res += 'F'; break;
      case 'T': res += 'G'; break;
      case 'U': res += 'H'; break;
      case 'V': res += 'I'; break;
      case 'W': res += 'J'; break;
      case 'X': res += 'K'; break;
      case 'Y': res += 'L'; break;
      case 'Z': res += 'M'; break;
      default: res += str[i];
    }
  }
  console.log("res="+res);

  return res;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
