//Test if template is connected to file
console.log("connected")


/*Characters*/
    /*Hero*/
        /***
        * hero variable that stores stats
        */
        let hero = { name: '', 
                    avatar: '',
                    inventory:{
                        itemOne:{
                            name: 'item1',
                            hasItem: false,
                            itemOneImg: 'assets/images/items/item_one.jpg',
                        },
                        itemTwo:{
                            name: 'item2',
                            hasItem: false,
                            itemOneImg: '',
                        },
                        
                        },
                    stats:{
                        damage:{
                            damageLow : 10,
                            damageHigh: 50,
                        },
                        lifePoints: 50,
                        reputation: 100,
                    },
                    status:{
                        idle : '',
                        attack: '',

                    },
                    Xposition:'220',
                    Yposition:'200',
                    };

        console.log(hero)
        let initialHeroLifePoints = hero.stats.lifePoints;


    /*NPCs*/

        let npcOne = { 
            name: '', 
            avatar:{
                avatarMap: 'assets/images/avatars/npc.gif',
                avatarProfile:'assets/images/avatars/npc.gif'},
            Xposition:'337',
            Yposition:'300',
            radius:40,
            conversation:{
                sentenceOne:'Hello',
                sentenceTwo:'Are you looking for this piece of item?',
                sentenceThree:'It is yours now. Farewell!',
                sentenceFour:'Farewell then!',
                sentenceFive:'I already gave you everything I had.',
            },
            stats:{
                damage:{
                    damageLow : 1,
                    damageHigh: 5,
                },
                lifePoints: 100,
                reputation: 25,
                alive: true,
            }
            

            };
            console.log(npcOne)
            let npcLifePoints = (npcOne.stats.lifePoints/npcOne.stats.lifePoints)*100
           
            
            
            /***
             * defines avatar img on map once dead
             */
            deadNPCAvatar = 'assets/images/avatars/dead-npc.jpg'
    /*Boss*/


/*Event management*/

    /**
    *Manages events and screen display
    */
    $(document).ready(function(){
        
        updateScreen(); // Update screen based on initial state
        
        // This section covers the submit button for #hero-decision
        //when the user clicks, the decision is validated:
            //if clicked No (2) then the div disapears
            // if clicked yes (1), the rest of the logic is dealt by other function
            $('#submit-answer-button').click(function() {
                // Get variable in #hero-decision 
                let decision = $('#hero-decision').val();
                
                // Check if the selected option is "No" (2)
                if (decision === '2') {
                    // Hide the validation screen
                    $('.validation-screen-div').hide();
                } else if (decision === '1') {
                    // Value 1 has been selected and the conversation function can start
                    $('.validation-screen-div').hide();
                    npcOneConversation(hero, npcOne)
                } else if (decision === '3'){
                    $('.validation-screen-div').hide()
                    fight(hero, npcOne)
                }
            });

        /**
        *This section cover the submit button for #submit-question-answer-button
        */ 
            $('#submit-question-answer-button').click(function(){
                let decision = $('input[name="hero-answer"]:checked').val()
                console.log(`hero decision is ${decision}`)
                npcOneConversation(hero, npcOne, decision)

                
            })

         $('#restart-game').click(function() {
            location.reload();
        });
    });

    /**
    *gameover function. user is presented a buton to restart game from beginning.
    */
    function gameover(){
        $('.fight-screen-div').hide();
        $('.restart-game-div').show();
    }


    /*Credit - JQuery .show() renders in block instead of flex. 
    * this link told me I couldnt achieve flex with show(). and revert back to .css('display', 'flex')
    * https://stackoverflow.com/questions/38491653/jquery-show-a-flex-box
    */

    /***
    * Function to update screen based on hero's progress
    * add screen 2 + 3 later
    */
    function updateScreen() {
        if (hero.name === '' && hero.avatar === '' ){
            $('.first-screen-div').css('display', 'flex');
            $('.second-screen-div').hide();
        } else {
            console.log(`we have a name! the name is ${hero.name}`);
            console.log(`the avatar is ${hero.avatar}`);
            $('.first-screen-div').hide();
            $('.second-screen-div').css('display', 'flex');
        }
    }
    /*Comment - it feels like there should just be one function for decision validation.
    *
    */
    /*Initial bug - the decision validation process was included in the npcOneConversation()
    this resulted in being unable validate anything. I seperated the validation (do you want ot start the conversation)
    from the actual conversation. Allowing me to close the panel and leave the user to:
        if selected no, do anything else
        if selected Yes, to move on to conversation() */
    
    /***
     * Validation function: when the hero is asked to do something (Yes Or No)
     * parameter `decisionOrigin` allows function to be called by other function
     *the if statement processes the call differently based on the function that call it
     */
    function heroDecisionValidation(decisionOrigin){
        //when user is in range of npc (if)
            //when user click on `let npcOnePositionClick`
            //first panel appears to ask user to confirm if they want to start conversation

        if (decisionOrigin==='heroPosition'){
            console.log('this call is coming from screenTwoGeneral()')
            $('.validation-screen-div').css('display', 'flex');
            answer = $('#hero-decision').val();
            console.log(answer)
        } else if (decisionOrigin==='npcOneConversation'){
            console.log('this call is coming from npcOneConversation()')
            $('.conv-validation-container').css('display', 'inline-grid')
            answer = $('input[name="hero-answer"]:checked').val()
            console.log(answer)
        }
    }

