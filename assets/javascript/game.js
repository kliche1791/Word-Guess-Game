
var words = ["cristianoronaldo","leonelmessi","jamesrodriguez","griezman","neymar","mbappe"];
var randomWordL = "";
var splitWord = [];
var blanks = 0;
var wins = 0;
var guessesRem = 10;
var wrongGuess = [];
var blanksAndCorrect = [];


function GameStart(){
    randomWordL = words[Math.floor(Math.random()*words.length)];
    
    splitWord = randomWordL.split("");

    blanks = splitWord.length;

    for (var i=0; i < blanks; i++){
        blanksAndCorrect.push("_");
    }

    if(randomWordL === "cristianoronaldo"){
        document.getElementById("hint").innerHTML = "He used to played for Real Madrid";
    }

    if(randomWordL === "leonelmessi"){
        document.getElementById("hint").innerHTML = "He used to played for Barcelona";
    }

    if(randomWordL === "jamesrodriguez"){
        document.getElementById("hint").innerHTML = "He used to played for Bayer Munich";
    }

    if(randomWordL === "griezman"){
        document.getElementById("hint").innerHTML = "He used to played for Atletico de Madrid";
    }

    if(randomWordL === "neymar"){
        document.getElementById("hint").innerHTML = "He used to played for PSG";
    }

    if(randomWordL === "mbappe"){
        document.getElementById("hint").innerHTML = "He used to played for Monaco";
    }


    document.getElementById("currentWord").innerHTML = "  " + blanksAndCorrect.join("  ");
    console.log(randomWordL);
    console.log(splitWord);
    console.log(blanks);
    console.log(blanksAndCorrect);
}

function checkLetters(guesserPress){
    var letterW = false;
    for (var i = 0; i < blanks; i++) {
     
        if (randomWordL[i] == guesserPress) {


            letterW = true;
            //console.log(randomWordL[i]);
            
        } 

    }

    if(letterW){

        for(var i=0; i < blanks; i++){

            if(randomWordL[i] == guesserPress){
                blanksAndCorrect[i] = guesserPress;
                document.getElementById("currentWord").innerHTML = "  " + blanksAndCorrect.join("  ");
            }
        }
    } else {
        wrongGuess.push(guesserPress);

                document.getElementById("showgu").innerHTML = "  " + wrongGuess.join("  ");
                console.log(wrongGuess);
                guessesRem--;
                document.getElementById("remain").innerHTML = guessesRem;
                console.log(guessesRem);
     
}


   
    console.log(blanksAndCorrect);

}

function reset() {
    guessesRem= 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    document.getElementById("img").src = "./assets/images/guess.jpg";
    document.getElementById("reset").style.display = "none"; 
    GameStart();
}

function winner(){
   var  correctW = blanksAndCorrect.join("");
    console.log(correctW);
    if(randomWordL===correctW){
        document.getElementById("img").src = "./assets/images/cristiano_ronaldo.jpg";

        document.getElementById("display").innerHTML = "CRISTIANO RONALDO";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }


}




GameStart();

document.onkeyup = function(event) {
    var guesse = String.fromCharCode(event.keyCode).toLowerCase();
   checkLetters(guesse);
    winner();


  };