import "./style.css";

let search = document.getElementById("info");
let submit = document.getElementById("submit");
let sprite = document.getElementById("pokeimage");

submit.addEventListener("click", (e) => {
	e.preventDefault();
	alert("howdy");
	getPokemon(search.value);
});

function addImage(poke) {
	sprite.src = poke.sprites.front_shiny;
}

async function getPokemon(pokemon) {
	const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
		mode: "cors",
	})
		.then((poke) => poke.json())
		.then((poke) => {
			addImage(poke);
		});

	let frontshiny = poke.sprites.front_shiny;
	pokeimage.src = frontshiny;
}
