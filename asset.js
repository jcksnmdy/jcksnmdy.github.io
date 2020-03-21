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
    ,'Photographer'];
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
    'River-dance',
];
var count = 0
function assignWords() {
    document.getElementById('card1Word').innerHTML = charadeWords[count];
    count += 1;
    document.getElementById('card2Word').innerHTML = charadeWords[count];
    count += 1;
    document.getElementById('card3Word').innerHTML = charadeWords[count];
    count += 1;
    document.getElementById('card4Word').innerHTML = charadeWords[count];
    count += 1;
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
function switchTeams() {
    clearTimeout();
    if (team == 'blue') {
        team = 'red';
    } else {
        team = 'blue';
    }
    document.getElementById('box1').style.visibility = 'visible';
    document.getElementById('box2').style.visibility = 'visible';
    document.getElementById('box3').style.visibility = 'visible';
    document.getElementById('box4').style.visibility = 'visible';
}
function pointUp() {
    if (team == 'blue') {
        var score = document.getElementById('bluePoints');
        var number = score.innerHTML;
        number++;
        score.innerHTML = number;
    } else {
        var scoree = document.getElementById('redPoints');
        var numbere = scoree.innerHTML;
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
function start() {
    setTimeout(card1Down, 15000);
    setTimeout(card2Down, 30000);
    setTimeout(card3Down, 45000);
    setTimeout(card4Down, 60000);
}