const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const starSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const statuses = ['Retrograde', 'Prograde'];
const effects = ['Open you up to New Experiences', 'Make You More Introspective', 'Give you time to look inwards', 'Make you susceptible to meeting new people'];

const createPhrase= () =>{
    let planet = planets[Math.floor(Math.random()*planets.length)];
    let starSign = starSigns[Math.floor(Math.random()*starSigns.length)];
    let status = statuses[Math.floor(Math.random()*statuses.length)];
    let effect = effects[Math.floor(Math.random()*effects.length)];
    return `When ${planet} goes into ${status}, then ${starSign}'s must be careful beacuse this will ${effect}`;
}

const showPhrase = () => {
    let existingElement = document.getElementById('phrase');
    
    if (existingElement) {
        existingElement.innerHTML = createPhrase();
    } else {
        let newInfo = document.createElement('p');
        newInfo.id = 'phrase';
        newInfo.innerHTML = createPhrase();  // Directly set innerHTML

        let form = document.getElementById('infoArea');
        form.appendChild(newInfo);
    }
}


let button = document.getElementById('infoButton');
button.addEventListener('click', showPhrase);