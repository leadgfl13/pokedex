import "./style.css";
import { franc } from "franc-min";
import { pokemons } from "./pokedex.js";

function isEnglish(text) {
	return franc(text) === "eng";
}

function checkEnglish(array) {
	for (let i = 0; i < array.length; i++) {
		let newarray = [];
		if (array[i].language.name === "en") {
			englisharray.push(array[i]);
		}
	}
	console.log(englisharray);
}
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let poke = "";
let flavor_text = "";
let search = document.getElementById("info");
let submit = document.getElementById("submit");
let number = document.getElementById("number");
let left = document.getElementById("left");
let data = document.getElementById("data");
let stats = "";
console.log(stats);
let name = "";
let typing1 = "";
let typing2 = "";
let text_info = [];
let pokedexnum = "";
let englisharray = [];
let sprites = [];

//checks to if it's the last pokemon, if so it goes back to the first
//otherwise go to next pokemon
plus.addEventListener("click", (e) => {
	e.preventDefault();
	if (!name || name == "pecharunt") {
		console.log("yee");
		getPokemon(`bulbasaur`);
		search.value = "bulbasaur";
		return;
	} else {
		let pokevalue = pokemons[search.value];
		console.log(pokevalue);
		let next = pokevalue + 1;
		let keyFound = Object.keys(pokemons).find((key) => pokemons[key] === next);
		search.value = keyFound;

		getPokemon(pokemons[keyFound]);
	}
});

//checks to see if its the first pokemon, or there is no pokemon
//and then goes to the last pokemon
minus.addEventListener("click", (e) => {
	e.preventDefault();
	if (!name || name === "bulbasaur") {
		console.log("yee");
		getPokemon(`pecharunt`);
		search.value = "pecharunt";
	} else {
		let pokevalue = pokemons[search.value];
		console.log(pokevalue);
		let next = pokevalue - 1;
		let keyFound = Object.keys(pokemons).find((key) => pokemons[key] === next);
		search.value = keyFound;
		getPokemon(pokemons[keyFound]);
	}
});

//submits the pokemon and calls the getPokemon function with the search value
submit.addEventListener("click", (e) => {
	e.preventDefault();
	getPokemon(search.value);
});
//searches through sprites
function contains(obj) {
	let spritearray = [];

	for (let key in obj) {
		if (typeof obj[key] === "object" && obj[key] !== null) {
			// Recursively search inside nested objects and concatenate results
			spritearray = spritearray.concat(contains(obj[key]));
		} else if (obj[key] !== null) {
			console.log(obj[key]); // Log non-null values
			spritearray.push(obj[key]); // Add them to the array
		} else {
			console.log("nothing here");
		}
	}

	return spritearray;
}

//uploads the image and plays the cry sound from the first API fetch request
function addImage(poke) {
	let spritearray = [];
	let screen = document.getElementById("screen");
	screen.innerHTML = "";
	let sprite = document.createElement("img");
	pokedexnum = poke.id;
	sprite.src = poke.sprites.front_default;
	sprites = contains(poke.sprites, null);

	screen.addEventListener("click", () => {
		let random = Math.floor(Math.random() * sprites.length);
		sprite.src = sprites[random];
	});
	name = poke.name;
	stats = poke.stats;
	typing1 = poke.types[0].type.name;

	if (!poke.types[1]) {
		typing2 = "";
	} else {
		typing2 = poke.types[1].type.name;
	}
	screen.append(sprite);
	console.log(poke);
	let cry = "";
	if (!poke.cries.legacy) {
		console.log("empty");
		cry = new Audio(poke.cries.latest);
	} else {
		cry = new Audio(poke.cries.legacy);
	}
	cry.play();
	return name;
}

//gets the pokedex info from the second API fetch request and puts it on the screen
function addFlavor(flavor) {
	data.innerHTML = "";
	englisharray = [];
	let englishcheck = checkEnglish(flavor.flavor_text_entries);
	let numz = (() => {
		return Math.floor(Math.random() * englisharray.length);
	})();
	let base = englisharray[numz];
	let description = base.flavor_text;
	let version = base.version.name;
	let region = flavor.pokedex_numbers[1].pokedex.name;
	let namediv = document.createElement("div");
	let hp = stats[0].stat.name + ": " + stats[0].base_stat;
	let attack = stats[1].stat.name + ": " + stats[1].base_stat;
	let defense = stats[2].stat.name + ": " + stats[2].base_stat;
	let special_attack = stats[3].stat.name + ": " + stats[3].base_stat;
	let special_defense = stats[4].stat.name + ": " + stats[4].base_stat;
	let speed = stats[5].stat.name + ": " + stats[5].base_stat;
	//let stamina = stats[6].stat.name + ":" + stats[6].base_stat;
	let allstats = [hp, attack, defense, special_attack, special_defense, speed];
	console.log(allstats);
	let preevolve = flavor.evolves_from_species;
	if (preevolve === null) {
		preevolve = "none";
	} else {
		preevolve = preevolve.name;
	}

	namediv.innerHTML =
		"Name: " +
		name +
		"<br>" +
		`Pokedex version:` +
		" " +
		version +
		`<br> ` +
		`National Dex#:${pokedexnum} <br>  Type:${typing1} 
		 <br> Region:${region}  <br> Evolves from:${preevolve} <br> <br>
		${description}<br> <br>` +
		hp +
		`<br> ` +
		attack +
		"<br>" +
		defense +
		`<br> ` +
		special_attack +
		"<br>" +
		special_defense +
		`<br> ` +
		speed +
		"<br>";
	namediv.setAttribute("id", "namediv");
	data.append(namediv);
}

async function getPokemon(pokemon) {
	try {
		const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
			mode: "cors",
		})
			.then((poke) => poke.json())
			.then((poke) => {
				addImage(poke);

				return { poke };
			});

		const flavor = await fetch(
			`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`,
			{
				mode: "cors",
			}
		)
			.then((flavor) => flavor.json())
			.then((flavor) => {
				console.log(flavor);
				addFlavor(flavor);
				return flavor;
			});
	} catch {
		alert("Sorry, this pokemon isn't found.  Try again");
		if (name === "") {
			getPokemon("bulbasaur");
			search.value = "bulbasaur";
		} else {
			getPokemon(name);
			search.value = name;
		}
	}
}
