//Test if template is connected to file
console.log("connected")


/*Characters*/
    /***
    * hero variable that stores stats
    */
    let hero = { name: '', avatar: '' };
    console.log(hero)


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
            document.querySelector('.first-screen-div').style.display = 'none';
            document.querySelector('.second-screen-div').style.display = 'flex';
        }
    }

/*Events*/

    /*First Screen*/

        /***
        * Creates hero name + avatar
        */
        function createHero(event){
            let heroName = document.getElementById('heroName').value
            console.log(`heroName: ${heroName}`)
            hero.name = heroName
            // Call another function with the updated hero object
            newHeroName(hero);
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

        /*Generate map*/

        /*Mission 1*/


        /*Mission 2*/



    /*Third Screen*/

        /*Boss Fight*/
