
peterpan="";
harrypotter="";
function preload(){
peterpan=loadSound("peter pan baba.mp3");
harrypotter=loadSound("harry potter.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}