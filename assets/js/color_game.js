/* difficulties:
easy random
normal +- 100
hard +- 50
extreme +- 25 
insane +- 10 */
function getWinIndex(){
    return Math.floor(Math.random() * 6);
}

function win(winCol){
    squares.css("backgroundColor", winCol)
    squares.fadeTo(500, 1);
    $("#tryAgain")
        .removeClass("invisible")
        .text("Good job!");
    setTimeout(resetGame, 1000);
}

// add click listener for all squares
function addSquareListeners(){
    squares.on("click", function(){
        if(!animationState){
            $("#tryAgain").removeClass("invisible");
            var sq = $(this);
            if(sq.css("backgroundColor") === winningColor){
                win(winningColor);
            } else {
                animationState = true;
                sq.fadeTo(300, 0, function(){
                    animationState = false;
                });
            }
        }
    });
}

function generateColors(){
    var cols = [];
    var seed = [
        getValue(0, 255),
        getValue(0, 255),
        getValue(0, 255)
    ]
    for(var i = 0; i < squares.length; i++){
        cols.push(generateRGB(seed, diffs[difficulty]));
    }
    return cols;
}

function generateRGB(seed_, offset_){
    return `rgb(${getValue(seed_[0] - offset_, seed_[0] + offset_)}, ${getValue(seed_[1] - offset_, seed_[1] + offset_)}, ${getValue(seed_[2] - offset_, seed_[2] + offset_)}`;
}

function getValue(min, max){
    if(min < 0){ min = 0; }
    if(max > 255){ max = 255; }
    return Math.random() * (max - min) + min;
}

// fill with colors
function squareFiller(){
    animationState = true;
    squares.each(function(index){
        var sq = $(this);
        sq.css("opacity", 0.5);
        if(index === 5){
            sq.fadeTo(600, 1, function(){
                animationState = false;
            });
        } else {
            sq.fadeTo(600, 1);
        }
        sq.css("backgroundColor", colors[index]);
        if(index === winningIndex){
            winningColor = sq.css("backgroundColor");
        }
    });
    // update display text
    winDisplay.text(winningColor.toUpperCase());
    
}

function resetGame(){
    counter++;
    $('#tryAgain')
        .addClass("invisible")
        .text("Try Again");
    // if squares invisible, fadeto
    // if squares visible, transition color
    colors = generateColors();
    winningIndex = getWinIndex();
    console.log(winningIndex);
    squareFiller();
}

var animationState = false;
var difficulty = "Easy";
var diffs = {
    "Easy": 255,
    "Normal": 100,
    "Hard": 50,
    "Extreme": 25,
    "Insane": 10
};
var squares = $(".square");
// displayed rgb value
var winDisplay = $("#winningColor");
// choose winning square
var winningIndex = getWinIndex();
console.log(winningIndex);
var winningColor = "";
addSquareListeners();
var colors = generateColors();
var counter = 0;
// debugger;
squareFiller();
$('#newColors').on("click", resetGame);
$('#tryAgain').on("click", resetGame);
$('.difficulty').on("click", function(){
    $('.active').removeClass('active');
    $(this).addClass("active");
    difficulty = $(this).text();
    $('.dropdown-toggle').text(difficulty);
    resetGame();
});