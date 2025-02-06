import "./style.css";

let search = document.getElementById("info");
let submit = document.getElementById("submit");
let sprite = document.getElementById("pokeimage");

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getPokemon(search.value);
});

function addImage(poke) {
	sprite.src = poke.sprites.front_shiny;
	let cry = new Audio(poke.cries.legacy);
	cry.play();
}

async function getPokemon(pokemon) {
	const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
		mode: "cors",
	})
		.then((poke) => poke.json())
		.then((poke) => {
			console.log(poke);
			addImage(poke);
		});
}
