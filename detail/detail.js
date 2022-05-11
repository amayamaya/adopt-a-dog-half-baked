import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailEl = document.getElementById('dog-detail-container');



// similar stuff pull up display list from scratch 
// think about what happened in the details page
// get dog function rather than findById

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    console.log(params.id);
    //declaring your id 
    const id = params.get('id');
    console.log(id);
    
    const dogs = await getDog(id);

    const dogDetail = renderDogDetail(dogs);
    dogDetailEl.append(dogDetail);

}
loadData();
// const dogParam = renderDogDetail(params.get('id'), getDog);

// dogDetailEl.textContent = dogParam.name;
// descriptionEl.textContent = dogParam.description;
// ageEl.textContent = dogParam.age;
// breedEl.textContent = dogParam.breed;


// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
