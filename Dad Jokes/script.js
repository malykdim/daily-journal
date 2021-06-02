const jokesEndpoint = 'https://icanhazdadjoke.com'

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }
    
    const res = await fetch(jokesEndpoint, config)
        
    const data = await res.json()
    
    jokeEl.innerHTML = data.joke
}

// function generateJoke() {
//     const config = {
//         headers: {
//             "Accept": "application/json"
//         }
//     }
    
//     fetch(jokesEndpoint, config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
// }


// axios - third way