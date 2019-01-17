var collapsingCircles = []; // type is Path.Circle
var bubblesArr = [];
var confettis = [];
var wigglyLinesCW = [];
var wigglyLinesCCW = [];
var trippySquares = [];
var zigZags = [];
var fallingBalls = [];
var expandingBalls = [];
var trianglesArr = [];
var risingArcs = [];
var slashes = [];
var risingBallsLeft = [];
var risingBallsRight = [];
var wobblyBalls = [];
var rotatingLines = [];
var bouncingBalls = [];
// holding down confetti button causes major lag, so added a state variable
// to slow down confettiMachine evocations
var confettiState = false;
var squareState = false;
function onKeyDown(event){
    keyData[event.key].method();
}

function onFrame(event){
    for(var i = 0; i < bubblesArr.length; i++){
        // bubblesArr[i].fillColor.hue += 3;
        bubblesArr[i].scale(.9);
        bubblesArr[i].opacity *= 0.95;
        if(bubblesArr[i].opacity < 0.1){
            bubblesArr[i].remove();
            bubblesArr.splice(i, 1);
        }
    }

    for(var i = 0; i < collapsingCircles.length; i++){
        collapsingCircles[i].fillColor.hue += 5;
        collapsingCircles[i].scale(.9);
        collapsingCircles[i].opacity *= 0.9;
        if(collapsingCircles[i].opacity < 0.1){
            collapsingCircles[i].remove();
            collapsingCircles.splice(i, 1);
        }
    }

    for(var i = 0; i < confettis.length; i++){
        confettis[i].fillColor.hue += 10;
        confettis[i].scale(1.05);
        confettis[i].opacity *= 0.85;
        confettis[i].rotate(-10);
        confettis[i].position *= new Point(1, 0.9);
        if(confettis[i].opacity < 0.1){
            confettis[i].remove();
            confettis.splice(i, 1)
        }
    }

    for(var i = 0; i < wigglyLinesCCW.length; i++){
        wigglyLinesCCW[i].opacity *= 0.95;
        wigglyLinesCCW[i].rotate(-10);
        wigglyLinesCCW[i].position *= new Point(1, 0.9);
        if(wigglyLinesCCW[i].opacity < 0.3){
            wigglyLinesCCW[i].remove();
            wigglyLinesCCW.splice(i, 1)
        }
    }

    for(var i = 0; i < wigglyLinesCW.length; i++){
        wigglyLinesCW[i].opacity *= 0.95;
        wigglyLinesCW[i].rotate(10);
        wigglyLinesCW[i].position *= new Point(1, 0.9);
        if(wigglyLinesCW[i].opacity < 0.3){
            wigglyLinesCW[i].remove();
            wigglyLinesCW.splice(i, 1)
        }
    }

    for(var i = 0; i < trippySquares.length; i++){
        for(var j = 0; j < trippySquares[i].length; j++){
            trippySquares[i][j].opacity *= 0.95;
            trippySquares[i][j].rotate(2*j);
            if(trippySquares[i][j].opacity < 0.3){
                trippySquares[i][j].remove();
                trippySquares[i].splice(j, 1);
            }
        }
        if(trippySquares[i].length === 0){
            trippySquares.splice(i, 1);
        } 
    }

    for(var i = 0; i < zigZags.length; i++){
        for(var j = 0; j < zigZags[i].length; j++){
            zigZags[i][j].opacity -= 0.03 * (j + 1);
            if(zigZags[i][j].opacity < 0.1){
                zigZags[i][j].remove();
                zigZags[i].splice(j, 1);
            }
        }
        if(zigZags[i].length === 0){
            zigZags.splice(i, 1);
        } 
    }

    for(var i = 0; i < fallingBalls.length; i++){
        fallingBalls[i].opacity *= 0.95;
        fallingBalls[i].rotate(10);
        fallingBalls[i].position *= new Point(1, 1.04);
        if(fallingBalls[i].opacity < 0.3){
            fallingBalls[i].remove();
            fallingBalls.splice(i, 1)
        }
    }

    for(var i = 0; i < expandingBalls.length; i++){
        expandingBalls[i].opacity *= 0.95;
        expandingBalls[i].scale(1.1);
        if(expandingBalls[i].opacity < 0.01){
            expandingBalls[i].remove();
            expandingBalls.splice(i, 1)
        }
    }

    for(var i = 0; i < trianglesArr.length; i++){
        trianglesArr[i].opacity *= 0.9;
        trianglesArr[i].scale(1.2);
        if(trianglesArr[i].opacity < 0.01){
            trianglesArr[i].remove();
            trianglesArr.splice(i, 1)
        }
    }

    for(var i = 0; i < risingArcs.length; i++){
        for(var j = 0; j < risingArcs[i].length; j++){
            // risingArcs[i][j].opacity -= 0.025 * (j + 1);
            risingArcs[i][j].opacity -= 0.02 * (j + 1);
            if(risingArcs[i][j].opacity < 0.1){
                risingArcs[i][j].remove();
                risingArcs[i].splice(j, 1);
            }
        }
        if(risingArcs[i].length === 0){
            risingArcs.splice(i, 1);
        } 
    }

    for(var i = 0; i < slashes.length; i++){
        // slashes[i].opacity *= 0.995;
        slashes[i].position.x += 30;
        slashes[i].position.y += 45;
        if(slashes[i].position.y >= view.size.height + 100){
            slashes[i].remove();
            slashes.splice(i, 1);
        }
    }

    for(var i = 0; i < risingBallsLeft.length; i++){
        risingBallsLeft[i].opacity *= 0.95;
        risingBallsLeft[i].position.x *= 0.9;
        risingBallsLeft[i].position.y *= 0.75;
        if(risingBallsLeft[i].opacity < 0.1){
            risingBallsLeft[i].remove();
            risingBallsLeft.splice(i, 1);
        }
    }

    for(var i = 0; i < risingBallsRight.length; i++){
        risingBallsRight[i].opacity *= 0.99;
        risingBallsRight[i].position.x *= 1.08;
        risingBallsRight[i].position.y *= 0.72;
        if(risingBallsRight[i].opacity < 0.1){
            risingBallsRight[i].remove();
            risingBallsRight.splice(i, 1);
        }
    }

    for(var i = 0; i < wobblyBalls.length; i++){
        var counter = event.count % 10 - 5;
        wobblyBalls[i].opacity *= 0.95;
        wobblyBalls[i].position.x += counter * 10;
        wobblyBalls[i].position.y -= counter * 10;
        if(wobblyBalls[i].opacity < 0.1){
            wobblyBalls[i].remove();
            wobblyBalls.splice(i, 1);
        }
    }

    for(var i = 0; i < rotatingLines.length; i++){
        rotatingLines[i].opacity -= 0.05;
        rotatingLines[i].rotate(5, rotatingLines[i].center);
        if(rotatingLines[i].opacity < 0.01){
            rotatingLines[i].remove();
            rotatingLines.splice(i, 1);
        }
    }

    for(var i = 0; i < bouncingBalls.length; i++){
        bouncingBalls[i].opacity -= 0.027;
        bouncingBalls[i].position.x += 10;
        if(bouncingBalls[i].position.x < 1300){
            bouncingBalls[i].position.y += 15;
        } else{
            bouncingBalls[i].position.y -= 15;
        }
        console.log(bouncingBalls[i].position.x);
        if(bouncingBalls[i].opacity < 0.1){
            bouncingBalls[i].remove();
            bouncingBalls.splice(i, 1);
        }
    }





    
    

}

