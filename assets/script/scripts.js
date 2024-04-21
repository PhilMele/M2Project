//Test if template is connected to file
console.log("connected")


/*Characters*/
    /*Hero*/
        /***
        * hero variable that stores stats
        */
        let hero = { name: '', avatar: '' };
        console.log(hero)

    /*NPCs*/

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
            console.log(npcOne)

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
                } else {
                    // Value 1 has been selected and the conversation function can start
                    $('.validation-screen-div').hide();
                    npcOneConversation(hero, npcOne)
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

    });


    /*Credit - JQuery .show() renders in block instead of flex. 
    * this link told me I couldnt achieve flex with show(). and revert back to .css('display', 'flex')
    * https://stackoverflow.com/questions/38491653/jquery-show-a-flex-box
    */

    /***
    * Function to update screen based on hero's progress
    * add screen 2 + 3 later
    */
    function updateScreen() {
        if (hero.name === ''){
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

        if (decisionOrigin==='screenTwoGeneral'){
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
            hero.name = heroName
            hero.avatar = heroAvatar
            // Call another function with the updated hero object
            //recurring problem - forget to pass argument in function
            screenTwoGeneral(hero, npcOne);
            updateScreen(); // Update screen after hero name is updated
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
            
            //positions NPCs + clickable area 
                //npcOne - clickable area
                let npcOnePositionClick = $('#npcOne-position-click').attr(
                    'coords',`${npcOne.Xposition},${npcOne.Yposition},${npcOne.radius}`);
                $('#npcOne-position-click').click(function(){
                    heroDecisionValidation('screenTwoGeneral');
                })
                
                //npcOne - avatar img position on map
                let npcOnePositionImage = $('#npcOne-position-avatar-image').
                    css({left:npcOne.Xposition + "px",top:npcOne.Yposition + "px"})
            

                
        }

        
        /*Intro */
            /*Hero arrives on Screen 2*/
                /*credit - https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag*/
                /**
                *Hero's initial position on screen
                */
                function heroPosition(){
                    //initial position when starts


                    //new position
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
                console.log(`${npcOne.conversation.sentenceOne} ${hero.name}!`)
                    //if yes conversation screen div opens

                    //set up conversation div
                    $('.conversation-screen-div').css('display', 'flex')
                    $('.second-screen-div').hide()

                    //set up rows and cols content for hero and npc
                        //hero
                        $('#hero-img').attr('src',`${hero.avatar}`);
                        $('#hero-text')


                        //npc
                        $('#npc-img').attr('src',`${npcOne.avatar}`)
                        $('#npc-text').text(`${npcOne.conversation.sentenceOne} ${hero.name}!`);
                    
                        //displays loop of sentences from npc
                        for (const sentence in npcOne.conversation){
                            console.log(sentence)
                            if (npcOne.conversation.hasOwnProperty(sentence)){
                                console.log(npcOne.conversation[sentence])
                                //create sentence number variable: sentenceNum
                                let sentenceNum = npcOne.conversation[sentence]

                                //if sentenceNum is 1
                                if (sentenceNum == npcOne.conversation.sentenceOne){
                                    console.log('this is sentenceOne')
                                    //hero clicks next to progress to next part sentence 2
                                    $('#npc-text').text(`${npcOne.conversation.sentenceOne} ${hero.name}!`).delay(2500).hide(function(){
                                        $('#npc-text').text(`${npcOne.conversation.sentenceTwo}`).delay(2500).show()
                                        })

                                // if sentenceNum is 2
                                }else if(sentenceNum == npcOne.conversation.sentenceTwo){
                                    console.log('this is sentenceTwo')
                                    // hero is presented a yes or no question
                                    heroDecisionValidation('npcOneConversation')
                                    console.log(`This is the hero decision value ${decision}`)
                                    //Need to add system to avoid dialog refreshing after decision is brought back to function
                                    
                                    //use auto submit when radio button is selected                                                         
                                    //heroDecisionValidation(){
                                        //if hero says no 
                                        //conversation moves to sentenceThree
                                        //if (){
                                        //} 
                                        //if hero says yes
                                        // item1 is added to hero property (need to create one)
                                        //conversation moves to sentenceThree     
                                        //else if(){
                                        //}
                                    //}
                                }
                                else if (sentenceNum == npcOne.conversation.sentenceThree){
                                    console.log('this is sentenceThree')
                                    //npc renders sentenceNum 3 
                                    //hero returns to second screen div
                                }                                
                            }
                        }            
            }


        /*Mission 2*/



    /*Third Screen*/

        /*Boss Fight*/
