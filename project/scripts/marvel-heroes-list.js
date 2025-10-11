const marvelHeroes = [
  {
    heroName: "Sentry",
    nationality: "American",
    age: 38,
    power: 96,
    imageUrl: "https://i.pinimg.com/1200x/6f/80/88/6f80880b8779ca0c47d94872a8973b74.jpg"
  },
  {
    heroName: "Hulk",
    nationality: "American",
    age: 40,
    power: 95,
    imageUrl: "https://i.pinimg.com/736x/da/63/83/da638340c3e02528f4558c1eac02edb7.jpg"
  },
  {
    heroName: "Thor",
    nationality: "Asgardian",
    age: 1500,
    power: 92,
    imageUrl: "https://i.pinimg.com/1200x/3d/b5/85/3db585f14a398778015b1c847d2beeee.jpg"
  },
  {
    heroName: "Captain Marvel",
    nationality: "American",
    age: 30,
    power: 90,
    imageUrl: "https://i.pinimg.com/1200x/34/ff/e5/34ffe5a5cd4ca9e08a79bc3813da494e.jpg"
  },
  {
    heroName: "Iron Man",
    nationality: "American",
    age: 48,
    power: 85,
    imageUrl: "https://i.pinimg.com/736x/9d/b3/a8/9db3a8156aae930919ca3869e1ed11ff.jpg"
  },
  {
    heroName: "Spider-Man",
    nationality: "American",
    age: 20,
    power: 80,
    imageUrl: "https://i.pinimg.com/1200x/66/03/05/660305410e2ec21675c895e86b00a6a2.jpg"
  },
  {
    heroName: "Black Panther",
    nationality: "Wakandan",
    age: 35,
    power: 75,
    imageUrl: "https://i.pinimg.com/1200x/08/e7/26/08e726333ba02edec989d5f88d9d220a.jpg"
  },
  {
    heroName: "Doctor Strange",
    nationality: "American",
    age: 42,
    power: 70,
    imageUrl: "https://i.pinimg.com/1200x/d8/68/98/d8689809a7a012ae8bd3faa6ff48bac8.jpg"
  },
  {
    heroName: "Ant-Man",
    nationality: "American",
    age: 38,
    power: 65,
    imageUrl: "https://i.pinimg.com/736x/e7/bb/44/e7bb44a50e5717c5e28d4aaf0c77139f.jpg"
  }
];

createHeroeCard(marvelHeroes)


const oldHeroeBtn = document.querySelector("#old");
oldHeroeBtn.addEventListener("click", () => {
    const oldHeroes = marvelHeroes.filter(h => h.age > 50)
    createHeroeCard(oldHeroes);
});



const allHeroeBtn = document.querySelector("#all");
allHeroeBtn.addEventListener("click", () => {
    const allHeroes = marvelHeroes
    createHeroeCard(allHeroes);
});


const youngestHeroeBtn = document.querySelector("#youngest");
youngestHeroeBtn.addEventListener("click", () => {
    const youngestHeroes = marvelHeroes.filter(h => h.age < 25)
    createHeroeCard(youngestHeroes);
});


const powerfulHeroeBtn = document.querySelector("#powerful");
powerfulHeroeBtn.addEventListener("click", () => {
    const powerfulHeroes = marvelHeroes.filter(h => h.power > 85)
    createHeroeCard(powerfulHeroes);
});


const weakestHeroeBtn = document.querySelector("#weakest");
weakestHeroeBtn.addEventListener("click", () => {
    const weakestHeroes = marvelHeroes.filter(h => h.power < 80)
    createHeroeCard(weakestHeroes);
});




















    function createHeroeCard(marvelHeroes) {
    const container = document.querySelector("#marvelpart");
    container.innerHTML = "";
    
    marvelHeroes.forEach(marvelHeroes => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let nationality = document.createElement("p");
        let age = document.createElement("p");
        let power = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = marvelHeroes.heroName;
        nationality.innerHTML = `<span class="label">Nationality:</span> ${marvelHeroes.nationality}`;
        age.innerHTML = `<span class="label">Age:</span> ${marvelHeroes.age}` ; 
        power.innerHTML = `<span>Power: </span> ${marvelHeroes.power} %`;
        img.setAttribute("src", marvelHeroes.imageUrl);
        img.setAttribute("alt", `${marvelHeroes.heroName} Hero`);
        img.setAttribute("loading", "lazy");  
        
        card.appendChild(name);
        card.appendChild(nationality);
        card.appendChild(age);
        card.appendChild(power);
        card.appendChild(img);

        document.querySelector("#marvelpart").appendChild(card);

    });
}




















