var hardnesslevel = 1;
function please() {
    hardnesslevel = 1;
}
// code for testing arrow keys and level
function myFunction(event) {
    var key = event.keyCode;
    if (key == 40) {
    	moveDown();
    }
    if (key == 38) {
    	moveUp();
    }
    if (key == 49) {
    	hardnesslevel = 1;
    }
    if (key == 50) {
    	hardnesslevel = 1.5;
        slevel = 5;
    }
    if (key == 51) {
    	hardnesslevel = 2;
        slevel = 10;
    }
    if (key == 13) {
    	startGame();
    }
    if (key == 83) {
        up();
    }
    if (key == 87) {
        down();
    }
}
//creating all the game pieces
var myGamePiece, myGameAI, myGameBoard;
//initializing game pieces
function startGame() {
    myGamePiece = new component(15, 15, "red", 200, 250);
    myGameAI = new component(15, 50, "blue", 10, 150);
    myGameBoard = new component(15, 50, "black", 455, 150);
    myGameArea.start();
}

//making canvas functional
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        this.otherinterval = setInterval(level, 5000)
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
//making components functional
function component(width, height, color, x, y, type) {
	this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    	}
     
}
//keeps the paddles on screen
var paddleplay = setInterval(paddlein, 20);
function paddlein() {
    if (myGameBoard.y > 220) {
        myGameBoard.y -= 10;
    } else if (myGameBoard.y < 1) {
                myGameBoard.y += 10;
    } else if (myGameAI.y > 220) {
                myGameAI.y -= 10;
    } else if (myGameAI.y < 1) {
                myGameAI.y += 10;
    }
}
//direction
xv = -3 * hardnesslevel;
yv = +3 * hardnesslevel;
//keeps ball in play and test for losser
var hope = setInterval(borderCheck, 20);
function borderCheck() {
    if (myGamePiece.y < 0) {
        yv = 3 * hardnesslevel;
    }
    if (myGamePiece.x < 0) {
        alert('Player 2 Won');
        xv = 3 * hardnesslevel;
        yv = -3 * hardnesslevel;
        myGamePiece.x = 100;
    }
    if (myGamePiece.y > 255) {
        yv = -3 * hardnesslevel;
    }
    if (myGamePiece.x > 465) {
        alert('Player 1 Won');
        hardnesslevel = 1;
        slevel = 0;
        xv = 3 * hardnesslevel;
        yv = -3 * hardnesslevel;
        myGamePiece.x = 100;
    }
}
//bounces ball off paddles
var paddles = setInterval(touch, 20);
function touch() {
    if (myGamePiece.y < (myGameBoard.y + 35) && myGamePiece.x > (myGameBoard.x - 15) && myGamePiece.y > (myGameBoard.y -20)) {
    	xv = -3 * hardnesslevel;
    }
}
var paddles1 = setInterval(touch1, 20);
function touch1() {
    if (myGamePiece.y < (myGameAI.y + 35) && myGamePiece.x < (myGameAI.x + 15) && myGamePiece.y > (myGameAI.y - 20)) {
    	xv = 3 * hardnesslevel;
    }
}


//keeps game area clean and runs game loop
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x += xv;
    myGamePiece.y += yv;
    myGameAI.update();
    myGameBoard.update();
    myGamePiece.update();
}
//once arrow up pressed, code for up
function moveUp() {
    myGameBoard.y -= 10;
}
//once arrow down pressed, code for down
function moveDown() {
    myGameBoard.y += 10;
}

//makes the game harder and shows level
var slevel = 0;
function level() {
    hardnesslevel += .1;
    slevel += 1;
    document.getElementById('demo').innerHTML = ("LEVEL " + slevel);
}

function up() {
    myGameAI.y += 10;
}

function down() {
    myGameAI.y -= 10;
}