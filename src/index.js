import "./style.css";

let search = document.getElementById("info");
let submit = document.getElementById("submit");
let number = document.getElementById("number");
let left = document.getElementById("left");
let data = document.getElementById("data");

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
	screen.append(sprite);
	console.log(poke);
	let cry = new Audio(poke.cries.legacy);
	cry.play();
}
function randomizer() {
	return Math.floor(Math.random() * 10);
}
//gets the pokedex info from the second API fetch request and puts it on the screen
function addFlavor(flavor) {
	data.innerHTML = "";
	let numz = randomizer();
	let name = flavor.flavor_text_entries[numz].flavor_text;
	let namediv = document.createElement("div");
	namediv.innerHTML = name;
	namediv.setAttribute("id", "namediv");
	data.append(namediv);
}

async function getPokemon(pokemon) {
	const poke = await fetch(
		`
		https://pokeapi.co/api/v2/pokemon/${pokemon}`,
		{
			mode: "cors",
		}
	)
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
