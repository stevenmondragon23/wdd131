const dcHeroes = [
  {
    heroName: "Superman",
    nationality: "Kryptonian",
    age: 35,
    power: 100,
    imageUrl: "https://static.dc.com/dc/files/default_images/Char_Thumb_Superman_5c3fc2758f6984.90100206.jpg?w=384"
  },
  {
    heroName: "Flash",
    nationality: "American",
    age: 28,
    power: 95,
    imageUrl: "https://static.dc.com/dc/files/default_images/Char_Thumb_Flash_20190116_5c3fcaaa18f023.90325986.jpg?w=384"
  },
  {
    heroName: "Wonder Woman",
    nationality: "Amazonian",
    age: 3000,
    power: 90,
    imageUrl: "https://static.dc.com/dc/files/default_images/Char_Thumb_WonderWoman_20190116_5c3fc6aa51d064.76155401.jpg?w=384"
  },
  {
    heroName: "Batman",
    nationality: "American",
    age: 40,
    power: 85,
    imageUrl: "https://static.dc.com/dc/files/default_images/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?w=384"
  },
  {
    heroName: "Green Lantern",
    nationality: "American",
    age: 32,
    power: 80,
    imageUrl: "https://static.dc.com/dc/files/default_images/Char_Thumb_GreenLantern_20200721_5f173ac65f56f7.70929296.jpg?w=384"
  },
  {
    heroName: "Aquaman",
    nationality: "Atlantean",
    age: 35,
    power: 78,
    imageUrl: "https://static.dc.com/dc/files/default_images/Char_Thumb_Aquaman_5c411a95e70ff5.50429372.jpg?w=384"
  },
  {
    heroName: "Cyborg",
    nationality: "American",
    age: 25,
    power: 75,
    imageUrl: "https://static.dc.com/dc/files/default_images/Char_Thumb_Cyborg_20190116_5c3fcd9048a0e1.41912254.jpg?w=384"
  },
  {
    heroName: "Shazam",
    nationality: "American",
    age: 18,
    power: 70,
    imageUrl: "https://static.dc.com/dc/files/default_images/Char_Thumb_Shazam_5c53a74aefbb12.02099042.jpg?w=384"
  },
  {
    heroName: "Martian Manhunter",
    nationality: "Martian",
    age: 2000,
    power: 65,
    imageUrl:"https://static.dc.com/dc/files/default_images/Char_Thumb_MartianManhunter_20190116_5c3fd5c45bcd52.92066763.jpg?w=384"
  },
];

createHeroeCard(dcHeroes)


const oldHeroeBtn = document.querySelector("#old");
oldHeroeBtn.addEventListener("click", () => {
    const oldHeroes = dcHeroes.filter(h => h.age > 50)
    createHeroeCard(oldHeroes);
});



const allHeroeBtn = document.querySelector("#all");
allHeroeBtn.addEventListener("click", () => {
    const allHeroes = dcHeroes
    createHeroeCard(allHeroes);
});


const youngestHeroeBtn = document.querySelector("#youngest");
youngestHeroeBtn.addEventListener("click", () => {
    const youngestHeroes = dcHeroes.filter(h => h.age < 25)
    createHeroeCard(youngestHeroes);
});


const powerfulHeroeBtn = document.querySelector("#powerful");
powerfulHeroeBtn.addEventListener("click", () => {
    const powerfulHeroes = dcHeroes.filter(h => h.power > 85)
    createHeroeCard(powerfulHeroes);
});


const weakestHeroeBtn = document.querySelector("#weakest");
weakestHeroeBtn.addEventListener("click", () => {
    const weakestHeroes = dcHeroes.filter(h => h.power < 80)
    createHeroeCard(weakestHeroes);
});




















    function createHeroeCard(dcHeroes) {
    const container = document.querySelector(".heroeslist");
    container.innerHTML = "";
    
    dcHeroes.forEach(dcHeroes => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let nationality = document.createElement("p");
        let age = document.createElement("p");
        let power = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = dcHeroes.heroName;
        nationality.innerHTML = `<span class="label">Nationality:</span> ${dcHeroes.nationality}`;
        age.innerHTML = `<span class="label">Age:</span> ${dcHeroes.age}` ; 
        power.innerHTML = `<span>Power: </span> ${dcHeroes.power} %`;
        img.setAttribute("src", dcHeroes.imageUrl);
        img.setAttribute("alt", `${dcHeroes.heroName} Hero`);
        img.setAttribute("loading", "lazy");  
        
        card.appendChild(name);
        card.appendChild(nationality);
        card.appendChild(age);
        card.appendChild(power);
        card.appendChild(img);

        document.querySelector(".heroeslist").appendChild(card);

    });
}




















