
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
        document.getElementById("hint").innerHTML = "He plays for Juventus and won five Ballon d’Or awards (player of the year).";
    }

    if(randomWordL === "leonelmessi"){
        document.getElementById("hint").innerHTML = "He plays for Barcelona and widely recognized as the best player in the world and rated by some commentators, coaches and players as the greatest footballer of all time.";
    }

    if(randomWordL === "jamesrodriguez"){
        document.getElementById("hint").innerHTML = "Colombian Soccer player that plays for Real Madrid";
    }

    if(randomWordL === "griezman"){
        document.getElementById("hint").innerHTML = "He plays for Barcelona and Recently won the World Cup in 2018";
    }

    if(randomWordL === "neymar"){
        document.getElementById("hint").innerHTML = "He plays for PSG and the most expensive purchase from the team";
    }

    if(randomWordL === "mbappe"){
        document.getElementById("hint").innerHTML = "He Plays for PSG and He is the second teenager in history to score in a World Cup final.";
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
    guessesRem= 10;
    wrongGuess = [];
    blanksAndCorrect = [];
    document.getElementById("img").src = "./assets/images/guess.jpg";
    document.getElementById("reset").style.display = "none"; 
    document.getElementById("remain").innerHTML = guessesRem;
    document.getElementById("showgu").innerHTML = "  " + wrongGuess.join("  ");
    GameStart();
}

function winner(){
   var  correctW = blanksAndCorrect.join("");
    console.log(correctW);
    if(randomWordL===correctW){
        
        if(correctW === "cristianoronaldo"){

        document.getElementById("img").src = "./assets/images/cristiano_ronaldo.jpg";

        document.getElementById("display").innerHTML = "CRISTIANO RONALDO";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }


    if(correctW === "leonelmessi"){

        document.getElementById("img").src = "./assets/images/messi.jpg";

        document.getElementById("display").innerHTML = "LEONEL MESSI";

        document.getElementById("reset").style.display = "inline-block"; 

        wins++;

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }

    if(correctW === "griezman"){

        document.getElementById("img").src = "./assets/images/griezman.jpg";

        document.getElementById("display").innerHTML = "ANTOINE GRIEZMAN";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }

    if(correctW === "jamesrodriguez"){

        document.getElementById("img").src = "./assets/images/james.jpg";

        document.getElementById("display").innerHTML = "JAMES RODRIGUEZ";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }

    if(correctW === "neymar"){

        document.getElementById("img").src = "./assets/images/neymar.jpg";

        document.getElementById("display").innerHTML = "NEYMAR JR";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }

    if(correctW === "mbappe"){

        document.getElementById("img").src = "./assets/images/mbappe.jpg";

        document.getElementById("display").innerHTML = "KYLLIAN MBAPPE";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }




    }
}



function remaining(){

    if(guessesRem===0){
        document.getElementById("display").innerHTML = "TRY AGAIN";
        reset();
    }
}




GameStart();

document.onkeyup = function(event) {
    var guesse = String.fromCharCode(event.keyCode).toLowerCase();
   checkLetters(guesse);
    winner();
    remaining();

  };