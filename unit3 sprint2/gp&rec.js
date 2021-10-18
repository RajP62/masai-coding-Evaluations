function gpRec(n, r, sum){
    if(n===1){
        return parseFloat(1+(1/r)+sum).toFixed(4);
    }
    sum+= 1/r**n;
    return gpRec(n-1, r, sum);
}

function runProgram(input) {
    // Write code here
   let [n, r] = input.split(" ").map(Number);

  }
  if (process.env.USERNAME === "lenovo") {
    runProgram(`1 1`);
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