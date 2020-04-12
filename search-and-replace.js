function myReplace(str, before, after) {

  let c = before[0];
  let a = [...after];
  let b = [...before];


  if (c == c.toUpperCase()){
      a[0]=a[0].toUpperCase();
  } else {
      a[0] = a[0].toLowerCase();
  }

  let bef=b[0];
  let aft=a[0];
  for (let i =1; i<b.length;i++) bef += b[i];
  for (let i =1; i<a.length;i++) aft += a[i];


  let s = str.replace(bef,aft);
  console.log('ans='+s);

  return s;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