// passed variables are on a scale from 0 to 1, as a percentage
// of viewable screen area 
function randomPoint(xmin, xmax, ymin, ymax){
    // generates a point at the maximum viewable x and y values
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = new Point(Math.random()*(xmax - xmin) + xmin,
                                Math.random()*(ymax - ymin) + ymin);
    return maxPoint * randomPoint;
}

function collapsingCircle(color, size, point){
    var circle = new Path.Circle({
        center: point,
        radius: size,
        fillColor: color
        // shadowColor: new Color(0, 0, 0),
        // shadowBlur: 12,
        // shadowOffset: new Point(5, 5)
    });
    return circle;
}

function bubbler(color, bubbleColor){
    bubbleColors = [
        "#beddcb",
        "#a9d8c0",
        "#7fc1a0",
        "#5aaa82",
        "#48a878"
    ]
    // generate one random collapsingCircle 
    var randomPt = randomPoint(0.2, 0.4, 0.2, 0.4);
    collapsingCircles.push(collapsingCircle(bubbleColors[4], 400, randomPt));
    // after short delay, loop and make 12 new circles with delay between each
    setTimeout(function(){
        (function theLoop (i) {
            setTimeout(function () {
                bubblesArr.push(collapsingCircle(bubbleColors[i%5], 50, randomPt * Point.random()));
                if (--i) {          // If i > 0, keep going
                    theLoop(i);       // Call the loop again, and pass it the current value of i
                } 
            }, 80);
        })(12);
    }, 100);     
}

