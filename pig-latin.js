function translatePigLatin(str) {
  console.log("Input = "+str);
  let vowel = false; 
  let consonant = false;

  switch (str[0]){
    case 'a': case 'e': case 'i': case 'o': case 'u': vowel = true;
    default: consonant = true;
  }

  if (vowel){
    str += 'way';
  } else {
    // no vowel case
    if ( !str.includes('a') && !str.includes('e') && !str.includes('i') &&
          !str.includes('o') && !str.includes('u')){
        console.log("no vowels!");
        str += "ay";

    } else {
    // consonants
        let x =0;
        for (x = 0; x < str.length; x++){
          if ( str[x] =='a' || str[x]=='e' || str[x]=='i'||str[x]=='o'||str[x]=='u'){break;}
        } 

      console.log("x="+x);
      let tmp = str.substr(0,x);
      let s = str.slice(x);
      s += tmp;
      s += "ay";
      str = s;
    }
  }

  console.log("str="+str);
  return str;
}

translatePigLatin("consonant");
translatePigLatin("rhythm");
translatePigLatin("glove");