// let myArray = [100, 101, 9, 1000, 12, -3];

// function filterToRemoveGreaterThan100(arrayToFilter) {
//   let tempArray = [];
//   for (const element of arrayToFilter) {
//     if (element <= 100) {
//         tempArray.push(element);
//     }

// }
//     return tempArray;
// }

// console.log(filterToRemoveGreaterThan100(myArray));



// function greaterThan30(element) {
//   // if (element > 30) {
//   //     return true;
//   // }else{
//   //   return false;
//   // }

//     return (element > 30);
// }


// function isEven(element) {
//   // if (element % 2 === 0) {
//   //   return true;
//   // }else{
//   //   return false;
//   // }
//   return (element % 2 === 0);
// }




// function filter(arrayToFilter, filterFunction) {
//   let tempArray = [];
//   for (const element of arrayToFilter) {
//     if (filterFunction(element)) {
//         tempArray.push(element);
//     }

//   }
//   return tempArray;

// }


// console.log(filter(myArray, greaterThan30));
// console.log("mia filter",filter(myArray, isEven));

// console.log("javascript filter", myArray.filter(isEven));


// function isPositive(element) {
//   return (element > 0);
// }

// console.log("isPositive filter", myArray.filter(isPositive));



// function isNegative(element, index) {
//     return element < 0
// }

// let isNegative2 = function(element, index) {
//     return element < 0;
// }

// let isNegative3 = (element, index) => element < 0;


// console.log(myArray.filter(function(element){
//     return element < 0;
// }));

// console.log(myArray.filter((element) => element < 0));


// /////////////////////////////////////////////////////////////////////////////////////////////

// function hasEvenPosition(element, index) {
//     if (index % 2 === 0) {
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(myArray.filter(hasEvenPosition));


// console.log(myArray.filter(function(element, index){
//     return index % 2 === 0;
// }));


// console.log(myArray.filter((e, i) => i % 2 === 0));


// /////////////////////////////////////////////////////



// function addOneToArray(arrayToModify) {
//     let tempArray =[];
//     for (const element of arrayToModify) {
//         let modifiedElement = element + 1;
//         tempArray.push(modifiedElement);
//     }
//     return tempArray;
// }

// console.log(addOneToArray(myArray));


// function map(arrayToModify, alterationFuction) {
//     let tempArray =[];
//     for (const element of arrayToModify) {
//         let modifiedElement = alterationFuction(element);
//         tempArray.push(modifiedElement);
//     }
//     return tempArray;
// }


// function addOne(element) {
//     return element + 1;
// }

// console.log(map(myArray, addOne));

// console.log(map(myArray.map, addOne));

// console.log(myArray.map(function(element){
//     return element + 1;
// }));

// console.log(myArray.map((element) => element + 1));



// function elementIndexProduct(element, index) {
//     return element * index;
// }


// console.log(myArray.map(elementIndexProduct));

// console.log(myArray.map(function(element, index){
//     return element * index;
// }));

// console.log(myArray.map((e, i) => e * i));


// console.log(myArray.map(elementIndexProduct).filter(isNegative));




//////


let testArray1 = [12, 57, 1001, -67, -12, 5, 27, 48, -6000]

let testArray2 = ["pippo", "pluto", "paperino", "topolino", "paperone", "paperoga"]

function divisibilePer3(element) {
    return element % 3 === 0;

}
let filteredArray1 = testArray1.filter((e) => e % 3 === 0); // teniamo i numeri divisibili per 3;
console.log(filteredArray1);


function stringapiu6(element) {
    return element.length > 6

}


let filteredArray2 = testArray2.filter((e) => e.length > 6);// teniamo le stringhe che sono più lunghe di 6 caratteri;

console.log(filteredArray2);



function mapArray1(element) {
    return element - (element * 10 / 100);
}


let mappedArray1 = testArray1.map((e) => e - (e * 10 / 100));//tutti i numeri dovranno essere ridotti del 10%;
console.log(mappedArray1);


function stringheMaiuscole(element) {
    return element.toUpperCase()
}

let mappedArray2 = testArray2.map((e) => e.toUpperCase());// tutte le stringhe dovranno essere  Maiuscole;
console.log(mappedArray2);

function numPiu(element) {
    return element < 0 ? element * -1 : element * 1
}



function numEliminaPiu100(element) {
    return element < 100

}


