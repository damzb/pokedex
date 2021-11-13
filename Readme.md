# Pokedex

Pokedex is a Javascript / Html / CSS application 

## Installation

You can clone the project using git, or directly take the files.  
Put the sources in a web server and navigate to the folder. 

That's it !

Make sure that Javascript is enable in your browser. 

## Add pokemons

In order to add more pokemons to the Pokedex, you need to open the file "pokemons.json" under the "database" folder.  
Then, you can add as many pokemons as you want. Note that you need to respect the architecture of pokemons. 

```
		{
			"id": "001", 
			"name": "Bulbasaur",
			"catch_rate": "45 (11.9%)",
			"height": 0.7,
			"weight": 6.9,
			"type": [
				{
					"name": "Grass"
				},
				{
					"name": "Poison"
				}
			],
			"color": "rgba(162, 208, 187, 0.5)",
			"description": "Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.<br /><br />It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.<br /><br />Along with Charmander and Squirtle, Bulbasaur is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen."
		},
```

You need to add icons of pokemons on the "/images/icons" folder (only webp format)  
You need to add images of pokemons on the "/images/profil" folder (only png format)  
In both case, the name of the image must be the same as the id of the pokemon. 

