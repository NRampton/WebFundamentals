window.onload = function() {                            //runs function once html is all loaded
  displayWorld();
  displayPacman();
  displayGhost();
}

var world = [                                           //sets up the map as a multi-dimensional array
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [2,0,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,2,2,2,2,2,1,3,1,1,1,2],
  [2,1,1,2,1,1,1,2,1,1,1,1,1,2],
  [2,1,1,2,1,1,1,2,1,1,1,1,1,2],
  [2,1,1,2,1,1,1,2,1,1,1,1,1,2],
  [2,1,1,2,1,1,1,2,1,1,1,1,1,2],
  [2,1,1,2,1,1,1,2,1,1,1,1,1,2],
  [2,1,1,2,1,1,1,2,1,1,1,1,1,2],
  [2,1,1,2,1,1,1,1,1,1,1,1,1,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

function displayWorld() {                               //creates the map based on array above
  var output = '';
  for (var i = 0; i < world.length; i++) {
    output += "<div class='row'>";
    for (var j = 0; j<world[i].length; j++) {
      if (world[i][j] == 2) {
      output += "<div class='brick'></div>";
      } else if (world[i][j] == 1) {
          output += "<div class='coin'></div>";
      } else if (world[i][j] == 0) {
        output += "<div class='empty'></div>";
      } else if (world[i][j] == 3) {
        output += "<div class='cherry'></div>";
      }
    }
    output += "</div>";
    document.getElementById('world').innerHTML = output;
  }
}
var pacman = {
  x: 1,
  y: 1,
  score: 0
}

var ghost = {
  x: 5,
  y: 5
}

function displayPacman() {
  document.getElementById('pacman').style.top = pacman.y*20+"px";
  document.getElementById('pacman').style.left = pacman.x*20+"px";
}

function displayScore() {
  document.getElementById('score').innerHTML = pacman.score;
}

function displayGhost() {
  document.getElementById('ghost').style.top = ghost.y*20+"px";
  document.getElementById('ghost').style.left = ghost.x*20+"px";
}

var timerID = setInterval(function() {moveGhost()}, 300);

function moveGhost() {
  var movement = Math.floor(Math.random()*4);
  console.log(movement);
  if (movement == 1) {
    if (world[ghost.y][ghost.x + 1] == 2) return;
    ghost.x++;
    displayGhost();
  }
  if (movement == 2) {
    if (world[ghost.y][ghost.x - 1] == 2) return;
    ghost.x--;
    displayGhost();
  }
  if (movement == 3) {
    if (world[ghost.y - 1][ghost.x] == 2) return;
    ghost.y--;
    displayGhost();
    }
  if (movement == 0) {
    if (world[ghost.y + 1][ghost.x] == 2) return;
    ghost.y++;
    displayGhost();
  }
}

document.onkeydown = function(e) {
  if (e.keyCode == 39) {
    if (world[pacman.y][pacman.x + 1] == 2) return;
    pacman.x++;
    document.getElementById('pacman').style.backgroundImage = "url('pacmanright.gif')";
    displayPacman();
  }
  if (e.keyCode == 37) {
    if (world[pacman.y][pacman.x - 1] == 2) return;
    document.getElementById('pacman').style.backgroundImage = "url('pacmanleft.gif')";
    pacman.x--;
    displayPacman();
  }
  if (e.keyCode == 38) {
    if (world[pacman.y - 1][pacman.x] == 2) return;
    document.getElementById('pacman').style.backgroundImage = "url('pacmanup.gif')";
    pacman.y--;
    displayPacman();
    }
  if (e.keyCode == 40) {
    if (world[pacman.y + 1][pacman.x] == 2) return;
    document.getElementById('pacman').style.backgroundImage = "url('pacmandown.gif')";
    pacman.y++;
    displayPacman();
  }
  if(world[pacman.y][pacman.x] == 1) {
    world[pacman.y][pacman.x] = 0;
    pacman.score += 10;
    displayWorld();
    displayScore();
  }
  if(world[pacman.y][pacman.x] == 3){
    world[pacman.y][pacman.x] = 0;
    pacman.score += 50;
    displayWorld();
    displayScore();
  }
  if (world[pacman.y][pacman.x] == world[ghost.y][ghost.x]) {
    var victim = document.getElementById('pacman');
    var where = document.getElementById('wrapper');
    where.removeChild(victim);
    clearInterval(timerID);
  }
}
