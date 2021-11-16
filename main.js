function preload(){

}
function setup(){
    canvas=createCanvas(680,480);
    canvas.position(100,300);
    video=createCapture(VIDEO);
    video.hide();

    t="";
}
function draw(){
    image(video,0,0,680,480);
    tint(t);
}
function take_snapshot(){
    save("sy.png");
}
function filtertint(){
    t=document.getElementById("i").value;
}