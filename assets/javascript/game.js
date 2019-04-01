//array for songs
var songList = ["wannabe", "macarena", "creep", "all" + "" + "star", "baby" + "" + "one" + "" + "more" + "" + "time", "closing" + "" + "time"
];

//select songs maybe math.random?
var songChoice = Math.floor(Math.random() * songList.length);
var choosenSongList = songList[songChoice];
var wins = 0;
var remainingGuess = 12;
var alreadyGuessed = [];
var rightSong = [];
var wrongSong = [];
var underScore = [];




//console song
console.log(choosenSongList);

//Manipulate dom
var underScoreDOM = document.getElementsByClassName("underScore");
var rightSongDOM = document.getElementsByClassName("wins");
var wrongSongDOM = document.getElementsByClassName("alreadyGuessed");
var remainingGuessDOM = document.getElementsByClassName("remainingGuess");

//   **********************************  Main    ******************************************

//currentWord (_) length selection?
var newunderScore = () => {
    for (i = 0; i < choosenSongList.length; i++) {
        underScore.push("_");
    }
    return underScore;
}
console.log(newunderScore());

//User Input: use event listener for key press
document.addEventListener("keypress", (event) => {
    // console.log(event);
    // Get the Unicode value: var x = event.keyCode;
    var userInput = event.key;
    userInput = userInput.toLowerCase();
    // console.log(keyCode);
    // Convert the value into a character: var y = String.fromCharCode(x);
    var keysongList = String.fromCharCode(event.keyCode);
    // console.log(choosenSongList.indexOf(keysongList));
    //console.log(keysongList);
    // indexof() returns index of the calling string \
    //User guess=correct

    if (choosenSongList.indexOf(keysongList) > -1) {
        console.log(true);
        // right guess added to correct
        rightSong.push(keysongList);
        console.log(rightSong);
        //Right key replaces underscore
        underScore[choosenSongList.indexOf(keysongList)] = keysongList;
        underScoreDOM[0].innerHTML = underScore.join(" ");
        underScore.join(" ")[0].innerHTML = rightSong; //fix this to make correct guess count as a win (get element by class
    }
    function correctGuess() {
        wins++;
        document.querySelector(".wins").innerHTML = "Wins: " + wins;
        newGame();
        document.querySelector(".alreadyGuessed").innerHTML = " ";
    }
    if (songList === songChoice) {
        correctGuess();
        wins++
    } else {
        wrongSong.push(keysongList);
        console.log(wrongSong);
        wrongSongDOM[0].innerHTML = wrongSong;
        remainingGuessDOM[0].innerHTML = remainingGuess--;
        wrongSong.push(userInput);

    }
    if (remainingGuess === 0) {
        gameEnd = true;
        return;
    }
    ;
});