function confetti(color, size, point){
    var triangles = [];
    for(var i = 0; i < 8; i++){
        triangles[i] = new Path.RegularPolygon(point, 3, size);
        confettis.push(triangles[i]);
        triangles[i].fillColor = color;
        triangles[i].rotate(i*45);
    }
    return triangles;
}

function confettiMachine(){
    confettiState = true;
    var randomPt = randomPoint(0.25, 0.75, 0.25, 0.75);
    var colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];
    // collapsingCircles.push(collapsingCircle("#ffffff", 200, randomPt));
    (function theLoop (i) {
        setTimeout(function () {
            confettis.push.apply(confetti(colors[i%5], 40, randomPoint(0.3, 0.7, 0.7, 1)));

            if (--i) {          // If i > 0, keep going
                theLoop(i);       // Call the loop again, and pass it the current value of i
            } 
        }, 10);
    })(12);
    setTimeout(function(){
        confettiState = false;
    }, 100);
}

function lineWiggle(direction){
    var colors = ["#d6097d",  "#dc043c",  "#95ffb7",  "#279d9f",  "#186387"]
    var colors2 = ["#F86015", "#F78314", "#FFA510", "#ECEE35", "#C4EF19"]
    var randomPt = randomPoint(0.25, 0.75, 0.25, 0.45);
    var path = new Path();
    var index = Math.floor(Math.random() * Math.floor(5));
    path.strokeColor = colors[index];
    path.strokeWidth = 15;
    path.strokeCap = 'round';
    path.add(randomPt);
    path.add(randomPt + new Point(100, 0));
    if(direction === "clockwise"){
        wigglyLinesCW.push(path);
        path.strokeColor = colors2[index];
    } else {
        wigglyLinesCCW.push(path);
        path.strokeColor = colors[index];
    }
    
}

function trippySquare(){
    squareState = true;
    var tripSqs = [];
    var colors = ["#F9FFE5", "#00CC95",  "#00B4CC", "#EF3B68", "#FFBC2D"]
    var randomPt = randomPoint(0.6, 0.9, 0.6, 0.9);
    for(var i = 0; i < 5; i++){
        var rectangle = new Rectangle(randomPt - new Point(20 * i, 20 * i), randomPt + new Point(20 * i, 20 * i));
        var path = new Path.Rectangle(rectangle);
        path.style = {
            strokeColor: colors[i],
            strokeWidth: 10,
            strokeJoin: 'round',
            shadowColor: "#ffffff",
            shadowBlur: 5,
            shadowOffset: new Point(5, 5)
        }
        tripSqs.push(path);
    }
    trippySquares.push(tripSqs);
    setTimeout(function(){
        squareState = false;
    }, 100);
}

function zigZagger(){
    var colors = ["#b348ff", "#916ff2", "#6f97e5", "#4ec0db", "#2ce7cc"];
    var randomPt = randomPoint(0.6, 0.9, 0.3, 0.6);
    var zags = [];
    for(var i = 0; i < 10; i++){
        var path = new Path();
        path.add(randomPt + new Point(15 * i, 20 * Math.pow(-1, i)));
        path.add(randomPt + new Point(15 * (i + 1), 20 * Math.pow(-1, i + 1)));
        path.strokeColor = colors[i%5];
        path.strokeWidth = 10;
        path.strokeCap = 'round';
        zags.push(path);
    }
    zigZags.push(zags);
}

function lineWave(){
    var colors = ["#ff89ce", "#e3a7dd", "#c2c2e7", "#a1dbf2", "#83f8ff"];
    var randomPt = randomPoint(0.4, 0.6, 0.15, 0.3);
    var zags = [];
    for(var i = 0; i < 15; i++){
        var path = new Path();
        path.add(randomPt + new Point(15 * i, 20 * Math.pow(-1, i)));
        path.add(randomPt + new Point(15 * i, 20 * Math.pow(-1, i + 1)));
        path.strokeColor = colors[i%5];
        path.strokeWidth = 10;
        path.strokeCap = 'round';
        zags.push(path);
    }
    zigZags.push(zags);
}

function dropBall(){
    var colors = ["#BFDBBD", "#BED8D8", "#CBBED8", "#F0A4C2"];
    var randomPt = randomPoint(0.4, 0.6, 0.4, 0.6);
    fallingBalls.push(collapsingCircle(colors[Math.floor(Math.random() * 4)], 70, randomPt));
}

