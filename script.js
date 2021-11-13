
jQuery(document).ready(function($) {

    $.getJSON("database/pokemons.json", function(data){
        for (var i = 0; i < data.pokemons.length; i++) {
        	var pokemon = data.pokemons[i];
        	var html = '<tr class="clickable-row" data-pokemon="' + pokemon.id + '">';
			html += '<td>#' + pokemon.id + '</td>';
			html += '<td><img class="pokemon-icon" src="images/icons/' + pokemon.id + '.webp"></td>';
			html += '<td><b>' + pokemon.name + '</b></td>';
			html += '<td>' + pokemon.catch_rate + '</td>';
			html += '<td>' + pokemon.height + ' m</td>';
			html += '<td>' + pokemon.weight + ' kg</td>';
			var type = "";
			for(var j = 0; j < pokemon.type.length; j++) {
				type += '<span class="category">' + pokemon.type[j].name + '</span> '
			}
			html += '<td class="text-right">' + type + '</td>';
			html += '</tr>';

        	document.getElementById("pokemons-lst").innerHTML += html;
        }
        clickableRow();
    });
});

function clickableRow() {
    $(".clickable-row").click(function() {
    	var id = $(this).data("pokemon");
    	$.getJSON("database/pokemons.json", function(data){
    		var selected_pokemon = null;
    		for (var i = 0; i < data.pokemons.length; i++) {
    			if(id === data.pokemons[i].id) {
    				selected_pokemon = data.pokemons[i];
    				break;
    			}
    		}
    		if(selected_pokemon !== null) {
    			$('#pokemon-content-text').fadeOut("slow", function() {
    				var html = '<h1>' + selected_pokemon.name + '</h1>';
    				html += '<p>' + selected_pokemon.description + '</p>';
				    $('#pokemon-content-text').html(html);
				    $('#pokemon-content-text').fadeIn("slow");
				});
    			$('#pokemon-img').fadeOut("slow", function() {
    				var html = '<img id="pokemon-img-img" src="images/profil/' + selected_pokemon.id + '.png">';
				    $('#pokemon-img').html(html);
				    $('#pokemon-img').fadeIn("slow");
				});
    			$('#pokemon-background').fadeOut("slow", function() {
    				var color = selected_pokemon.color;
				    $('#pokemon-background').css("background-color", color);
				    $('#pokemon-background').fadeIn("slow");
				});
    		}
    	});
	});
}