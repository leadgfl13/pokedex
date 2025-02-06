import "./style.css";

let search = document.getElementById("info");
let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
	e.preventDefault();
	alert("howdy");
	getPokemon(search.value);
});

async function getPokemon(pokemon) {
	const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
		mode: "cors",
	})
		.then((poke) => poke.json())
		.then((poke) => {
			console.log(poke);
		});
}
