unction checkCashRegister(price, cash, cid) {


  let changeRet = cash - price;
  console.log("price = "+ price + " cash="+cash + " change Ret = "+ changeRet);

  // Calc total cash in draw
let n = cid.length; //console.log("n="+n);
//console.log(cid);
let total = 0;

var change = {};
change["HUNDRED"]=0;
change["TWENTY"]=0;
change["TEN"]=0;
change["FIVE"]=0;
change["ONE"]=0;
change["QUARTER"]=0; 
change["DIME"] = 0; 
change["NICKEL"] = 0;
change["PENNY"] = 0;


var changeReturn = {};
changeReturn["HUNDRED"]=0;
changeReturn["TWENTY"]=0;
changeReturn["TEN"]=0;
changeReturn["FIVE"]=0;
changeReturn["ONE"]=0;
changeReturn["QUARTER"]=0; 
changeReturn["DIME"] = 0; 
changeReturn["NICKEL"] = 0;
changeReturn["PENNY"] = 0;










//console.log("change = " + change);

  for ( let i =1; i < 10; i++){
    let a = cid[i-1]; 
    let b = parseInt(a[1]*100); // convert to cents
    //console.log("a="+a[1]+" b="+b);
    switch (i){
      case 1: change["PENNY"] = b; 
        //console.log("penny=" + change["PENNY"]); 
        break;
      case 2: change["NICKEL"] = b;
        //console.log("total nickel="+ change["NICKEL"]);
        break;
      case 3: change["DIME"] = b;
        //console.log("dime="+change["DIME"]);
        break;
      case 4: change["QUARTER"] = b;
        //console.log("quarter="+change["QUARTER"]);
        break;
      case 5: change["ONE"] = b; 
        //console.log("one="+change["ONE"]);
        break;
      case 6: change["FIVE"]  =  b;
        //console.log("five="+change["FIVE"]);
        break;
      case 7: change["TEN"]  = b;
          //console.log("ten="+change["TEN"]);
          break;
      case 8: change["TWENTY"]  = b;
        //console.log("twenty="+change["TWENTY"]);
        break;
      case 9: change["HUNDRED"] = b;
        //console.log("hundreds="+change["HUNDRED"]);
        break;
    }
  }
total=cid.reduce((a, b) => +a + +b[1]*100, 0)/100;
        //console.log("total = "+total);


  if ( changeRet > total){
    let r ={status: "INSUFFICIENT_FUNDS", change:[]}; 
      console.log("no funds");
      console.log(r);
    return r; 
  }

let done = false;
let bal = 0;


// weird js decimals workaround
changeRet *= 100;


  // calc change, 
if ( (changeRet / 10000 > 0) && !done) {
let n = parseInt(changeRet / 10000);
    
    console.log("need 100=" + bal + " avail 100=" + change["HUNDRED"]);
    if ( bal > change["HUNDRED"]){
      changeReturn["HUNDRED"] = change["HUNDRED"];
      change["HUNDRED"] = 0;
    } else if ( bal <= change["HUNDRED"]){
      changeReturn["HUNDRED"] = bal; 
      change["HUNDRED"] -= bal;
    }
      console.log("used 100s=" + changeReturn["HUNDRED"] + " avail 100=" + change["HUNDRED"]);
      bal = (changeRet - changeReturn["HUNDRED"]*10000) ;
      changeRet = bal;
      console.log("new bal =" + bal);
} 

if ( (changeRet / 2000 > 0) && change["TWENTY"]!=0) {
    let n = parseInt(changeRet / 2000);
    
    console.log("need 20=" + changeRet + " avail 20=" + change["TWENTY"]);
    if ( bal > change["TWENTY"]){
      changeReturn["TWENTY"] = change["TWENTY"];
      change["TWENTY"] = 0;
    } else if ( bal <= change["TWENTY"]){
      changeReturn["TWENTY"] = parseInt(changeRet / 2000)*2000; 
      change["TWENTY"] -= parseInt(changeRet / 2000)*2000;
    }
      
      console.log("used 20s=" + changeReturn["TWENTY"] + " avail 20=" + change["TWENTY"]);
      console.log("bal =" + bal);
      bal = (changeRet - changeReturn["TWENTY"]) ;
      changeRet = bal;
      console.log("new bal =" + bal);
}

if (  (parseInt(changeRet /1000) > 0) && change["TEN"]!= 0){
    let n = parseInt(changeRet / 1000);
    console.log("need 10=" + changeRet + " avail 10="+change["TEN"]);

     if ( changeRet > change["TEN"]){
      changeReturn["TEN"] = change["TEN"];
      change["TEN"] = 0;
    } else if ( changeRet <= change["TEN"]){
      changeReturn["TEN"] = changeRet / 1000; 
      change["TEN"] -= changeRet/1000;
    }
      console.log("used 10s= "+ changeReturn["TEN"]  + " avail 10=" + change["TEN"]);
            console.log("bal =" + bal);

      changeRet = (changeRet - changeReturn["TEN"]);;
      console.log("bal =" + changeRet);
}

if ( (changeRet / 500 >0) && change["FIVE"]!=0 ){
  let n = parseInt( changeRet / 500);

    console.log("need five=" + changeRet + " avail five="+change["FIVE"]);

   if ( changeRet > change["FIVE"]){
      changeReturn["FIVE"] = change["FIVE"];
      change["FIVE"] = 0;
    } else if ( changeRet <= change["FIVE"]){
      changeReturn["FIVE"] = parseInt(changeRet/500)* 500; 
      change["FIVE"] -= parseInt(changeRet/500)* 500;
    }
      console.log("used five= "+ changeReturn["FIVE"]  + " avail five=" + change["FIVE"]);
      changeRet = (changeRet - changeReturn["FIVE"]);
      console.log("bal =" + changeRet);

}

if ( (changeRet  >100) && change["ONE"]!=0){
  let n =  parseInt(changeRet / 100);

    console.log("need 1s=" + changeRet + " avail 1="+change["ONE"]);

   if ( changeRet > change["ONE"]){
      changeReturn["ONE"] = change["ONE"];
      change["ONE"] = 0;
    } else if ( changeRet <= change["ONE"]){
      changeReturn["ONE"] = parseInt(changeRet / 100)*100; 
      change["ONE"] -= parseInt(changeRet / 100)*100;;
    }
      console.log("used one= "+ changeReturn["ONE"]  + " avail one=" + change["ONE"]);
      changeRet = (changeRet - changeReturn["ONE"]);
      console.log("bal =" + changeRet);


}

if ( (changeRet > 25)  && change["QUARTER"]!=0){
  let n = parseInt(changeRet/25);

    console.log("need quarter=" + changeRet + " avail quarter="+change["QUARTER"]);

    if ( changeRet > change["QUARTER"]){
      changeReturn["QUARTER"] = change["QUARTER"];
      change["QUARTER"] = 0;
    } else if ( changeRet <= change["QUARTER"]){
      changeReturn["QUARTER"] = parseInt(changeRet / 25)*25; 
      change["QUARTER"] -= parseInt(changeRet / 25)*25; ;
    }
      console.log("used quarter= "+ changeReturn["QUARTER"]  + " avail quarter=" + change["QUARTER"]);
      changeRet = (changeRet - changeReturn["QUARTER"]);
      console.log("bal =" + changeRet);

}

if ( changeRet  > 10 && change["DIME"]!= 0){
  let n = parseInt(changeRet/10);

    console.log("need DIME=" + changeRet + " avail DIME="+change["DIME"]);

    if ( changeRet > change["DIME"]){
      changeReturn["DIME"] = change["DIME"];
      change["DIME"] = 0;
    } else if ( changeRet <= change["DIME"]){
      changeReturn["DIME"] = parseInt(changeRet / 10)*10; 
      change["DIME"] -= parseInt(changeRet / 10)*10; 
    }
      console.log("used dime= "+ changeReturn["DIME"]  + " avail dime=" + change["DIME"]);
      changeRet = (changeRet - changeReturn["DIME"]);
      console.log("bal =" + changeRet);

}


if ( changeRet  > 5 && change["NICKEL"]!=0){
  let n = parseInt(changeRet/5);

    console.log("need .NICKEL=" + changeRet + " avail NICKEL="+change["NICKEL"]);

    if ( changeRet > change["NICKEL"]){
      changeReturn["NICKEL"] = change["NICKEL"];
      change["NICKEL"] = 0;
    } else if ( changeRet <= change["NICKEL"]){
      changeReturn["NICKEL"] = parseInt(changeRet / 5)*5; 
      change["NICKEL"] -= parseInt(changeRet / 5)*5; 
    }
      console.log("used .05s= "+ changeReturn["NICKEL"]  + " avail .05=" + change["NICKEL"]);
      changeRet = (changeRet - changeReturn["NICKEL"] );
      console.log("bal =" + changeRet);

}

if ( changeRet  > 1 && change["PENNY"]!=0){
  let n = changeRet;

    console.log("need PENNY=" + changeRet + " avail PENNY="+change["PENNY"]);

    if ( changeRet > change["PENNY"]){
      changeReturn["PENNY"] = change["PENNY"];
      change["PENNY"] = 0;
    } else if ( changeRet <= change["PENNY"]){
      changeReturn["PENNY"] = changeRet; 
      change["PENNY"] -= changeRet;
    }
      console.log("used pennys= "+ changeReturn["PENNY"]  + " avail .01=" + change["PENNY"]);
      changeRet = (changeRet - changeReturn["PENNY"]);
      console.log("bal =" + changeRet);

}

/*
console.log("PENNY="+changeReturn["PENNY"]/100);
console.log("NICKEL="+changeReturn["NICKEL"]/100 );
console.log("DIME="+changeReturn["DIME"]/100 ); 
console.log("QUARTER="+changeReturn["QUARTER"]/100 ); 
console.log("ONE="+changeReturn["ONE"]/100 );
console.log("FIVE="+changeReturn["FIVE"]/100);
console.log("TEN="+changeReturn["TEN"]/100 );
console.log("TWENTY="+changeReturn["TWENTY"]/100 );
console.log("HUNDRED="+changeReturn["HUNDRED"]/100 );
*/


let finalChange = [];
let r;

if ( changeRet == 0){
  console.log("Exact Change found!");

let temp = [];



for (let x in changeReturn) {
  console.log(x,changeReturn[x]);
  if ( changeReturn[x] !== 0){
    finalChange[x] = changeReturn[x]/100;
  }
}

console.log("final=")

 for (let y in finalChange) {
   
   if  ( y == 'ONE HUNDRED') temp.push(['ONE HUNDRED',finalChange[y]]);
   if ( y == 'TWENTY') temp.push(['TWENTY',finalChange[y]]);
    if  ( y == 'TEN') temp.push(['TEN',finalChange[y]]);
   if ( y == 'FIVE') temp.push(['FIVE',finalChange[y]]);
   if  ( y == 'ONE') temp.push(['ONE',finalChange[y]]);
   if ( y == 'QUARTER') temp.push(['QUARTER',finalChange[y]]);
    if  ( y == 'DIME') temp.push(['DIME',finalChange[y]]);
   if ( y == 'NICKEL') temp.push(['NICKEL',finalChange[y]]);
   if ( y == 'PENNY') temp.push(['PENNY',finalChange[y]]);
 }
 console.log(temp);

let status = "OPEN";

if (
change["HUNDRED"]==0 &&
change["TWENTY"]==0 &&
change["TEN"]==0 &&
change["FIVE"]==0 &&
change["ONE"]==0 &&
change["QUARTER"]==0 &&
change["DIME"] == 0 &&
change["NICKEL"] == 0 &&
change["PENNY"] == 0 ) status= "CLOSED";

console.log("status = "+status);

if ( status == "CLOSED") {
  temp = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
}

r = {'status': status, change: temp};





 
 return r;
} else {
  r = {status:"INSUFFICIENT_FUNDS", change:[]};
  console.log("insufficient change");
  return r;
}


  // Here is your change, ma'am.
  return r;
}



// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]


//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
