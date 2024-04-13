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
            Xposition:'',
            Yposition:'',

            };
            console.log(npcOne)

    /*Boss*/


/*Event management*/

    /**
    *Manages events and screen display
    */
    document.addEventListener("DOMContentLoaded", function(){
        updateScreen(); // Update screen based on initial state
    });

    /***
    * Function to update screen based on hero's progress
    * add screen 2 + 3 later
    */
    function updateScreen() {
        if (hero.name === ''){
            document.querySelector('.first-screen-div').style.display = 'flex';
            document.querySelector('.second-screen-div').style.display = 'none';
        } else {
            console.log(`we have a name! the name is ${hero.name}`);
            console.log(`the avatar is ${hero.avatar}`);
            document.querySelector('.first-screen-div').style.display = 'none';
            document.querySelector('.second-screen-div').style.display = 'flex';
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
            let heroName = document.getElementById('hero-name').value
            let heroAvatar = document.getElementById('hero-avatar').value
            console.log(`heroName: ${heroName}`)
            hero.name = heroName
            hero.avatar = heroAvatar
            // Call another function with the updated hero object
            screenTwoGeneral(hero);
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
        function screenTwoGeneral(hero){  
            let missionTitle = document.getElementById('mission-title').textContent=`${hero.name}'s epic adventure`;
            let heroAvatarImg = document.getElementById('hero-avatar-selected').src=`${hero.avatar}`;
            let npcOnePosition = document.getElementById('npcOne-avatar-selected').src=`${npcOne.avatar}`;
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


        /*Mission 2*/



    /*Third Screen*/

        /*Boss Fight*/