let modifiedArray1 = testArray1.map((element) => element < 0 ? element * -1 : element * 1).filter((element) => element < 100);// tutti i numeri andranno trasformati in positivi e andranno eliminati i numeri maggiori di 100;
console.log(modifiedArray1);

// function primaLettereMaiuscola(element) {
//     return element[0].toUpperCase() + element.slice(1);
// }

// function eliminaR(element, index) {
//     return
// }

// let stringa = "pippo"
// console.log(eliminaR(stringa, stringa.length-1));

let modifiedArray2 = testArray2.map((element) => element[0].toUpperCase() + element.slice(1)).filter((element) => element.toLowerCase().includes("r"))
console.log(modifiedArray2);
// tutte le stringhe dovranno avere la prima lettera maiuscola e andranno eliminate le stringhe che non contengono la lettera r;




// function sumAllArray(arrayToSum) {
//     let result = 0;
//     for (const element of arrayToSum) {
//         result = result + element;
//     }
//     return result;
// }

// console.log(sumAllArray(testArray1));

// function sum(first, second) {
//     return first + second;

// }
// function product(previous, current, index) {
//     return previous * current;
// }
// function sumEvenIndex(previous,current,index) {
//     if (index % 2 === 0) {
//         return previous+current;
//     } else {
//         return previous;
//     }
// }


// function reduce(arrayToAggregate, aggregationFunction, startingElement) {
//     let result;
//     let startingIndex;

//     if (startingElement !== undefined) {
//         result = startingElement
//         startingIndex = 0;

//     } else {

//         result = arrayToAggregate[0]
//         startingIndex = 1;
//     }

//     let result = 0;
//     for (let i = startingIndex; i < arrayToAggregate.length; i++) {
//         const element = arrayToAggregate[i]
//         result = aggregationFunction(result, element, i);
//     }

//     return result;
// }

// console.log(reduce(testArray1, sum, 0));
// console.log(reduce(testArray1, product, 1));
// console.log(reduce(testArray1, sum));
// console.log(reduce(testArray1, sumEvenIndex));












let testArray3 = ["la", "vergogna", "casa", "dannazione", "ha", "pippo", "preso", "secchio", "fuoco"]  // La casa ha preso fuoco

// function reducer(previous, current, index, array) {
//     const returns = previous + current;
//     console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//     return returns;

//     for (let i = 0; i < testArray3.length; i++) {

//   if (testArray3.indexOf(testArray3[i]) % 2 == 0){
//     console.log(testArray3[i]);
// }
//     }
// }

console.log(testArray3.reduce((p, c, i) => i % 2 !== 0 ? p : p + " " + c));

function removeOddAndConcatenate(previous, current, index) {
    let tempString = previous;

    if (index % 2 !== 0) {
        return tempString;
    } else {
        tempString = tempString + current;
        return tempString;
    }

}

console.log(testArray3.reduce(removeOddAndConcatenate));



let array1 = [12, 345, -1234, 1, 0, 23456, -2, 2, 3];//dato un array di numeri

function maggiore(p, c) {
    if (p > c) {
        return p;
    } else {
        return c;
    }
}
console.log(array1.reduce(maggiore));  //''reduce che tira fuori il maggiore di tutti''

function negativoMinore(previous, current) {

    if (previous) {
        if (current < 0) {
            if (current < previous) {
                return current
            } else {
                return previous
            }
        } else {
            return previous;
        }
    } else {
        if (current < 0) {
            return current;
        } else {
            return previous;
        }
    }
    // if (p<c) {
    //     return p;
    // } else {
    //   return c;
    // }
}

console.log(array1.reduce(negativoMinore)); //''reduce che tira fuori il numero minore dei negativi''

function sommaPari(p, c) {
    if (p % 2 === 0) {
        if (c % 2 === 0) {
            p = p + c;
            return p;
        }
        return p;
    } else {
        return p;
    }
}
console.log(array1.reduce(sommaPari));//''reduce che tira fuori la somma dei pari''
console.log(array1.reduce((p, c) => p % 2 !== 0 ? p : c % 2 !== 0 ? p : p + c));




