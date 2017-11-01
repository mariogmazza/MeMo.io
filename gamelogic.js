var gameArr = [];
var userArr = [];
var gameOn = false;
var equalArr = true;
var gameArrCounter = 0;
var userArrCounter = 0;
var speed;
var tempColor;
var gameCall;
var levelCount = 1;
var gameRunning = false;
var bCheck = 0;
var bStrict = 0;
var strictMode = "OFF";
// ##########################################################
$(document).ready(function() {
  $(".toggleSW-left").click(function() {
    if (bCheck == 0) {
      gameOn = true;
      $("#switch").html("OFF");
      $("#switch").removeClass("toggleSW-left");
      $("#switch").addClass("toggleSW-right");
      $("#boxOut").html("READY!!!");
      bCheck = 1;
    } else if (bCheck == 1) {
      gameOn = false;
      gameRunning = false;
      $("#switch").html("ON");
      $("#switch").removeClass("toggleSW-right");
      $("#switch").addClass("toggleSW-left");
      bCheck = 0;
      gameArr = [];
      userArr = [];
      levelCount = 1;
      $("#boxOut").html("-----");
      $("#strict").css("background-color", "yellow");
      $("#start").css("background-color", "green");
      gameArrCounter = 0;
      userArrCounter = 0;
      strictMode = "OFF";
      bStrict = 0;
      equalArr = true;
      clearInterval(gameCall);
      $(".colorButton").css("pointer-events", "none");
    }
  });
  //###########################################################
  $("#start").click(function() {
      
    if (gameOn == true) {
      gameRunning = true;
      userArr = [];
      gameArr = [];
      gameArrCounter = 0;
      userArrCounter = 0;
      levelCount = 1;
      equalArr = true;
      getRandom(); // pushes a random button ID into gameArr[]
      clearInterval(gameCall);
      $(".colorButton").css("pointer-events", "none"); // it disables the buttons
      $("#start").css("background-color", "red");

      setTimeout(function() {
        gameCall = setInterval(playGame, 1000);
      }, 1000);

    }//if (gameOn == true) {

  });

  // #################################################################
  $("button").click(function() {
    if (gameOn == true && gameRunning == true) {
      if (event.which == 1) {
        var tempID = this.id;
        $("#sound" + tempID).get(0).cloneNode().play(); // sound to the button
        buttonClick(tempID); // calls visual click button
        userArr.push(tempID); // pushes current button ID when clicked
        userArrCounter++; // moves the index up
        for (var i = 0; i < userArr.length; i++) {
          // checks if game Array and user Array are the same
          if (gameArr[i] != userArr[i]) {
            equalArr = false;
          }
        }

        if (!equalArr) {
          $("#Wrong").get(0).cloneNode().play();
          $("#boxOut").html("NOPE!");
          userArr = [];
          gameArrCounter = 0;
          userArrCounter = 0;
          equalArr = true;
          $(".colorButton").css("pointer-events", "none");


          if (strictMode == "ON") {
            gameArr = [];
            levelCount = 1;
            getRandom();
            setTimeout(function() {
              gameCall = setInterval(playGame, speed);
            }, 1000);
          } 
          
          else {
            setTimeout(function() {
              gameCall = setInterval(playGame, speed);
            }, 1000);
          }

        } //if (!equalArr) {
        
        
        else {
          if (userArrCounter == gameArrCounter) {
            if (levelCount == 20) {
              clearInterval(gameCall);
              $("#boxOut").html("YOU WON!");
              winMode(); // GOTTA WORK ON THIS PART
            }
            if (equalArr == true) {
              levelCount++;
              userArr = [];
              gameArrCounter = 0;
              userArrCounter = 0;
              getRandom();
              if (levelCount < 4) {
                speed = 1000;
              } else if (levelCount == 5) {
                speed = 800;
              } else if (levelCount == 10) {
                speed = 600;
              } else if (levelCount == 15) {
                speed = 400;
              }
              console.log(speed);

              setTimeout(function() {
                gameCall = setInterval(playGame, speed);
              }, 1000);
              $(".colorButton").css("pointer-events", "none");
            } // end of if (equalArr)
          }
        } // edn of else
      } // end event.which
    } // FIRST "IF"
  });
  // #####################################################################
  $("#strict").click(function() {
    if (gameOn == true && gameRunning == false) {
      strictMode = "ON";
      if (bStrict == 0) {
        // $("#strict").addClass("strictON");
        //  $("#strict").css("color", "blue");
        $("#strict").css("background-color", "red");
        bStrict = 1;
      } else if (bStrict == 1) {
        //   $("#switch").removeClass("strictON");
        $("#strict").css("background-color", "yellow");
        bStrict = 0;
      }
    }
  });
  // ******************************************************************
  function buttonClick(ids) {
    setTimeout(function() {
      $("#" + ids).addClass("clicked");
    }, 200);
    setTimeout(function() {
      $("#" + ids).removeClass("clicked");
    }, 350);
  }
  // *****************************************************************
  function getRandom() {
    gameArr.push("button" + getRandomIntInclusive(1, 4));
  }
  // ******************************************************************
  function playGame() {
    $("#boxOut").html(levelCount);
    tempColor = gameArr[gameArrCounter]; // grabs one of the IDs pushed by getRandom()
    // console.log(tempColor);
    $("#sound" + tempColor).get(0).cloneNode().play(); // plays buttons sound
    buttonClick(tempColor);
    gameArrCounter++;
    if (gameArrCounter == gameArr.length) {
      clearInterval(gameCall);
      $(".colorButton").css("pointer-events", "auto");
    }
    // console.log("game counter: "+gameArrCounter);
    //  console.log("game Array length: "+gameArr.length);
  }
  // ******************************************************

  function winMode() {
    setTimeout(function() {
      userArr = [];
      gameArr = [];
      gameArrCounter = 0;
      userArrCounter = 0;
      levelCount = 1;
      strictMode = "OFF";
      // boxCount=0;
      $("#boxOut").html("--");
      equalArr = true;
      clearInterval(playGame);
      $(".fourButton").css("pointer-events", "none");
      // playGame();
      $("#strict").css("background-color", "yellow");
      $("#start").css("background-color", "green");
    }, 1000);
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
