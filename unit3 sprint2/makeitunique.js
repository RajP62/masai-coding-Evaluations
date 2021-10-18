function makeItUnique(str, i, obj, newstr){
    if(i===str.length){
        return newstr;
    }
    if(obj[str[i]]===undefined){
        newstr+= str[i];
        obj[str[i]] = str[i];
    }
    return makeItUnique(str,i+1,obj, newstr);
}

function removeSpace(str){
    let newStr = "";
    for(let i=0; i<str.length; i++){
        if(str[i]==" "){
            continue;
        }
        else{
            newStr+= str[i];
        }
    }
    return newStr;
}

function runProgram(input) {
    // Write code here
    input = removeSpace(input);
   let ans = makeItUnique(input, 0, {}, "");
   console.log(ans)
  }
  if (process.env.USERNAME === "lenovo") {
    runProgram(`my name is ankush`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }