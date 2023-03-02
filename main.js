x = 0;
y = 0;
screen_w=0;
screen_h=0;
draw_apple = "";
apple="";
speak_data="";
to_n=0;
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
  apple=loadImage("apple.png")
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
to_n=Number(content);
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
if(Number.isInteger(to_n)){
  document.getElementById("status").innerHTML = "Started drawing apple "; 
draw_apple="set"
}
else{
  document.getElementById("status").innerHTML = "The speech has been not recognized: " + content;
}
}

function setup() {
 screen_w=window.innerWidth;
 screen_h=window.innerHeight;
 canvas=createCanvas(screen_w,screen_h-150);
 canvas.position(0,150)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_n + " Apples drawn";
    draw_apple = "";
    for(i=1;i<=to_n;i++){
      x=Math.floor(Math.random()*1500);
    y=Math.floor(Math.random()*600);
    image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML=to_n+"Apples drawn";
  speek_data=to_n+"Apples drawn."
  speak();
  draw_apple="";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
