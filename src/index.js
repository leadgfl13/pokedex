import "./style.css";

let search = document.getElementById("info");
let submit = document.getElementById("submit");
let number = document.getElementById("number");
let left = document.getElementById("left");

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
	console.log(poke);
	let cry = new Audio(poke.cries.legacy);
	let name = poke.forms[0].name;
	let namediv = document.createElement("div");
	namediv.innerHTML = name;
	left.append(namediv);
	namediv.setAttribute("id", "namediv");

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
