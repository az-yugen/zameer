// import ColorThief from './color-thief-2.6.0/dist/color-thief.mjs'

// const colorThief = new ColorThief();
// const img = document.querySelector('img');

// if (img.complete) {
//   colorThief.getColor(img);
// } else {
//   image.addEventListener('load', function() {
//     colorThief.getColor(img);
//   });
// }

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let spines = Object.values(document.getElementsByClassName("spine"));
let covers = Object.values(document.getElementsByClassName("cover"));
let tops = Object.values(document.getElementsByClassName("top"));
let books = Object.values(document.getElementsByClassName("book"));
let title = Object.values(document.getElementsByClassName("spine-title"));

let availableColors = [
  "#84B4A8",
  "#FFFFFD",
  "#5D3C2D",
  "#FBF8F3",
  "#000000",
  "#EAE2D7",
  "#000000",
  "#58504C",
  "#CAE9E1",
  "#66ADE9",
  "#FA1045"
];
// book mon:  #EAE2D7,  #8BA3AD

let orderedHeightsList = [ 180, 200, 300, 230, 280, 215, 235, 260, 235, 215, 250  ];
let orderedBreadthList = [ 25, 30, 80, 35, 75, 50, 30, 65, 45, 55, 50];
let orderedWidthList = [ 120, 130, 200, 160, 190, 140, 160, 170, 165, 140, 170];

spines.map(function (s, i) {
  let randomHeight = getRandomInt(220, 290);
  let randomWidth = getRandomInt(30, 70);

  let orderedHeights = orderedHeightsList[i];
  let orderedBreadths = orderedBreadthList[i];
  let orderedWidths = orderedWidthList[i];

  s.style.height = `${orderedHeights}px`;
  s.style.width = `${orderedBreadths}px`;
  s.style.top = `${280 - orderedHeights}px`;
  s.style.transform = `translateY(${orderedHeights-280}px)`;

  books[i].style.height = `${orderedHeights}px`;
  books[i].style.width = `${orderedBreadths}px`;

  covers[i].style.height = `${orderedHeights}px`;
  covers[i].style.width = `${orderedWidths}px`;
  covers[i].style.left = `${orderedBreadths}px`;

  tops[i].style.width = `${orderedBreadths}px`;
  tops[i].style.height = `${orderedWidths}px`;
  tops[i].style.bottom = `${orderedHeights - orderedWidths/2 - 3}px`;
  tops[i].style.transform = `rotateX(90deg) translateY(${-orderedWidths/2}px)`;

  title[i].style.left = `${orderedBreadths - 30}px`;

  let colorList = availableColors[i];
  s.style.backgroundColor = colorList;

  // let colorThief = new ColorThief();
  // let img = document.querySelector('cover');

  // s.style.backgroundColor = colorThief.getColor(img)

});




