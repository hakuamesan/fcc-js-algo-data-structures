function palindrome(str) {
  // Good luck!
  console.log("orig:" + str);
  let s = str.replace(/,|[_]|\W|[#$%^&*()]/gi,"");
  let ls = s.toLowerCase();
  console.log("special:" + ls);
  let r = s.split("").reverse().join("");
  let lr = r.toLowerCase();
  console.log("rev: "+ lr);

  if ( ls == lr){
    console.log("Palindrome");
    return true;
  } else {
    return false;
  }
}



palindrome("not a palindrome");
