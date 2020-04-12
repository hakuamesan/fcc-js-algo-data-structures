function convertToRoman(num) {
    let a = num.toString() ;
    console.log("a="+a);
    let thousands = 0, hundreds = 0, tens = 0, units =0;


    switch (a.length){
        case 4:   
            thousands = parseInt(num / 1000); 
            
            console.log("t = "+ thousands);
        case 3: 
            hundreds = parseInt((num-thousands*1000) / 100); 
            console.log("h="+hundreds);
        
        case 2: 
            tens = parseInt((num-(thousands*1000+hundreds*100)) / 10); 
            console.log("tens="+tens);
        case 1:
            units = parseInt((num%10))
            console.log("units="+units);
    }

    console.log("k="+thousands + " h="+ hundreds + " t="+tens + " u="+units);
    let n="";

    switch(thousands){
        case 1: n += "M"; break;
        case 2: n += "MM"; break;
        case 3: n += "MMM"; break;
        case 4: n += "MMMM"; break;
        case 5: n += "V̅"; break;
        case 6: n += "V̅M"; break;
        case 7: n += "V̅MM"; break;
        case 8: n += "V̅MMM"; break;
        case 9: n += "MX"; break;     
    }

    // add hundreds
    switch (hundreds){
        case 1: n += "C"; break;
        case 2: n += "CC"; break;
        case 3: n += "CCC"; break;
        case 4: n += "CD"; break;
        case 5: n += "D"; break;
        case 6: n += "DC"; break;
        case 7: n += "DCC"; break;
        case 8: n += "DCCC"; break;
        case 9: n += "CM"; break;
    }



    // add tens
    switch (tens){
        case 1: n += "X"; break;
        case 2: n += "XX"; break;
        case 3: n += "XXX"; break;
        case 4: n += "XL"; break;
        case 5: n += "L"; break;
        case 6: n += "LX"; break;
        case 7: n += "LXX"; break;
        case 8: n += "LXXX"; break;
        case 9: n += "XC"; break;
    }

    // add units
    switch (units){
        case 1: n += "I"; break;
        case 2: n += "II"; break;
        case 3: n += "III"; break;
        case 4: n += "IV"; break;
        case 5: n += "V"; break;
        case 6: n += "VI"; break;
        case 7: n += "VII"; break;
        case 8: n += "VIII"; break;
        case 9: n += "IX"; break;
    }

    console.log(n);
    


 return n;
}

convertToRoman(306);
