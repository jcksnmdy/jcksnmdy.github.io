var charadeWords = [
    'Airplane'
    ,'Ears'
    ,'Piano'
    ,'Angry'
    ,'Elephant'
    ,'Pinch'
    ,'Baby'
    ,'Fish'
    ,'Reach'
    ,'Ball'
    ,'Flick'
    ,'Remote'
    ,'Baseball'
    ,'Football'
    ,'Roll'
    ,'Basketball'
    ,'Fork'
    ,'Sad'
    ,'Bounce'
    ,'Giggle'
    ,'Scissors'
    ,'Cat'
    ,'Golf'
    ,'Skip'
    ,'Chicken'
    ,'Guitar'
    ,'Sneeze'
    ,'Chimpanzee'
    ,'Hammer'
    ,'Spin'
    ,'Clap'
    ,'Happy'
    ,'Spoon'
    ,'Cough'
    ,'Horns'
    ,'Stomp'
    ,'Cry'
    ,'Joke'
    ,'Stop'
    ,'Dog'
    ,'Mime'
    ,'Tail'
    ,'Drink'
    ,'Penguin'
    ,'Toothbrush'
    ,'Drums'
    ,'Phone'
    ,'Wiggle'
    ,'Duck'
    ,'Photographer',
    'Archer',
    'Ghost',
    'Rock-star',
    'Balance-beam',
    'Haircut',
    'Shoelaces',
    'Ballet',
    'Halo',
    'Sick',
    'Balloon',
    'Hiccup',
    'Singer',
    'Banana-peel',
    'Hot-dog',
    'Skateboard',
    'Book',
    'Hungry',
    'Slippery',
    'Braces',
    'Hurt',
    'Soccer',
    'Button',
    'Ice-skating',
    'Strong',
    'Car',
    'Karate',
    'Stubbed-toe',
    'Cheers',
    'Ladder',
    'Sunshine',
    'Clown',
    'Light-bulb',
    'Surprise',
    'Dinosaur',
    'Limbo',
    'Swing',
    'Disco',
    'Macarena',
    'Sword',
    'Dizzy',
    'Paint',
    'Tap-dance',
    'Fart',
    'Pirate',
    'Wheelbarrow',
    'Fishing',
    'Read',
    'Gallop',
'River-dance'];
function reset1(){
    var container = document.getElementById("container1");
    container.innerHTML= html;
}                
var html;
window.onload = function(){
	html = document.getElementById('container1').innerHTML;
}; 
var count = 0
var hardCount=50;
function assignWords() {
    console.log(hardCount);
    var x = document.getElementById("difficulty").value;
    console.log(x);
    if (x == '2') {
        console.log("Hard")
        count += 1;
        hardCount = count+50;
        document.getElementById('card1Word').innerHTML = charadeWords[hardCount];
        count += 1;
        hardCount = count+50;
        document.getElementById('card2Word').innerHTML = charadeWords[hardCount];
        count += 1;
        hardCount = count+50;
        document.getElementById('card3Word').innerHTML = charadeWords[hardCount];
        count += 1;
        hardCount = count+50;
        document.getElementById('card4Word').innerHTML = charadeWords[hardCount];
    } else {
        document.getElementById('card1Word').innerHTML = charadeWords[count];
        count += 1;
        hardCount = count;
        document.getElementById('card2Word').innerHTML = charadeWords[count];
        count += 1;
        hardCount = count;
        document.getElementById('card3Word').innerHTML = charadeWords[count];
        count += 1;
        hardCount = count;
        document.getElementById('card4Word').innerHTML = charadeWords[count];
        count += 1;
        hardCount = count;
    }
    if (hardCount > 50) {
        document.getElementById('card1Word').style.backgroundColor = 'red';
        document.getElementById('card2Word').style.backgroundColor = 'red';
        document.getElementById('card3Word').style.backgroundColor = 'red';
        document.getElementById('card4Word').style.backgroundColor = 'red';
    } else {
        document.getElementById('card1Word').style.backgroundColor = 'green';
        document.getElementById('card2Word').style.backgroundColor = 'green';
        document.getElementById('card3Word').style.backgroundColor = 'green';
        document.getElementById('card4Word').style.backgroundColor = 'green';
    }
}
function allowDrop(ev) { 
    ev.preventDefault(); 
} 
      
function dragStart(ev) { 
    ev.dataTransfer.setData("text", ev.target.id); 
} 
      
function dragDrop(ev) { 
    ev.preventDefault(); 
    var data = ev.dataTransfer.getData("text"); 
    ev.target.appendChild(document.getElementById(data)); 
} 
var team = 'blue';
function switchToBlue() {
    team = 'blue'
}
function switchToRed() {
    team = 'red'
}
function switchToYellow() {
    team = 'yellow'
}
function switchToGreen() {
    team = 'green'
}
function switchToPurple() {
    team = 'purple'
}

