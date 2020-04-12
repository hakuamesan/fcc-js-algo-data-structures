function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let found = 0;

  for (let i = 0; i < collection.length; i++){

      for (let key in source){
        if ( collection[i].hasOwnProperty(key) && 
              collection[i][key]==source[key]){
            console.log("Found "+ source[key]);
            found++;
        }
      }

      if (found == Object.keys(source).length){
        arr.push(collection[i]);
      }

      found = 0;
  }


  console.log(arr);
  console.log("--------------");
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});