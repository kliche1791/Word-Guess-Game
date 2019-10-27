// Global Vars 
var words = ["cristianoronaldo","leonelmessi","jamesrodriguez","griezman","neymar","mbappe"];
var randomWordL = "";
var splitWord = [];
var blanks = 0;
var wins = 0;
var guessesRem = 10;
var wrongGuess = [];
var blanksAndCorrect = [];

// vars for call the audio
var ca = document.getElementById("cristiano");
var ma = document.getElementById("messi");
var ja = document.getElementById("james");
var na = document.getElementById("neymar");
var ga = document.getElementById("griezman");
var pa = document.getElementById("mbappe");

// this function starts the game 
function GameStart(){

    // takes a random argument of the array
    randomWordL = words[Math.floor(Math.random()*words.length)];
    
    splitWord = randomWordL.split("");

    blanks = splitWord.length;

    // for loop for put _ depends of the length of the random argument 
    for (var i=0; i < blanks; i++){
        blanksAndCorrect.push("_");
    }

    //Conditional that shows a hint  depend of the name of the argument
    if(randomWordL === "cristianoronaldo"){
        document.getElementById("hint").innerHTML = "He plays for Juventus and won five Ballon d’Or awards (player of the year).";
    }

    if(randomWordL === "leonelmessi"){
        document.getElementById("hint").innerHTML = "He plays for Barcelona and is widely recognized as the best player in the world and rated by some commentators, coaches and players as the greatest footballer of all time.";
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


    //prints the hide name.
    document.getElementById("currentWord").innerHTML = "  " + blanksAndCorrect.join("  ");
    console.log(randomWordL);
    console.log(blanksAndCorrect);
}


//Function that check the letters with the hide name
function checkLetters(guesserPress){

    // begin with a false argument;
    var letterW = false;

     //check if the letter pressed is the same that the letter in the array and give a true on letterW
    for (var i = 0; i < blanks; i++) {

        
        if (randomWordL[i] == guesserPress) {

            
            letterW = true;
            
            
        } 

    }

    //if letter is true start showing the letter correct
    if(letterW){

        for(var i=0; i < blanks; i++){

            if(randomWordL[i] == guesserPress){
                blanksAndCorrect[i] = guesserPress;
                document.getElementById("currentWord").innerHTML = "  " + blanksAndCorrect.join("  ");
            }
        }

    // if not, start to subtract by 1 the var guessesRem and shows the incorrect letter    
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


// function that reset all the values on the game
function reset() {
    guessesRem= 10;
    wrongGuess = [];
    blanksAndCorrect = [];
    document.getElementById("img").src = "./assets/images/guess.jpg";
    document.getElementById("reset").style.display = "none"; 
    document.getElementById("remain").innerHTML = guessesRem;
    document.getElementById("showgu").innerHTML = "  " + wrongGuess.join("  ");
    document.getElementById("display").innerHTML = "";
    ca.pause();
    ma.pause();
    ja.pause();
    na.pause();
    ga.pause();
    pa.pause();
    GameStart();
}


//Function that starts when the name is guessed
function winner(){
   
   //combine the arguments on the array blanksAndCorrect ant convert into a string 
   var  correctW = blanksAndCorrect.join("");
    console.log(correctW);

    //Conditional that if the two var are the same, enter to show the correct player depend of the correcW variable
    if(randomWordL===correctW){
        
        //show the image, name, play sound, count wins and active the button play again depends of the name on CorrectW
        if(correctW === "cristianoronaldo"){

        document.getElementById("img").src = "./assets/images/cristiano_ronaldo.jpg";

        document.getElementById("display").innerHTML = "CRISTIANO RONALDO";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;

        ca.play();

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }


    if(correctW === "leonelmessi"){

        document.getElementById("img").src = "./assets/images/messi.jpg";

        document.getElementById("display").innerHTML = "LEONEL MESSI";

        document.getElementById("reset").style.display = "inline-block"; 

        wins++;
        ma.play();

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }

    if(correctW === "griezman"){

        document.getElementById("img").src = "./assets/images/griezman.jpg";

        document.getElementById("display").innerHTML = "ANTOINE GRIEZMAN";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;
        ga.play();

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }

    if(correctW === "jamesrodriguez"){

        document.getElementById("img").src = "./assets/images/james.jpg";

        document.getElementById("display").innerHTML = "JAMES RODRIGUEZ";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;
        ja.play();

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }

    if(correctW === "neymar"){

        document.getElementById("img").src = "./assets/images/neymar.jpg";

        document.getElementById("display").innerHTML = "NEYMAR JR";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;
        na.play();

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }

    if(correctW === "mbappe"){

        document.getElementById("img").src = "./assets/images/mbappe.jpg";

        document.getElementById("display").innerHTML = "KYLLIAN MBAPPE";

        document.getElementById("reset").style.display = "inline-block"; 
    
        wins++;
        pa.play();

        document.getElementById("win").innerHTML = wins;

        console.log("entro");
    }




    }
}


//Function that check if the guessrem is 0 reset the game
function remaining(){

    if(guessesRem===0){
        alert("YOU LOST, TRY AGAIN");
        reset();
    }
}



//start the game 
GameStart();

//if the user press a key active the other functions 
document.onkeyup = function(event) {
    var guesse = String.fromCharCode(event.keyCode).toLowerCase();
   checkLetters(guesse);
    winner();
    remaining();

  };