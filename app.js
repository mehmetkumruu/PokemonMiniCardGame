// getpokemon(){
//   fetch()
//   pokemonData = await
//   renderPlayerPokemon(pokemonData)
// }

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

// const myArray = [];
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

let playerPokemon = {
  id: "",
  name: "",
  initialHp: 0,
  image: "",
  currentHp: 0,
  attack: 0,
  defense: 0,
  race: "",
};

let enemy = {
  id: "",
  name: "",
  initialHp: 0,
  image: "",
  currentHp: 0,
  attack: 0,
  defense: 0,
  race: "",
};

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
// async function pokemonPlayerGetir() {
//   const
// }
async function pokemonEnemyGetir() {
  const randomId = getRandomNumber();
  const enemyId = getRandomNumber();
  const responseEnemy = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${enemyId}`
  );
  const pokemonDataEnemy = await responseEnemy.json();
  const responsePlayer = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomId}`
  );
  const pokemonUser = await responsePlayer.json();
  const pokeRace = pokemonUser.types.map((pokemonRace) => {
    return pokemonRace.type.name;
  });
  const pokeEnemyRace = pokemonDataEnemy.types.map((pokemonEnemyRace) => {
    return pokemonEnemyRace.type.name;
  });
  // for (let index = 0; index < pokeRace.length; index++) {
  //   if (pokeRace[index] === "undefined") {
  //     pokeRace;
  //   }
  // }
  console.log(pokemonUser.types);
  playerPokemon.name = pokemonUser.name;
  playerPokemon.initialHp = pokemonUser.stats[0].base_stat;
  playerPokemon.image = pokemonUser.sprites.other.home.front_default;
  playerPokemon.attack = pokemonUser.stats[1].base_stat;
  playerPokemon.defense = pokemonUser.stats[2].base_stat;
  playerPokemon.race = pokeRace;
  enemy.name = pokemonDataEnemy.name;
  enemy.initialHp = pokemonDataEnemy.stats[0].base_stat;
  enemy.image = pokemonDataEnemy.sprites.other.home.front_default;
  enemy.attack = pokemonDataEnemy.stats[1].base_stat;
  enemy.defense = pokemonDataEnemy.stats[2].base_stat;
  enemy.race = pokeEnemyRace;
  renderPlayerPokemon(playerPokemon);
  renderEnemyPokemon(enemy);
  // playerPokemon.attack = pokemonDataPlayer.
  // console.log(pokemonDataEnemy);
  // console.log(pokemonDataPlayer);
  console.log(playerPokemon.name);
  // bunu başka fonskiyona al
  // const isPokeİmage = document.getElementById("poke-img");
  // const isPokeName = document.getElementById("poke-name");
  // const isPokeSpecies = document.getElementById("poke-species-name");
  // const isPokeWeight = document.getElementById("poke-weight");
  // isPokeİmage.src = pokemonData.sprites.front_default;
  // isPokeName.innerHTML = `Adı: ${pokemonData.name}`;
  // isPokeSpecies.innerHTML = `Tür: ${pokemonData.base_experience}`;
  // isPokeWeight.innerHTML = `Ağırlığı: ${pokemonData.weight}`;
}

function renderPlayerPokemon(pokemon) {
  const userCard = document.getElementById("pokemon-user-card");
  userCard.innerHTML = `
  <div class="poke-card-info">
  <img class="poke-card-rank" src="" alt="">
  <h2 class="poke-hero-name">${pokemon.name}</h2>
  <h1 id="poke-hero-hp" class="poke-hero-hp">${pokemon.initialHp}</h1>
</div>
<div class="poke-card-hero-image">
  <img id="poke-hero-img" class="poke-hero-img" src="${pokemon.image}" alt="">
</div>
<div class="poke-card-power-info">
  <div class="poke-hero-info">
      <div class="poke-hero-gen-info">  
          <p id="poke-hero-race" class="poke-hero-race">RACE  <span>${
            pokemon.race[0]
          } ${pokemon.race[1] ?? ""}</span></p>
      </div>
      <div class="poke-hero-defense-info">
          <p class="poke-hero-defense">DEFENSE:<strong>${
            pokemon.defense
          }</strong></p>
      </div>
  </div>
  <div class="poke-hero-info-down-side">
    <div class="poke-hero-update-power-img">
        <a class="poke-attack-up"><img class="poke-hero-attack-up" src="" alt=""></a>
        <a class="poke-defence-up"><img class="poke-hero-defence-up" src="" alt=""></a>
    </div>
    <div class="poke-hero-attack-info">
        <p class="poke-attack-text">ATTACK :</p>
        <h1 class="poke-attack-info">${pokemon.attack}</h1>
    </div>
  </div>
</div>
  `;
}
function renderEnemyPokemon(enemyPokemon) {
  const enemyCard = document.getElementById("pokemon-enemy-card");
  enemyCard.innerHTML = `
  <div class="poke-card-info">
  <img class="poke-card-rank" src="" alt="">
  <h2 class="poke-hero-name">${enemyPokemon.name}</h2>
  <h1 id="poke-hero-hp" class="poke-hero-hp poke-enemy-hp">${
    enemyPokemon.initialHp
  }</h1>
</div>
<div class="poke-card-hero-image">
  <img id="poke-hero-img" class="poke-hero-img" src="${
    enemyPokemon.image
  }" alt="">
</div>
<div class="poke-card-power-info">
  <div class="poke-hero-info">
      <div class="poke-hero-gen-info">  
          <p id="poke-hero-race" class="poke-hero-race poke-enemy-race">RACE  <span>${
            enemyPokemon.race[0]
          } ${enemyPokemon.race[1] ?? ""}</span></p>
      </div>
      <div class="poke-hero-defense-info">
          <p class="poke-hero-defense poke-enemy-defense">DEFENSE:<strong>${
            enemyPokemon.defense
          }</strong></p>
      </div>
  </div>
  <div class="poke-hero-info-down-side">
    <div class="poke-hero-update-power-img">
        <a class="poke-attack-up"><img class="poke-hero-attack-up" src="" alt=""></a>
        <a class="poke-defence-up"><img class="poke-hero-defence-up" src="" alt=""></a>
    </div>
    <div class="poke-hero-attack-info">
        <p class="poke-attack-text poke-enemy-attack-text">ATTACK :</p>
        <h1 class="poke-attack-info poke-enemy-attack-info">${
          enemyPokemon.attack
        }</h1>
    </div>
  </div>
</div>
  `;
}
pokemonEnemyGetir();
// function getRandomNumber() {
//   const randomDecimal = Math.random();
//   const randomNumber = Math.floor(randomDecimal * 3) + 1;
//   return randomNumber;
// }

// function performAttack(attacker, defender) {
//   const currentAttack = attacker.attack * getRandomNumber() - defender.defense;
//   defender.hp -= currentAttack;
// }

// function checkIsPokemonDead(){
//     if(pokemon.hp <= 0){
//         // karakterin öldüğü mantık
//     }
// }

// performAttack(pokemon, enemy);
// performAttack(pokemon, enemy);
