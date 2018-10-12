

var characters = {
    "wizard": { name: "<h2>Wizard</h2>", playerImage: '<img src="assets/images/hero_wizard.png">', enemyImage: '<img src="assets/images/villain_wizard.png">', health: 80, attack: 30, counterAttack: 30 },
    "paladin": { name: "<h2>Paladin</h2>", playerImage: '<img src="assets/images/hero_paladin.png">', enemyImage: '<img src="assets/images/villain_paladin.png">', health: 200, attack: 10, counterAttack: 10 },
    "bard": { name: "<h2>Bard</h2>", playerImage: '<img src="assets/images/hero_bard.png">', enemyImage: '<img src="assets/images/villain_bard.png">', health: 150, attack: 15, counterAttack: 15 },
    "warrior": { name: "<h2>Warrior</h2>", playerImage: '<img src="assets/images/hero_warrior.png">', enemyImage: '<img src="assets/images/villain_warrior.png">', health: 100, attack: 25, counterAttack: 25 }
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
       if (playerSet == false){
        $(".playerarea").show();
        $(".playerarea").append($(this).attr('id'));
        $(this).hide();
        playerSet = true;
       } else if (playerSet == true && enemySet == false) {
        $(".enemyarea").show();
        $(".attackbtn").show();
        $(".enemyarea").append($(this).attr('id'));
        $(this).hide();
        enemySet = true;
       }
        //if (playerSet == false) {
        //    for (var i = 0; i < characters.length; i++) {
        //        if (characters[i] == $(this).attr.id) {
        //            $('.playerarea').innerhtml(characters[i]);
        //            
        //        }
        //    }
        //}
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