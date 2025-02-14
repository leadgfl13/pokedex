import "./style.css";

let search = document.getElementById("info");
let submit = document.getElementById("submit");
let number = document.getElementById("number");
let left = document.getElementById("left");
let data = document.getElementById("data");
let name = "";
let typing1 = "";
let typing2 = "";
let text_info = [];
let pokedexnum = "";

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getPokemon(search.value);
});

//uploads the image and plays the cry sound from the first API fetch request
function addImage(poke) {
	let screen = document.getElementById("screen");
	screen.innerHTML = "";
	let sprite = document.createElement("img");
	sprite.src = poke.sprites.front_shiny;
	name = poke.name;
	typing1 = poke.types[0].type.name;
	typing2 = poke.types[1].type.name;
	console.log(typing1, typing2);

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
	let numz = (() => {
		return Math.floor(Math.random() * 10);
	})();
	let description = flavor.flavor_text_entries[numz].flavor_text;
	let version = flavor.flavor_text_entries[numz].version.name;
	let namediv = document.createElement("div");
	let pokedexnum = flavor.pokedex_numbers[0].entry_number;

	namediv.innerHTML =
		"Name: " +
		name +
		"<br>" +
		`Pokedex version:` +
		" " +
		version +
		`<br> ` +
		`National Dex#:${pokedexnum} <br>  Type:  <br> Region: Kanto <br> Weight: <br> <br>
		${description}`;
	namediv.setAttribute("id", "namediv");
	data.append(namediv);
}

async function getPokemon(pokemon) {
	const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
		mode: "cors",
	})
		.then((poke) => poke.json())
		.then((poke) => {
			addImage(poke);
			console.log(poke);
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
		});
}
