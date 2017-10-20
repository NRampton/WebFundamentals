function printRange (start, end, inc) {
  if (inc === undefined) {          //ensures an increment value
    inc = 1;
  }
  if (end === undefined) {          //manages missing endpoints
    end = start;
    start = 0;
  }
  if ((start > end && inc > 0) || (start < end && inc < 0)){      //swaps endpoints if loop is impossible
    console.log("I'm going to assume you meant to swap those endpoints...");
    var temp = end;
    end = start;
    start = temp;
  }
  if (inc < 0) {                                      //loops for negative increment
    for (var i = start; i > end; i += inc) {
      console.log(i);
    }
  } else {                                            //loops for positive increment
    for (var i = start; i < end; i += inc) {
      console.log(i);
    }
  }
  var outputs= [start, end]
  console.log(outputs);
}