let array2 = ["Pippo", "Paperone", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"]; //dato un array di stringhe



//''reduce che mi da un array delle vocali'', ''reduce stringa consonanti senza ripetizione'', ''map che cambia maiuscole in minuscole e viceversa'',
//''filter che tenga solo le stringhe che contengono b e poi trasformarlo in una reduce


// let string = "pippo";

function checkIfStringContainsAVowe(string) {

 let vowels = ["a", "e", "i", "o", "u"];
 return vowels.some((v) => string.includes(v));

}

function checkIfStringNotContainsAVowe(string) {

    let vowels = ["a", "e", "i", "o", "u"];
    return !vowels.some((v) => string.includes(v));
   
   }
// const vowel = vowels [i];

// if (string.includes(vowel)) {
//     return true;
// }
    // for (let i = 0; i < string.length; i++) {
    //     const char = string[i];

    //     if (char === "a") {
    //         return true;
    //     }
    //     if (char === "e") {
    //         return true;
    //     }
    //     if (char === "i") {
    //         return true;
    //     }
    //     if (char === "o") {
    //         return true;
    //     }
    //     if (char === "u") {
    //         return true;
    //     }
    // }
//     return false;

// }
// return vowels.some((v) => string.includes);

// array.some()

// array.any()

// array.every()








// function arrayOfVowels(string) {
//     let arrayFromString = [...string];
//     let vowelsArray = arrayFromString.filter(checkIfStringContainsAVowe)
//     return vowelsArray;
// }
// console.log(arrayOfVowels(string));


// console.log(arrayOfVowels(string).join(""));

function arrayVocali(p,c) {

    let array = [...c];
    let arrayVowels = array.filter(checkIfStringContainsAVowe)
    p.push(...arrayVowels)
    return p;
}

console.log(array2.reduce(arrayVocali, []));

function stringaDiConsonanti(p,c){
    let array = [...c.toLowerCase()]
    let tempArray = array.filter(checkIfStringNotContainsAVowe);
    p.push(... tempArray);
    let newSet = new Set(p);
    p = [...newSet];
    return p;
}
console.log((array2.reduce(stringaDiConsonanti, []).join("")));





array1.forEach((e) => console.log(e));





let athlete1 = {name: "giovanni", surname:"landi",position: 2}
let athlete2 = {name: "lorena", surname:"landi",position: 2}
let athlete3 = {name: "pippo", surname:"barbigli",position: 1}
let athlete4 = {name: "simona", surname:"perri",position: 2}
let athlete5 = {name: "elmo", surname:"recalnati",position: 3}

let athletes = [athlete1, athlete2, athlete3, athlete4, athlete5];

//console.log(athletes.sort());

function compareBySurname(stud1,stud2) {
return stud1.surname.localeCompare(stud2.surname)    
}
console.log(athletes.sort(compareBySurname));

function compareByPosition(stud1,stud2) {
    return stud1.position - stud2.position
}

console.log(athletes.sort(compareByPosition));

function compareByPositionPlus(stud1, stud2) {
    if (stud1.position === stud2.position) {
        if (stud1.surname === stud2.surname) {
            return stud1.name.localeCompare(stud2.name);
    }   else {
            return stud1.surname.localeCompare(stud2.surname);
    }
    }   else {
            return stud1.position - stud2.position;
    }  
}

function switchCase(string) {
    const firstChar = string[0];
    const firstCharLower = firstChar.toLowerCase();

    const remainingString = string.substring(1);
    const remainingStringUpper = remainingString.toUpperCase();

    return firstCharLower + remainingStringUpper;
}

console.log(array2.map(switchCase));


console.log(array2.map((s) => s[0].toLowerCase() + s.substring(1).toUpperCase())); //lamda


console.log(array2.reduce((p, c) => [...p, switchCase(c)], [])); //reduce

/////////////////////////////////////////////////////////////////////////

function checkIfContainsR(string) {
    return string.toLowerCase().includes("r");
}


function checkIfContainsString(string, stringTocheck) {
    // if (string.includes("r")) {     
    //     return true;
    // }else{
    //     return false;
    // }
    return string.toLowerCase().includes(stringTocheck) 
}

console.log(checkIfContainsString("pippo", "r"));



function checkIfContainsString2(stringTocheck) {
    return (string) => string.toLowerCase().includes(stringTocheck);
}

const checkR = checkIfContainsString2("p");

console.log(checkR("pippo"));





console.log(array2.filter(checkIfContainsString2)); //filter

console.log("generico", array2.filter((s) => checkIfContainsString(s, "p")));  //lamda

console.log(array2.reduce((p, c) => checkIfContainsR(c) ? [...p, c] : p, [])); //reduce




