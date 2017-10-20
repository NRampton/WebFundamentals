function dblmoney (init) {
  for (var i = 1; i <=30; i++) {
    init *= 2;
    console.log("After " + i + " days, the servant had $" + init);
  }
}
function timeto (target) {
  var days=0;
  for (var i = 0.01; i <= target; i *= 2) {
    days++;
  }
  console.log("It took him " + days + " days to reach $ " + target);
}

dblmoney(0.01);
timeto(10000);
timeto(1000000000);
