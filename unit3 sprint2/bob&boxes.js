function numOfWays(n){
    if(n<0){
        return 0;
    }
    if(n===0){
        return 1;
    }

    return numOfWays(n-1)+numOfWays(n-3)+numOfWays(n-5);
}

function runProgram(input) {
    // Write code here
   input = +input;
    let ans = numOfWays(input);
    console.log(ans)
  }
  if (process.env.USERNAME === "lenovo") {
    runProgram(`7`);
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