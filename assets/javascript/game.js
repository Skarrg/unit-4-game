var characters = {
    "wizard": {
        name: "Wizard",
        playerImage: '<img src="assets/images/hero_wizard.png">',
        enemyImage: '<img src="assets/images/villain_wizard.png">',
        health: 85,
        attack: 30,
        counterAttack: 30
    },
    "paladin": {
        name: "Paladin",
        playerImage: '<img src="assets/images/hero_paladin.png">',
        enemyImage: '<img src="assets/images/villain_paladin.png">',
        health: 180,
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
        health: 105,
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
var wins = 0;
var restart = false;

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
        $('#textspan').html("You dealt " + enemyObj.name + " " + (playerObj.attack * turnCounter) + " Damage! They dealt " + enemyObj.counterAttack + " damage to you!");
        $(".playerarea .hp").text("HP: " + playerObj.health);
        $(".enemyarea .hp").text("HP: " + enemyObj.health);  
        ++turnCounter;
        $(".playerarea .attack").text("Attack: " + playerObj.attack * turnCounter);
    }

    var playerDefeated = function(){
        if (playerObj.health < 1 && enemyObj.health > 0) {
            $('#textspan').html("You were defeated by " + enemyObj.name);
            alert('You Lost!');
            restart();
        } 
        else if (playerObj.health< 1 && enemyObj.health < 1) {
            $('#textspan').html("You Acheived Mutual Destruction with " + enemyObj.name);
            alert('You Lost!');
            restart();
        }
    }

    var playerVictory = function(){
        if (enemyObj.health < 1 && playerObj.health > 0) {
            if (wins < 2) {
                $('#textspan').html("You defeated " + enemyObj.name + "! Choose a new opponent.");
                wins++;
                enemySet = false;
                $('.attackbtn').hide();
                $('.innerenemy').empty();
            }
            else {
                $('#textspan').html("YOU ARE THE CHAMPION OF THE ARENA");
                alert('You Won!');
                restart();
            }
        }
    }

    var restart = function(){
        restart = confirm("Restart?");
        if (restart = true) {
        location.reload();
        }
    }    
    
  
    $('.character').click(function () {
        if (playerSet === false && enemySet === false) {
            $(this).removeClass("character");
            $(".innerplayer").append($(this));
            $(".playerarea").show();
            playerSet = true;
            $('#textspan').html("Choose your Opponent!");
        }
        else if (playerSet === true && enemySet === false) {
            $(".innerenemy").append($(this));
            $(".attackbtn").show();
            $(".enemyarea").show();
            enemySet = true;
            $('#textspan').html("Welcome to the Arena! Press Attack to FIGHT");
        }
    })

    $('.attackbtn').click(function (){
        player = $(".innerplayer").children("div").eq(0).attr('id');
        enemy = $(".innerenemy").children("div").eq(0).attr('id');
        
        playerObj = characters[player];
        enemyObj = characters[enemy];
        
        attack();
        playerDefeated();
        playerVictory();
    })

    setUp();
})