function switchTeams() {
    clearTimeout(card1card);
    console.log("Card 1 down stopped");
    clearTimeout(card2card);
    console.log("Card 2 down stopped");
    working = false;
    clearTimeout(card3card);
    console.log("Card 3 down stopped");
    clearTimeout(card4card);
    console.log("Card 4 down stopped");
    clearTimeout(card1card1);
    clearTimeout(card2card2);
    clearTimeout(card3card3);
    clearTimeout(card4card4);
    reset1();
    // if (team == 'blue') {
    //     team = 'red';
    // } else {
    //     team = 'blue';
    // }
    document.getElementById('box1').style.visibility = 'visible';
    document.getElementById('box2').style.visibility = 'visible';
    document.getElementById('box3').style.visibility = 'visible';
    document.getElementById('box4').style.visibility = 'visible';
    document.getElementById('box1').style.opacity = '1';
    document.getElementById('box2').style.opacity = '1';
    document.getElementById('box3').style.opacity = '1';
    document.getElementById('box4').style.opacity = '1';
}
var countt = 0;
function crud() {
    boxPoint()
    countt -= 0.02;
    document.getElementById('box1').style.opacity = countt;
}
function crudd() {
    boxxPoint()
    countt -= 0.02;
    document.getElementById('box2').style.opacity = countt;
}
function cruddd() {
    boxxxPoint()
    countt -= 0.02;
    document.getElementById('box3').style.opacity = countt;
}
function crudddd() {
    boxxxxPoint()
    countt -= 0.02;
    document.getElementById('box4').style.opacity = countt;
}
function boxPoint() {
    if (countt > 0) {
        setTimeout(function(){
                crud();
        }, 100);
    }
    console.log(countt);
}
function boxxPoint() {
    if (countt > 0) {
        setTimeout(function(){
                crudd();
        }, 100);
    }
    console.log(countt);
}
function boxxxPoint() {
    if (countt > 0) {
        setTimeout(function(){
                cruddd();
        }, 100);
    }
    console.log(countt);
}
function boxxxxPoint() {
    if (countt > 0) {
        setTimeout(function(){
                crudddd();
        }, 100);
    }
    console.log(countt);
}
idk = setInterval(constant, 500);
function constant() {
    if (countt < 0) {
        document.getElementById('plusone').style.visibility = 'hidden';
    }
}
function fixCount() {
    count = 0;
}
function pointUp(boxId) {
    countt = 0.3;
    if (boxId == '1') {
        boxPoint();
        document.getElementById('plusone').style.visibility = 'visible';
        setTimeout(function() {
            document.getElementById('box1').style.visibility = 'hidden';
            document.getElementById('plusone').style.visibility = 'hidden';
        }, 800);    }
    if (boxId == '2') {
        boxxPoint();
        document.getElementById('plusone').style.visibility = 'visible';
        setTimeout(function() {
            document.getElementById('box2').style.visibility = 'hidden';
            document.getElementById('plusone').style.visibility = 'hidden';
        }, 800);
    }
    if (boxId == '3') {
        boxxxPoint();
        document.getElementById('plusone').style.visibility = 'visible';
        setTimeout(function() {
            document.getElementById('box3').style.visibility = 'hidden';
            document.getElementById('plusone').style.visibility = 'hidden';
        }, 800);    }
    if (boxId == '4') {
        boxxxxPoint();
        document.getElementById('plusone').style.visibility = 'visible';
        setTimeout(function() {
            document.getElementById('box4').style.visibility = 'hidden';
            document.getElementById('plusone').style.visibility = 'hidden';
        }, 800);    }
    if (team == 'blue') {
        var score = document.getElementById('bluePoints');
        var number = score.innerHTML;
        if (hardCount > 50) {
            number++;
        }
        number++;
        score.innerHTML = number;
    } if (team == 'yellow') {
        var score = document.getElementById('yellowPoints');
        var number = score.innerHTML;
        if (hardCount > 50) {
            number++;
        }
        number++;
        score.innerHTML = number;
    } if (team == 'green') {
        var score = document.getElementById('greenPoints');
        var number = score.innerHTML;
        if (hardCount > 50) {
            number++;
        }
        number++;
        score.innerHTML = number;
    } if (team == 'purple') {
        var score = document.getElementById('purplePoints');
        var number = score.innerHTML;
        if (hardCount > 50) {
            number++;
        }
        number++;
        score.innerHTML = number;
    } if (team == 'red') {
        var scoree = document.getElementById('redPoints');
        var numbere = scoree.innerHTML;
        if (count > 50) {
            numbere++;
        }
        numbere++;
        scoree.innerHTML = numbere;
    }
}
function card1Down() {
    document.getElementById('box1').style.visibility = 'hidden';
}
function card2Down() {
    document.getElementById('box2').style.visibility = 'hidden';
}
function card3Down() {
    document.getElementById('box3').style.visibility = 'hidden';
}
function card4Down() {
    document.getElementById('box4').style.visibility = 'hidden';
}
var card1card, card2card, card3card, card4card;
function start() {
    document.getElementById('box1').style.visibility = 'visible';
    document.getElementById('box2').style.visibility = 'visible';
    document.getElementById('box3').style.visibility = 'visible';
    document.getElementById('box4').style.visibility = 'visible';
    document.getElementById('box1').style.opacity = '1';
    document.getElementById('box2').style.opacity = '1';
    document.getElementById('box3').style.opacity = '1';
    document.getElementById('box4').style.opacity = '1';
    card1card = setTimeout(card1Down, 9000);
    card1card1 = setTimeout(function() {
        document.getElementById('box1').style.backgroundColor = 'red';
    }, 6000);
    console.log("Card 1 down");
    card2card = setTimeout(card2Down, 17000);
    card2card2 = setTimeout(function() {
        document.getElementById('box2').style.backgroundColor = 'red';
    }, 14000);
    console.log("Card 2 down");
    card3card = setTimeout(card3Down, 25000);
    card3card3 = setTimeout(function() {
        document.getElementById('box3').style.backgroundColor = 'red';
    }, 22000);
    console.log("Card 3 down");
    card4card = setTimeout(card4Down, 32000);
    card4card4 = setTimeout(function() {
        document.getElementById('box4').style.backgroundColor = 'red';
    }, 29000);
    console.log("Card 4 down");
}