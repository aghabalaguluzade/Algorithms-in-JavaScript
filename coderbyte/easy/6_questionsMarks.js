const questionsMarks = (str) => {
     if(str.length < 5) {
          return false;
     };

     const newStr = str.replace(/[^0-9?]/g,"");
     const arr = newStr.split("");
     let sums = [];
     let  sum = 0;
     let iterator = 0;

     arr.forEach(e => {
          if(e != "?") {
               sum = parseInt(e) + parseInt(arr[iterator + 4]);
               sums.push(sum);
          }
          iterator += 1;
     });

     return sums.includes(10) ? true : false;
};

console.log(questionsMarks("acc?7??sss?3rr1??????5"));