const getNewHeroBtn = document.querySelector(".get-hero-btn");

getNewHeroBtn.addEventListener("click", () => {
  getRandomHero(getRandomNumber());
  console.log(getRandomNumber());
});

function getRandomNumber() {
  // + 1 because we want it to randomly select number starting from 1 to 731
  return Math.floor(Math.random() * 731) + 1;
}

// A better way to write code when fetching api

const getRandomHero = async (id) => {
  const response = await fetch(
    `https://superheroapi.com/api.php/1115180842828564/${id}`
  );
  const json = await response.json();
  console.log(json);
  const img = json.image.url;
  document.querySelector(".hero-image-container").innerHTML += `<figure>
                <figcaption>Name: ${json.name}</figcaption>
                <img src = "${img}">
                <div class ="power-stats">
                <div>🧠 Intelligence: ${json.powerstats.intelligence}</div>
                <div>💪 Strength: ${json.powerstats.strength}</div>
                <div>⚡ Speed: ${json.powerstats.speed}</div>
                <div>🏋️ Durability: ${json.powerstats.durability}</div>
                <div>📊 Power: ${json.powerstats.power}</div>
                <div>⚔️Combat: ${json.powerstats.combat}</div>
              </div>
        
                      </figure>
        `;
};

// function getRandomHero(id) {
//   fetch(`https://superheroapi.com/api.php/1115180842828564/${id}
//     `)
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);

//       const img = json.image.url;
//       document.querySelector(".hero-image-container").innerHTML += `<figure>
//                 <img src = "${img}">
//                 <figcaption style="margin: 0 auto;">Name: ${json.name}</figcaption>

//                       </figure>
//         `;
//     });
// }

// For searching feature

const searchBtn = document.querySelector(".search-btn");
let heroName = document.querySelector("input");
searchBtn.addEventListener("click", () => {
  if (heroName.value === "") {
    alert("You did not type in any hero names.");
  } else {
    getHero(heroName.value);
    heroName.value = "";
  }
});

// A better way to write code when fetching api

const getHero = async (name) => {
  const response = await fetch(
    `https://superheroapi.com/api.php/1115180842828564/search/${name}`
  );
  const json = await response.json();
  console.log(json);
  let imageContainer = "";
  json.results.forEach((result) => {
    imageContainer += `<figure>
                 <figcaption>Name: ${result.name}</figcaption>
                 <img src = "${result.image.url}" >
                 <div class ="power-stats">
                  <div>🧠 Intelligence: ${result.powerstats.intelligence}</div>
                  <div>💪 Strength: ${result.powerstats.strength}</div>
                  <div>⚡ Speed: ${result.powerstats.speed}</div>
                  <div>🏋️ Durability: ${result.powerstats.durability}</div>
                  <div>📊 Power: ${result.powerstats.power}</div>
                  <div>⚔️Combat: ${result.powerstats.combat}</div>
                </div>
             </figure>`;
  });
  document.querySelector(".hero-image-container").innerHTML = imageContainer;
};

// A feature wo just type in input then click enter
heroName.addEventListener("keydown", () => {
  handleKeyDown();
});

function handleKeyDown() {
  if (event.key === "Enter") {
    getHero(heroName.value);
    heroName.value = "";
  }
}

// function getHero(name) {
//   fetch(`https://superheroapi.com/api.php/1115180842828564/search/${name}`)
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       let imageContainer = "";
//       json.results.forEach((result) => {
//         imageContainer += `<figure>
//                    <figcaption>Name: ${result.name}</figcaption>
//                    <img src = "${result.image.url}" >
//                    <div class ="power-stats">
//                     <div>🧠 Intelligence: ${result.powerstats.intelligence}</div>
//                     <div>💪 Strength: ${result.powerstats.strength}</div>
//                     <div>⚡ Speed: ${result.powerstats.speed}</div>
//                     <div>🏋️ Durability: ${result.powerstats.durability}</div>
//                     <div>📊 Power: ${result.powerstats.power}</div>
//                     <div>⚔️Combat: ${result.powerstats.combat}</div>
//                    </div>
//                     </figure>`;
//       });

//       document.querySelector(".hero-image-container").innerHTML =
//         imageContainer;
//     });
// }