/*Events*/

    /*First Screen*/

        /*bug - started with a form, but I couldnt keep the data. 
        I then took it to stackoverflow with this question: https://stackoverflow.com/questions/78315736/update-object-property-after-form-submission-for-use-in-a-seperate-function?noredirect=1#comment138072099_78315736
        Which make me realise my understanding of how forms work was flawed.
        I then tried to use javascript class, as a suggestion from this link: https://www.taniarascia.com/understanding-classes-in-javascript/
        but I couldnt make this work.
        The solution I found works, but feels clunky.*/
        /**
        * Creates hero name + avatar
        */
        function createHero(event){
            let heroName = $('#hero-name').val()
            let heroAvatar = $('input[name="hero-avatar"]:checked').val()
            console.log(`heroName: ${heroName}`)
            console.log(`heroAvatar: ${heroAvatar}`)

            hero.name = heroName
            hero.avatar = heroAvatar
            //bug : heroAvatar was considered '' if not img selected
            //but should be set as 'undefined' hence the use of `typeof` 
            if (heroName !== '' && typeof heroAvatar !== 'undefined'){
            
                // Call another function with the updated hero object
                //recurring problem - forget to pass argument in function
                screenTwoGeneral(hero, npcOne);
                updateScreen(); // Update screen after hero name is updated 
            }
        }
    
        /***
        * Another function that uses the hero object
        */
        function newHeroName(hero){
            // Use the updated hero object here
            console.log(`The hero's name in another function is: ${hero.name}`);
        }

    /*Second Screen*/
        /*General*/
        /*credit - https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_map5*/
        /*credit for .coords - https://www.w3schools.com/jsref/prop_area_coords.asp*/
        /*credit call coordinates for image position - https://stackoverflow.com/questions/28598910/position-an-html-element-at-any-x-y-coordinate-in-a-page*/
        /*credit img element src is 'content' css - https://stackoverflow.com/questions/2182716/is-it-possible-to-set-a-src-attribute-of-an-img-tag-in-css*/
        /*Credit for conversion to jquery for left & top in css - https://stackoverflow.com/questions/12744928/in-jquery-how-can-i-set-top-left-properties-of-an-element-with-position-values*/
        /**
        * Sets elements on screen when hero starts
        */
        function screenTwoGeneral(hero, npcOne){  
            //positions h1
            let missionTitle = $('#mission-title').text(`${hero.name}'s epic adventure`);
            
            //positions hero avatar image
            let heroAvatarImg = $('#hero-avatar-selected').attr('src',hero.avatar);

            //sets intial hero life points
            let heroLifePoints = $('#life-points').text(hero.stats.lifePoints)

            //sets hero life bar
            console.log(npcOne)

            //sets initial hero reputation
            let heroReputation = $('#reputation-points').text(hero.stats.reputation)

            //sets styling of items in inventory
            $('#item-one-img').attr('src', `${hero.inventory.itemOne.itemOneImg}`);
                if (hero.inventory.itemOne.hasItem == false){
                    $('#item-one-img').css('filter', 'grayscale(1)')
                }else{
                    $('#item-one-img').css('filter', 'grayscale(0)')
                }
            
            //positions NPCs + clickable area 
                //npcOne - clickable area          
                    let npcOnePositionClick = $('#npcOne-position-click').attr(
                        'coords',`${npcOne.Xposition},${npcOne.Yposition},${npcOne.radius}`);
                        $('#npcOne-position-avatar-image').click(function(event){
                            //checks if npc is dead or alive
                            //if dead the functions are not triggered
                            if (npcOne.stats.alive == true){   
                                
                                heroPosition(event)
                            }
                        }
                    )  
              
                //npcOne - avatar img position on map
                let npcOnePositionImage = $('#npcOne-position-avatar-image').
                    css({left:npcOne.Xposition + "px",top:npcOne.Yposition + "px"})
           
            //positions hero
                //hero - avatar img position on map
                let heroPositionImage = $('#hero-position-avatar-image').
                    css({left:hero.Xposition + "px",top:hero.Yposition + "px", }).attr('src',hero.avatar)
      
        }

        /*Intro */
            /*Hero arrives on Screen 2*/
                /*credit - https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag*/
                /**
                *Hero's position on screen
                */
                function heroPosition(event){
                    //BUG and issues: initial or current position when starts
                        //position() gives me the position of the hero in relation to div, not document.
                        //offset() gives me the position in relation to document. Opted for offset() as it migth be easier 
                            //if the screen resolution changes.
                            // let heroCurrentXPosition = $('#hero-position-avatar-image').offset().left;
                            //     console.log(`offset left:${heroCurrentXPosition}`)
                            // let heroCurrentYPosition = $('#hero-position-avatar-image').offset().top;
                            //     console.log(`offset top: ${heroCurrentYPosition}`)
                            
                        //new position where the hero clicked
                        // this is facilitated by the event parameter.
                        //I need to the offset position (which is relative to the document and not the parent div
                            // Get the offset of the parent element of the clicked area

                    //define new position based on npc position
                        let newHeroXPosition = npcOne.Xposition;
                            console.log(`npcOne.Xposition: ${newHeroXPosition}`)
                        let newHeroYPosition =  npcOne.Yposition
                            console.log(`npcOne.Yposition: ${newHeroYPosition}`)
                           
                    //caupture current hero position    
                        heroXPositionCurrent = hero.Xposition
                            console.log(`heroXPositionCurrent: ${heroXPositionCurrent}`)
                        heroYPositionCurrent = hero.Yposition
                            console.log(`heroYPositionCurrent: ${heroYPositionCurrent}`)

                    //calculate distance between current to new position in pixels
                        xDistance = newHeroXPosition - heroXPositionCurrent
                        yDistance = newHeroYPosition - heroYPositionCurrent
                    
                    //animation from old to new position
                        $("#hero-position-avatar-image").animate({ 
                                left: `+=${xDistance}px`,
                                top: `+=${yDistance}px`,
                            }, 2000, function(){
                                //update hero position object position
                                hero.Xposition = newHeroXPosition
                                hero.Yposition = newHeroYPosition

                                console.log(hero)
                                screenTwoGeneral(hero, npcOne)
                                heroDecisionValidation('heroPosition');
                            
                            } );
                    

                }




        /*Mission 1*/
            /*Credits - for .hasOwnProperty used to loop through sentences - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty*/
            /*Credits - extra credits for sentence loops : https://stackoverflow.com/questions/8312459/iterate-through-object-properties*/
            /*Credits - change one sentence to another : https://stackoverflow.com/questions/37809591/jquery-how-can-showint-text-and-hide-then-showing-another */
            /**
            *When user click on location, a conversation starts
            */
            function npcOneConversation(hero, npcOne, decision){
                //At this stage, the hero answered Yes (1)
                //alert("npcOneConversation()starts!")
                //logs npcOne.question. Currently doesnt return hero.name
                //console.log(`${npcOne.conversation.sentenceOne} ${hero.name}!`)
                    //if yes conversation screen div opens

                    //set up conversation div
                    $('.conversation-screen-div').css('display', 'flex')
                    $('.second-screen-div').hide()

                    //set up rows and cols content for hero and npc
                        //hero
                        $('#hero-img').attr('src',`${hero.avatar}`);
                        $('#hero-text')


                        //npc
                        $('#npc-img').attr('src',`${npcOne.avatar.avatarProfile}`)
                        $('#npc-text').text(`${npcOne.conversation.sentenceOne} ${hero.name}!`);

                        //checks if hero
                
                        //displays loop of sentences from npc
                        for (const sentence in npcOne.conversation){
                            //console.log(sentence)

                                if (npcOne.conversation.hasOwnProperty(sentence)){
                                    //console.log(npcOne.conversation[sentence])
                                    //create sentence number variable: sentenceNum
                                    let sentenceNum = npcOne.conversation[sentence]
                                    
                                        //if sentenceNum is 1
                                        if (sentenceNum == npcOne.conversation.sentenceOne){
                                            //console.log('this is sentenceOne')
                                           
                                            //hero clicks next to progress to next part sentence 2
                                            $('#npc-text').text(`${npcOne.conversation.sentenceOne} ${hero.name}!`).delay(2500).hide(function(){
                                                $('#npc-text').text(`${npcOne.conversation.sentenceTwo}`).delay(2500).show()
                                                })

                                        // if sentenceNum is 2
                                        }else if(sentenceNum == npcOne.conversation.sentenceTwo){
                                            //console.log('this is sentenceTwo')
                                            // hero is presented a yes or no question
                                            heroDecisionValidation('npcOneConversation')

                                        } else {
                                            //console.log('this is sentenceThree')
                                        
                                            //console.log(`This is the hero decision value ${decision}`)
                                            // fix: if decision is not none show this.
                                            // remove existing text. and Add sentence3
                                            //BUG : After the end of sentenceThree or sentenceFour, the loop goes back to first if statement
                                                //I tried `break` at the end of the function, but this is unresponsive
                                                //also tried to add a boolean field at the end of sentenceThree and sentenceFour and turn it to true
                                                //and add an if statement at the top of the for loop : if boolean is true then dont loop: but it didnt work.
                                                //as a workaround I reduced the timeout so that the user doesnt see the loop starting again as the div is turns to `hide` before the loop restarts.
                                                if (decision === '1'){
                                                    //console.log('The hero gets an item + farewell message')
                                                    //sentenceThree appears
                                                    $('#npc-text').text(`${npcOne.conversation.sentenceThree}`);
                                                    setTimeout(function() {
                                                        $('.conversation-screen-div').hide(function() {
                                                            $('.second-screen-div').css('display', 'flex');
                                                        });
                                                    }, 2000);
                                                   
                                                    //add item to hero object logic

                                                    hero.inventory.itemOne.hasItem = true;
                                                    screenTwoGeneral(hero, npcOne)
                                                   

                                                    //conversation panel is moved to hidden.
                                                }
                                                else if (decision === '2') {
                                                    //console.log('The hero gets farewell message and no item');
                                                    //sentenceThree appears
                                                    //issue with delay: delay() didnt seem to have any effect in this context
                                                    //I used setTimeout() which worked.
                                                    //credit: https://stackoverflow.com/questions/7407935/delay-and-settimeout#:~:text=The%20.,appropriate%20for%20certain%20use%20cases.
                                                    $('#npc-text').text(`${npcOne.conversation.sentenceFour}`);
                                                    setTimeout(function() {
                                                        $('.conversation-screen-div').hide(function() {
                                                            $('.second-screen-div').css('display', 'flex');
                                                        });
                                                    }, 2000);

                                                }
                                                else{
                                                    console.log('someone is wrong with conversation sentence three logic. Or the hero is not at the stage yet.')
                                                }
                                                //npc renders sentenceNum 3 
                                                //hero returns to second screen div
                                        } 
                                                                
                                }
                           
                        }            
            }


        /*Mission 2*/



    /*Third Screen*/

        /*Boss Fight*/
        /**
        *Add life points to hero
        */
        function healing(hero, npcOne){
            let healingPoints = 25;
            return healingPoints
        }
        /**
        *Reduce life points to opponent
        */
        function attack(hero, npcOne){
            let heroMaxDamage = hero.stats.damage.damageHigh
                console.log(`max damage: ${heroMaxDamage}`)
            let heroLowDamage = hero.stats.damage.damageLow
                console.log(`min damage: ${heroLowDamage}`)
            let attackDamage = Math.floor(Math.random() * (heroMaxDamage - heroLowDamage + 1)) + heroLowDamage;
                console.log(`Actual Damage: ${attackDamage}`)
            
            return attackDamage;
        }
        
        function fight(hero, npcOne){
            console.log('fight kicks off!')
            $('.fight-screen-div').css('display', 'flex')
            $('.second-screen-div').hide()
            
            //fill progress bar with lifepoints
            //Hero
                /**
                *define hero life points left in % of full bar length
                */
                let heroLifePoints = hero.stats.lifePoints
                    console.log(heroLifePoints)
                    
                let heroLifePointsInPercentage = (heroLifePoints/initialHeroLifePoints)*100
                    console.log(heroLifePointsInPercentage)
                $('#hero-life-points').css('width', heroLifePointsInPercentage + '%')

            //NPC
                /**
                *define npc life points left in % of full bar length
                */
                let npcLifePoints = npcOne.stats.lifePoints
                        console.log(npcLifePoints)
                let npcLifePointsInPercentage = (npcOne.stats.lifePoints/npcOne.stats.lifePoints)*100
                        console.log(npcLifePointsInPercentage)
                $('#npc-life-points').css('width', npcLifePointsInPercentage + '%')

            //set avatar images in avatar boxes
            //Hero
                $('#hero-avatar-fight').attr('src',`${hero.avatar}`);
            //NPC
                $('#npc-avatar-fight').attr('src',`${npcOne.avatar.avatarMap}`);
        
            console.log('you are inside the loop')

            //hero's turn
                //select value between attack and heal
                //show action panel:
                $('#submit-hero-action-button').click(function(){
                    let action = $('input[name="hero-fight-action"]:checked').val()
                    console.log(action)

                    if (action == '1'){

                        //if attack is selected
                        console.log(`NPC has ${npcLifePoints} life points left`)
                        console.log(`${action} is selected. Attack time!`)

                        //play attack function
                        const heroDamage = attack(hero, npcOne)
                            console.log(`Hero hits NPC with: ${heroDamage} damage`)

                        
                            //reduce npc hp in actual points
                            npcLifePoints = npcLifePoints - heroDamage
                                console.log(`NPC has ${npcLifePoints} life points left`)

                            //reduce npc hps in %of initial bar length
                                console.log(`npcOne.stats.lifePoints: ${npcOne.stats.lifePoints}`)
                                npcLifePointsInPercentage = (npcLifePoints/npcOne.stats.lifePoints)*100
                                    console.log(`NPC has ${npcLifePoints} left which represents ${npcLifePointsInPercentage}% of bar length`)
                                $('#npc-life-points').css('width', npcLifePointsInPercentage + '%')
                            
                            console.log(`At this stage hero has ${heroLifePoints} life points left!`)
                        if (npcLifePoints > 0){
                            //updates heroLifePoints after the npcTurn
                            heroLifePoints = npcTurn(hero, npcOne, heroLifePoints);

                        }else{
                            console.log(`${npcOne.name} is kaboom!`)
                            console.log(` and hero has ${heroLifePoints} life points left!`)
                            
                            npcOneDefeated(hero, heroLifePoints) 
                        }

                    }else if(action == '2'){
                    //if heal is selected
                        console.log(`${action} is selected. Heal time!`)

                        //play heal function
                        const heroHeal = healing(hero, npcOne)
                        
                        //increase hero hp
                        heroLifePoints = heroLifePoints + heroHeal;
                            console.log(heroLifePoints)

                        //limits HP increase to character's max life    
                        if (heroLifePoints > initialHeroLifePoints){
                            console.log('Thats too many HP for you my friend!')
                            heroLifePoints = initialHeroLifePoints
                        }
                            console.log(`new lifepoints : ${heroLifePoints}`)

                            //define remaing life points after attack in % of initial lifebar width
                        heroLifePointsInPercentage = (heroLifePoints/hero.stats.lifePoints)*100
                            $('#hero-life-points').css('width', heroLifePointsInPercentage + '%')

                        //updates heroLifePoints after the npcTurn
                        heroLifePoints = npcTurn(hero, npcOne, heroLifePoints);


                    }
                    else{
                        console.log('Something is wrong')
                    }         
                })
        }

        function npcTurn(hero, npcOne, heroLifePoints){
            console.log('Its the NPC turn now from function')
            let npcMaxDamage = npcOne.stats.damage.damageHigh;
            let npcLowDamage = npcOne.stats.damage.damageLow;
            //define NPC damages     
                let npcDamage = Math.floor(Math.random() * ( npcMaxDamage - npcLowDamage + 1))+ npcLowDamage;
                    console.log(`NPC attacks: ${npcDamage} damage`)
                    console.log(`The hero has ${heroLifePoints} life points before the attack`)

            //update hero's life points
                //define remaining life points after attack
                    heroLifePoints = heroLifePoints - npcDamage
                    console.log(`The hero has ${heroLifePoints} life points after the attack`)
                //define remaing life points after attack in % of initial lifebar width
                    heroLifePointsInPercentage = (heroLifePoints/initialHeroLifePoints)*100    
                    $('#hero-life-points').css('width', heroLifePointsInPercentage + '%')

            if (heroLifePoints <= 0){
                gameover()
            }
            return heroLifePoints;  
        }

        function npcOneDefeated(hero, heroLifePoints){
            // add item to inventory (turn item to true)
                hero.inventory.itemOne.hasItem = true;

            //reduce reputation points
           
                hero.stats.reputation -= npcOne.stats.reputation

                console.log(`this is how much heroLifePoints there is in npcOneDefeated() : ${heroLifePoints}`)

                hero.stats.lifePoints = heroLifePoints
            
            //sets npc alive to false
                npcOne.stats.alive = false

            //change npc avatar to tombstone
                $('#npcOne-position-avatar-image').css('content', 'url("/assets/images/avatars/dead-npc.jpg")');

            //bring user back to screen two
                setTimeout(function() {
                    $('.fight-screen-div').hide(function() {
                        $('.second-screen-div').css('display', 'flex');
                    });
                }, 2000);

                screenTwoGeneral(hero, npcOne)


        }