function expandBall(){
    var colors = ["#59b7c1", "#27a0a3", "#339086", "#b9db59", "#ddfd64"];
    var randomPt = randomPoint(0.7, 0.9, 0.7, 0.9);
    expandingBalls.push(collapsingCircle(colors[Math.floor(Math.random() * 5)], 50, randomPt));
}

function triangle(){
    var colors = ["#1a4572", "#5990a5", "#a4668d", "#e097a0", "#fdebd3", "#b8a78b"];
    var randomPt = randomPoint(0.35, 0.55, 0.35, 0.55);
    var triangle = new Path.RegularPolygon(randomPt, 3, 50);
    triangle.fillColor = colors[Math.floor(Math.random() * 5)];
    trianglesArr.push(triangle);
}

function risingArc(){
    var colors = ["#9c296e", "#db2e5b", "#fd9f5f", "#fee56e", "#ffefbb"];
    var randomPt = randomPoint(0.1, 0.3, 0.6, 0.8);
    var arcs = [];
    for(var i = 0; i < 5; i++){
        var arc = new Path.Arc(randomPt + new Point(-i*25, -i * 30), randomPt + new Point(25, i * 30 + 15), randomPt + new Point(50 + i*25, -i * 30));
        arc.strokeColor = colors[i];
        arc.strokeWidth = 10;
        arc.strokeCap = 'round';
        arcs.push(arc);
    }
    risingArcs.push(arcs);
}

function openingCircle(){
    var colors = ["#410101", "#700734", "#AA0084", "#FFC47B", "#FFFF86"]; 
    var randomPt = randomPoint(0.65, 0.85, 0.4, 0.6);
    var index = Math.floor(Math.random() * 5);
    var circle = collapsingCircle(colors[index], 100, randomPt);
    var circle2 = collapsingCircle(colors[Math.abs(index - 4)], 75, randomPt);
    expandingBalls.push(circle2);
    collapsingCircles.push(circle);
}

function slash(){
    var colors = ["#c42f34", "#ed534e", "#ef8f69", "#f4cd8d"];
    var randomPt = randomPoint(0.3, 0.5, -0.2, 0);
    var path = new Path();
    path.add(randomPt + new Point(-40, -60));
    path.add(randomPt + new Point(40, 60));
    path.strokeColor = colors[Math.floor(Math.random() * 4)];
    path.strokeCap = 'round';
    path.strokeWidth = 30;
    slashes.push(path);
}

function risingBallLeft(){
    var colors = ["#DA742C", "#E8A846", "#D5DE85", "#FF9A7D", "#E074AE", "#558AC0"];
    var randomPt = randomPoint(0.5, 0.7, 0.6, 0.8);
    var circle = collapsingCircle(colors[Math.floor(Math.random() * 6)], 100, randomPt);
    risingBallsLeft.push(circle);
}

function risingBallRight(){
    var colors = ["#4F002F", "#770046", "#9E2046", "#E95F46", "#FA973F"];
    var randomPt = randomPoint(0.3, 0.5, 0.6, 0.8);
    var circle = collapsingCircle(colors[Math.floor(Math.random() * 5)], 100, randomPt);
    risingBallsRight.push(circle);
}

function expandingSquare(){
    var colors = ["#410101", "#700734", "#AA0084", "#FFC47B", "#FFFF86"];
    var randomPt = randomPoint(0.3, 0.5, 0.3, 0.5);
    var square = new Rectangle(randomPt, randomPt + new Point(50, 50));
    var sqPath = new Path.Rectangle(square);
    sqPath.strokeColor = colors[Math.floor(Math.random() * 5)];
    sqPath.strokeWidth = 15;
    sqPath.strokeJoin = 'round';
    expandingBalls.push(sqPath);
}

function squareAndCircle(){
    var colors = ["#340065", "#8400A4", "#E8169B", "#FF9B31", "#FFDF34", "#84EEFE"];
    var randomPt = randomPoint(0.4, 0.6, 0.7, 0.9);
    var square = new Rectangle(randomPt + new Point(-100, -100), randomPt + new Point(100, 100));
    var sqPath = new Path.Rectangle(square);
    var index = Math.floor(Math.random() * 6)
    sqPath.strokeColor = colors[index];
    sqPath.strokeWidth = 15;
    sqPath.strokeJoin = 'round';
    sqPath.fillColor = sqPath.strokeColor;
    collapsingCircles.push(sqPath);
    var circle = collapsingCircle(colors[Math.abs(index - 5)], 80, randomPt);
    expandingBalls.push(circle);
}

