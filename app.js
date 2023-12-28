// declare  const pi = 3.14;
// assign   myNumb = 5;

// const user ={
//     name : 'mehmet',
//     sayHi : () => {}
// }

// let myString = "Hello world";

// let splittedString = myString.split("");

// console.log(splittedString);
// const myArry = ["test-1", "test-2" ,"test-3" ,"test-4"];

// console.log(myArry.length)

const myArray = [];
// const listNumber = Math.floor(Math.random() * 100);

// for (let i = 0; i < 100; i++) {
//     const randomListNumber = Math.floor(Math.random() * 100);
//     const isFound = myArray.find(element => element === randomListNumber);
//     if(!isFound){
//         myArray.push(randomListNumber);
//     }
// }

// function randomNumber() {
//     const randomNumber = Math.floor(Math.random() * myArray.length);
//     document.getElementById('random-number-p').innerHTML = myArray[randomNumber]
// }

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
// const changedArray = myArray.map((element) => {
//     return `${element}'in Yüzle çarpılmış hali: ${element * 100}`;
// })

// console.log(myArray);
// console.log(changedArray);

// function pokemonGetir(){
//     const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//     const data = response.json();
//     console.log(data);
// }

let pokemon = {
  id: "",
  name: "",
  initialHp: 0,
  currentHp: 0,
  attack: 0,
  defense: 0,
};

let enemy = {
  id: "",
  name: "",
  hp: 0,
  attack: 0,
  defense: 0,
};

async function pokemonGetir() {
  const randomId = getRandomNumber();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const pokemonData = await response.json();
  console.log(pokemonData);

  pokemon.name = pokemonData.name;
  pokemon.attack = pokemonData.stats[1].base_stat;

  // bunu başka fonskiyona al
  const isPokeİmage = document.getElementById("poke-img");
  const isPokeName = document.getElementById("poke-name");
  const isPokeSpecies = document.getElementById("poke-species-name");
  const isPokeWeight = document.getElementById("poke-weight");
  isPokeİmage.src = pokemonData.sprites.front_default;
  isPokeName.innerHTML = `Adı: ${pokemonData.name}`;
  isPokeSpecies.innerHTML = `Tür: ${pokemonData.base_experience}`;
  isPokeWeight.innerHTML = `Ağırlığı: ${pokemonData.weight}`;

  console.log(pokemon);
}

function getRandomNumber() {
  const randomDecimal = Math.random();
  const randomNumber = Math.floor(randomDecimal * 3) + 1;
  return randomNumber;
}

function performAttack(attacker, defender) {
  const currentAttack = attacker.attack * getRandomNumber() - defender.defense;
  defender.hp -= currentAttack;
}

function checkIsPokemonDead(){
    if(pokemon.hp <= 0){
        // karakterin öldüğü mantık
    }
}

// performAttack(pokemon, enemy);
// performAttack(pokemon, enemy);
