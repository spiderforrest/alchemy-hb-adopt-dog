import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', async () => {
    // fetch all dogs
    const response = await getDogs();
    if (response.error) return;
    // render and append all dog cards to the container
    for (const item of response.data) {
        const div = renderDogCard(item);
        dogListContainer.append(div);
    }
});
