import "./style.css";

let search = document.getElementById("info");
let submit = document.getElementById("submit");
let number = document.getElementById("number");

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getPokemon(search.value);
});

function addImage(poke) {
	let screen = document.getElementById("screen");
	screen.innerHTML = "";
	let sprite = document.createElement("img");
	sprite.src = poke.sprites.front_shiny;
	screen.append(sprite);
	let cry = new Audio(poke.cries.legacy);
	console.log(poke);
	cry.play();
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
}
