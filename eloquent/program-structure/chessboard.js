var board = "";

var odd = " ";
var even = "#";

for (var i = 1; i <= 8 * 8; i++) {


  if (i % 2 == 0) {
    board += even;
    
    if (i % 8 == 0) {
      board += "\n";
    
      var temp = odd;

      odd = even;
      even = temp;
    }

  } else {
    board += odd;
  }
}

console.log(board);

