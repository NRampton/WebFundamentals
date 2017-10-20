function printRange (start, end, inc) {
  if (inc === undefined) {
    inc = 1;
  }
  if (end === undefined) {
    end = start;
    start = 0;
  }
  if ((start > end && inc > 0) || (start < end && inc < 0)){
    console.log("I'm going to assume you meant to swap those endpoints...");
    var temp = end;
    end = start;
    start = temp;
  }
  if (inc < 0) {
    for (var i = start; i > end; i += inc) {
      console.log(i);
    }
  } else {
    for (var i = start; i < end; i += inc) {
      console.log(i);
    }
  }
  var outputs= [start, end]
  console.log(outputs);
}
