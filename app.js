import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');


// on load
async function loadData() {
    //declaring variable to database
    //give file access to database and declaring it to a variable
    const dogs = await getDogs();
    // console.log(dogs);

    for (let dog of dogs) {
        const dogDiv = renderDogCard(dog);
        dogListContainer.append(dogDiv);
    }
}
loadData();
// fetch all dogs
// render and append all dog cards to the container