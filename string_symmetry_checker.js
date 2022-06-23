function symmetry(str) {
    let str2 = str.replace(/\s+/g, "").toLowerCase()   //remove spaces
    let str3 = str2.replace(/[^a-z0-9]/gi, "")     // remove non alpahnumeric
    console.log(str3)

    let strFirstHalf = 0;
    let strSecondHalf = 0;
    let strLength = str3.length;
    if (str3.length % 2 !== 0) {
        strFirstHalf = str3.substring(0, (strLength / 2));
        strSecondHalf = str3.substring((strLength / 2 + 1));
    }
    else {
        strFirstHalf = str3.substring(0, (strLength / 2).toFixed());
        strSecondHalf = str3.substring((strLength / 2).toFixed());
    }

    let firstArray = strFirstHalf.split("")
    let secondArray = strSecondHalf.split("").reverse()

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] === secondArray[i]) {
            continue;
        }
        else {
            return false
            //console.log("false")
            //break;
        }

    }
    return true
    //console.log("true")

    // console.log(firstArray);
    // console.log(secondArray)

}

//console.log(symmetry("123454321"));  // for length 9 final index 8
//console.log(symmetry("12344321"))  // for length 8 final index is 7
console.log(symmetry("121"))
console.log(symmetry("_eye"))