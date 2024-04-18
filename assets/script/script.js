// Test if template is connected to file
console.log("connected");

/* Characters */
/* Hero */
let hero = { name: '', avatar: '' };
console.log(hero);

/* NPCs */
let npcOne = { 
    name: '', 
    avatar: 'assets/images/avatars/npc.gif',
    Xposition:'337',
    Yposition:'300',
    radius:40,
    conversation:{
        sentenceOne:'Hello',
        sentenceTwo:'Are you looking for this piece of item?',
        sentenceThree:'It is yours now. Farewell!',
    }
};
console.log(npcOne);

/* Event management */
$(document).ready(function() {
    updateScreen(); // Update screen based on initial state

    $('#submit-answer-button').click(function() {
        let decision = $('#hero-decision').val();
        if (decision === '2') {
            $('.validation-screen-div').hide();
        } else {
            $('.validation-screen-div').hide();
            npcOneConversation(hero, npcOne);
        }
    });
});

function updateScreen() {
    if (hero.name === ''){
        $('.first-screen-div').show();
        $('.second-screen-div').hide();
    } else {
        console.log(`we have a name! the name is ${hero.name}`);
        console.log(`the avatar is ${hero.avatar}`);
        $('.first-screen-div').hide();
        $('.second-screen-div').show();
    }
}

function heroDecisionValidation(){
    $('.validation-screen-div').show();
    let answer = $('#hero-decision').val();
    console.log(answer);
}

/* Events */
/* First Screen */
function createHero(event){
    let heroName = $('#hero-name').val();
    let heroAvatar = $('#hero-avatar').val();
    console.log(`heroName: ${heroName}`);
    hero.name = heroName;
    hero.avatar = heroAvatar;
    screenTwoGeneral(hero, npcOne);
    updateScreen();
}

function newHeroName(hero){
    console.log(`The hero's name in another function is: ${hero.name}`);
}

/* Second Screen */
function screenTwoGeneral(hero, npcOne){  
    $('#mission-title').text(`${hero.name}'s epic adventure`);
    $('#hero-avatar-selected').attr('src', hero.avatar);
    $('#npcOne-position-click').attr('coords', `${npcOne.Xposition},${npcOne.Yposition},${npcOne.radius}`);
    $('#npcOne-position-click').click(function(){
        heroDecisionValidation();
    });
    $('#npcOne-position-avatar-image').css({ left: npcOne.Xposition + "px", top: npcOne.Yposition + "px" });
}

function heroPosition(){
    // Hero's initial position on screen
}

function npcOneConversation(hero, npcOne){
    console.log(`${npcOne.conversation.sentenceOne} ${hero.name}!`);
    $('.conversation-screen-div').show();
    $('.second-screen-div').hide();

    $('#hero-img').attr('src', hero.avatar);
    $('#hero-text').text('');

    $('#npc-img').attr('src', npcOne.avatar);
    $('#npc-text').text(`${npcOne.conversation.sentenceOne} ${hero.name}!`);
}

/* Third Screen */
/* Boss Fight */
