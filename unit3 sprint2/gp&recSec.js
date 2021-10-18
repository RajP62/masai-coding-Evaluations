function gpRec(n, r){
    if(n===0){
        return 1;
    }
    if(n===1 ){
        return 1+(1/r);
    }
    return 1/r**n+gpRec(n-1, r);
}

function runProgram(input) {
    // Write code here
   let [n, r] = input.split(" ");
    let ans = gpRec(+n, +r);
    console.log(parseFloat(ans).toFixed(4))
  }
  if (process.env.USERNAME === "lenovo") {
    runProgram(`3 5`);
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