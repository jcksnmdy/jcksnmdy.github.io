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
function pointUp() {
    var score = document.getElementById('points');
    var number = score.innerHTML;
    number++;
    score.innerHTML = number;
}