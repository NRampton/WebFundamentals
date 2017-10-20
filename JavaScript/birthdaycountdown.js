function bdown(daysLeft) {
  for (var i = daysLeft; i >= 0; i--) {
    if (i >= 30) {
      console.log(i + " whole days until my birthday!? Fuuuuuuu-");
    } else if (i >= 5) {
      console.log("Only " + i + "days until my birthday. Awwww yeeeeah.");
    } else if (i >= 1) {
      console.log("IT'S ALMOST MY @&$^@%!& BIRTHDAY! ONLY " + i + " DAYS TO GO!");
    } else {
      console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
      console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
      console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«")
    }
  }
}
