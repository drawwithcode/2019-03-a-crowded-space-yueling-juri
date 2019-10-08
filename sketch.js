function preload() {
  // put preload code here
}

var colorListLight = [
  "#FFD71D",
  "#ebb3a9",
  "#9379a5",
  "#6f4e8c",
  "#2e7ef5",
  "#d8b4a0",
  "#da94ae"
];
var colorListDark = [
  "#ffa630",
  "#e87ea1",
  "#6f4e8c",
  "#1e3888",
  "#d77a61",
  "#ca668b"
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#535880");
  frameRate(20);

  noStroke();
  fill("#C7E0FE");
  rect(0, 0, windowWidth, windowHeight - 28);

  // note at bottom
  fill("#C7E0FE");
  textSize(30);
  textFont('Avenir heavy');
//  text('play with your mouse and click!', windowWidth - 920, windowHeight - 6);
  // put setup code here
}

function draw() {
  // put drawing code here

push();

  for (var x=45; x<=1400; x+=120){
    for (var y=85; y<=750; y+=120){
      noStroke();
      fill("#1e3888");
      quad(x,y-30,x+30,y,x,y+30,x-30,y)
    }
  }


    for (var x=45; x<=1400; x+=120){
      for (var y=85; y<=750; y+=120){
        for (var i=10; i<=360; i+=5){
          noStroke();
          fill("#ebb3a9");
        arc(x+15,y-15,30*Math.sqrt(2),30*Math.sqrt(2),radians(135), radians(315))
        arc(x+15,y+15,30*Math.sqrt(2),30*Math.sqrt(2),radians(225), radians(45))
        arc(x-15,y+15,30*Math.sqrt(2),30*Math.sqrt(2),radians(315), radians(135))
        arc(x-15,y-15,30*Math.sqrt(2),30*Math.sqrt(2),radians(45), radians(225))
        ellipse(x,y,5)
        }
      }
    }



      for (var x=45; x<=1400; x+=120){
        for (var y=85; y<=750; y+=120){
          noStroke();
          fill("#1e3888");
          ellipse(x,y,7)
        }
      }
  pop();
}
