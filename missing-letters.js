function fearNotLetter(str) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  
  let start = alphabets.indexOf(str[0]);
  let missing;


  for (let i = start, j=0; i < alphabets.length; i++,j++){
    if ( str[j] != alphabets[i]){ 
      missing = alphabets[i]; 
      break;
    }
  }

  console.log(missing);
  return missing;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno")
fearNotLetter("stvwx");
fearNotLetter("bcdf")
fearNotLetter("abcdefghijklmnopqrstuvwxyz")
