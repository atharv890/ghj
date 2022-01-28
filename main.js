function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    canvas.position(500,350);
    canvas.mouseReleased(classifyCanvas);
    app1=window.speechSynthesis;
}
function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}
function draw(){
    strokeWeight(13);
    stroke("black");
    if (mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
    }
    function gotResult(error,results){
        if (error){
    console.log(error);
        }
    else{
        console.log(results);
        document.getElementById("hi").innerHTML="Your Sketch: "+results[0].label;
        console.log(results[0].label);
        document.getElementById("hello").innerHTML="Confidence: "+Math.round(results[0].confidence*100);
    voice1=new SpeechSynthesisUtterance(results[0].label);
    app1.speak(voice1);
    }
    }
    function clearCanvas(){
        background("white");
    }