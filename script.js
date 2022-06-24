/*
const form = document.querySelector("#shelterForm");
const input = document.querySelector('#catName')
const list = document.querySelector('#cats');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(input.value);
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    console.log(newLI);
    list.append(newLI);
    input.value="";
});

const login = async (username, password) => {
    if (!username || !password) {throw 'Missing Credentials'}
    if (password === 'jag143git' && username==='aayushpe') {return 'Welcome!'}
    throw 'Invalid Password/Username'
}

login('aayushpe', 'jag143git')
    .then(msg => {
        console.log('Logged in')
        console.log(msg)
    })

    .catch(err => {
        console.log('Error!')
        console.log(err)
    })
*/
/*
fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log('Resolved', res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log('Error!');
    })
*/
/*
const loadStarWarsPeople = async () => {
    try{
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
    }catch(error){
        console.log('ERROR!!', error)
    }
    
};
loadStarWarsPeople();
*/

const getStarWarsPerson = async (id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch(e){
        console.log('ERROR', e)
    }
    
}

const jokes = document.querySelector('#jokes');
const btn = document.querySelector('#button');

const addNewJoke = async () =>{
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.innerText = jokeText;
    jokes.append(newLI);

}

const getDadJoke = async () => {
    try { 
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.dir(res.data)
    return res.data.joke;
    } catch (e){
        return "NO JOKES AVAILABLE";
    }
}

btn.addEventListener('click', addNewJoke);
