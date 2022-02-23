let lapPuiss = 1;
let tabPuiss = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [18, 25, 32, 39],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  [14, 22, 30, 38],
  [7, 15, 23, 31],
  [15, 23, 31, 39],
  [0, 8, 16, 24],
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
  [2, 10, 18, 26],
  [10, 18, 26, 34],
  [3, 11, 19, 27],
  [3, 9, 15, 21],
  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [13, 19, 25, 31],
  [19, 25, 31, 37],
  [20, 26, 32, 38],
];
let arrayHtmlPuiss = document.querySelectorAll(".cells");
let isWinPuiss = false;

function randArrayPuiss() {
  let cpuArrayPuiss = [];
  for (let i = 0; i < arrayHtmlPuiss.length; i++) {
    if (arrayHtmlPuiss[i].innerHTML == "") {
      cpuArrayPuiss.push(i);
    }
  }
  let randPuiss = getRandomPuiss(0, cpuArrayPuiss.length - 1);
  arrayHtmlPuiss[cpuArrayPuiss[randPuiss]].click();
}
function getRandomPuiss(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function playPuiss(element) {
  if (!isWinPuiss) {
    if (element.innerHTML === "") {
      if (lapPuiss % 2 != 0) {
        element.innerHTML = "X".fontcolor("#f0ce0d");
      } else {
        element.innerHTML = "O".fontcolor("#ec5122");
      }
      lapPuiss++;
    }
    winPuiss();
    if (isWinPuiss === false) {
      checkTiePuiss();
    } else {
      return;
    }
   
    winPuiss();
    if (lapPuiss % 2 === 0) {
      randArrayPuiss();
    }
  }
}

function winPuiss() {
  for (let i = 0; i < tabPuiss.length; i++) {
    let a = arrayHtmlPuiss[tabPuiss[i][0]].innerHTML;
    let b = arrayHtmlPuiss[tabPuiss[i][1]].innerHTML;
    let c = arrayHtmlPuiss[tabPuiss[i][2]].innerHTML;
    let d = arrayHtmlPuiss[tabPuiss[i][3]].innerHTML;
    if (a == b && b == c && c == d) {
      if (a == "O".fontcolor("#ec5122")) {
        document.querySelector("#winnerPuiss").innerHTML = "Bravo au joueur ROUGE qui gagne cette partie";
        isWinPuiss = true;
      } else if (a == "X".fontcolor("#f0ce0d")) {
        document.querySelector("#winnerPuiss").innerHTML = "Bravo au joueur JAUNE qui gagne cette partie";
        isWinPuiss = true;
      }
    }
  }
}

function checkTiePuiss() {
  let countPuiss = 0;
  for (let i = 0; i < arrayHtmlPuiss.length; i++) {
    if (arrayHtmlPuiss[i].innerHTML != "") {
      countPuiss++;
    }
  }
  if (countPuiss === 42) {
    document.querySelector("#winnerPuiss").innerHTML = "Match null !! Hey Hey!!";
  }
}
