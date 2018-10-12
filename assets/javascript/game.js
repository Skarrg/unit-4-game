

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
        name: "<h2>Paladin</h2>",
        playerImage: '<img src="assets/images/hero_paladin.png">',
        enemyImage: '<img src="assets/images/villain_paladin.png">',
        health: 200,
        attack: 10,
        counterAttack: 10
    },
    "bard": {
        name: "<h2>Bard</h2>",
        playerImage: '<img src="assets/images/hero_bard.png">',
        enemyImage: '<img src="assets/images/villain_bard.png">',
        health: 150,
        attack: 15,
        counterAttack: 15
    },
    "warrior": {
        name: "<h2>Warrior</h2>",
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

$(document).ready(function () {

    //start game

    //set up divs for game
    function setUp() {
        $(".playerarea").hide();
        $(".enemyarea").hide();
        $(".attackbtn").hide();
        $(".character").show();
    }

    setUp();
    //character select
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
        console.log(player +' VS '+enemy);
        playerObj = characters[player];
        enemyObj = characters[enemy];
        console.log(playerObj.name);
    })
    //enemy select

    //move enemy to combat

    //combat occurs

    //enemy dies

    //player dies

    //player defeats all characters

    //player character 1

    //player character 2

    //player character 3

    //player character 4
})