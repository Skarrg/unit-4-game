

var characters = {
    "wizard": {
        name: "Wizard",
        playerImage: '<img src="assets/images/hero_wizard.png">',
        enemyImage: '<img src="assets/images/villain_wizard.png">',
        health: 80,
        attack: 30,
        counterAttack: 30
    },
    "paladin": {
        name: "Paladin",
        playerImage: '<img src="assets/images/hero_paladin.png">',
        enemyImage: '<img src="assets/images/villain_paladin.png">',
        health: 200,
        attack: 10,
        counterAttack: 10
    },
    "bard": {
        name: "Bard",
        playerImage: '<img src="assets/images/hero_bard.png">',
        enemyImage: '<img src="assets/images/villain_bard.png">',
        health: 150,
        attack: 15,
        counterAttack: 15
    },
    "warrior": {
        name: "Warrior",
        playerImage: '<img src="assets/images/hero_warrior.png">',
        enemyImage: '<img src="assets/images/villain_warrior.png">',
        health: 100,
        attack: 25,
        counterAttack: 25
    }
}

//global variables for refernerenenerece
var attack = 0;
var enemySet = false;
var playerSet = false;
var gameStart = false;
var turnCounter = 1;

$(document).ready(function () {

    function setUp() {
        $(".playerarea").hide();
        $(".enemyarea").hide();
        $(".attackbtn").hide();
        $(".character").show();
    }

    var attack = function() {
        enemyObj.health = enemyObj.health - (playerObj.attack * turnCounter);
        playerObj.health = playerObj.health - (enemyObj.counterAttack);
        $(".playerarea .hp").text("HP: " + playerObj.health);
        $(".enemyarea .hp").text("HP: " + enemyObj.health);  
        ++turnCounter;
        $(".playerarea .attack").text("Attack: " + playerObj.attack * turnCounter);
    }

    setUp();
  
    $('.character').click(function () {
        if (playerSet === false && enemySet === false) {
            $(this).removeClass("character");
            $(".innerplayer").replaceWith($(this));
            $(".playerarea").show();
            playerSet = true;
        }
        else if (playerSet === true && enemySet === false) {
            $(".innerenemy").replaceWith($(this));
            $(".attackbtn").show();
            $(".enemyarea").show();
            enemySet = true;
        }
    })

    $('.attackbtn').click(function (){
        player = $(".playerarea").children("div").eq(0).attr('id');
        enemy = $(".enemyarea").children("div").eq(0).attr('id');
        
        playerObj = characters[player];
        enemyObj = characters[enemy];
        
        attack();
    })
})