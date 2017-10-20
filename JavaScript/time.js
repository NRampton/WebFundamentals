function time(hour, min, per) {
  var output = "It's ";
  if (min === 15) {
    output = 
  }
  if (min >= 30) {
    output += "almost " + (hour + 1) + " ";
  } else {
    output +=  "just after " + hour + " ";
  }
  if (per === "AM") {
    output += "in the morning";
  } else {
    output += "in the evening";
  }
  console.log(output);
}