function wobblyBall(){
    // var colors = ["#006569", "#6BA8E4", "#C9C7FC", "#FBDCFF", "#FF97CA"];
    var colors = ["#133C55", "#386FA4", "#59A5D8", "#84D2F6", "#91E5F6"];
    var randomPt = randomPoint(0.7, 0.9, 0.4, 0.6);
    var circle = collapsingCircle(colors[Math.floor(Math.random() * 5)], 80, randomPt);
    wobblyBalls.push(circle);
}

function rotateLine(){
    var colors = ["#1a4572", "#5990a5", "#a4668d", "#e097a0", "#fdebd3", "#b8a78b"];
    var randomPt = randomPoint(0.25, 0.45, 0.3, 0.5);
    var index = Math.floor(Math.random() * 5);
    var circle = collapsingCircle(colors[index], 80, randomPt);
    collapsingCircles.push(circle);
    var path = new Path({
        center: randomPt
    });
    path.add(randomPt + new Point(0, 50));
    path.add(randomPt + new Point(0, 100));
    path.strokeColor = colors[4 - index];
    path.strokeWidth = 10;
    path.strokeCap = 'round';
    rotatingLines.push(path);
}

function bouncingBall(){
    var colors = ["#1a4572", "#5990a5", "#a4668d", "#e097a0", "#fdebd3", "#b8a78b"];
    var randomPt = randomPoint(0.6, 0.61, 0.5, 0.7);
    var index = Math.floor(Math.random() * 5);
    var circle = collapsingCircle(colors[index], 80, randomPt);
    bouncingBalls.push(circle);
}










var keyData = {
    q: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/bubbles.mp3']
            });
            sound.play();
            bubbler("#56B8BD" ,"#56BD8F");
        }
    },
    w: {
        // collapsing circle
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/clay.mp3']
            });

            sound.play();
            collapsingCircles.push(collapsingCircle("#4dd2ff", 500, randomPoint(0, 0.25, 0.75, 1)));

        }

    },
    e: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/confetti.mp3']
            });
            
            if(!confettiState){
                confettiMachine();
                sound.play();
            }
            
        }
    },
    r: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/corona.mp3']
            });
            sound.play();
            lineWiggle("counterclockwise");
            
        }
    },
    t: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/dotted-spiral.mp3']
            });
            if(!squareState){
                sound.play();
                trippySquare();
            }
            
        }
    },
    y: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/flash-1.mp3']
            });
            sound.play();
            lineWiggle("clockwise");
        }
    },
    u: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/flash-2.mp3']
            });
            sound.play();
            zigZagger();
        }
    },
    i: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/flash-3.mp3']
            });
            sound.play();
            dropBall();
        }
    },
    o: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/glimmer.mp3']
            });
            sound.play();
            lineWave();
        }
    },
    p: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/moon.mp3']
            });
            sound.play();
            expandBall();
        }
    },
    a: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/pinwheel.mp3']
            });
            sound.play();
            openingCircle();
            
        }
    },
    s: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/piston-1.mp3']
            });
            sound.play();
            triangle();
        }
    },
    d: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/piston-2.mp3']
            });
            sound.play();
            risingArc();
        }
    },
    f: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/piston-3.mp3']
            });
            sound.play();
            slash();
        }
    },
    g: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/prism-1.mp3']
            });
            sound.play();
            risingBallLeft();
        }
    },
    h: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/prism-2.mp3']
            });
            sound.play();
            expandingSquare();
        }
    },
    j: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/prism-3.mp3']
            });
            sound.play();
            risingBallRight();
        }
    },
    k: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/splits.mp3']
            });
            sound.play();
            squareAndCircle();
        }
    },
    l: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/squiggle.mp3']
            });
            sound.play();
            wobblyBall();
        }
    },
    z: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/strike.mp3']
            });
            sound.play();
            rotateLine();
        }
    },
    x: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/suspension.mp3']
            });
            sound.play();
            bouncingBall();
        }
    },
    c: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/timer.mp3']
            });
            sound.play();
        }
    },
    v: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/ufo.mp3']
            });
            sound.play();
        }
    },
    b: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/veil.mp3']
            });
            sound.play();
        }
    },
    n: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/wipe.mp3']
            });
            sound.play();
        }
    },
    m: {
        method: function(){
            var sound = new Howl({
                src: ['assets/sounds/zig-zag.mp3']
            });
            sound.play();
        }
    },
    1: {
        method: function(){
            console.log(collapsingCircles, bubblesArr, confettis, wigglyLinesCW, wigglyLinesCCW, trippySquares, zigZags, fallingBalls, expandingBalls, trianglesArr, risingArcs, slashes);
        }
    }
}


    