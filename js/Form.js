class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","Enter Your Name");
    this.playButton = createButton("Play");
    this.titleImg= createImg("./assets/title.png","game title");
    this.greeting= createElement("h2");// h1
  }

setElementPosition(){
  this.titleImg.position(70,60);
  this.input.position(width/2-110,height/2-70);
  this.playButton.position(width/2-90,height/2-20);
  this.greeting.position(width/2-300,height/2-100);
}

  display(){
this.setElementPosition();
  }
}
