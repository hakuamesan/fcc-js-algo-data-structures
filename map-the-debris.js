function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  console.log(arr);
  let n = arr.length; console.log("n="+n);
  let T;
  let res = [];

  for ( let i in arr){
    console.log("i="+i);
    res.push({name:"",orbitalPeriod:0});

    res[i].name = arr[i].name;

    let alt = arr[i].avgAlt; console.log("alt="+alt);
    T = 2 * Math.PI * Math.sqrt( Math.pow((earthRadius + alt),3) / GM );
    console.log("T="+T + " t="+Math.round(T));
    res[i].orbitalPeriod = Math.round(T);
  }

  console.log(res);
  return res;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);