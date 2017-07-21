"use strict";
$(document).ready(
	function(){
		console.log("inicio");

		$.ajax({
			url:"/loadProfile",
			data:{},
			method:"post",
			success:function(res,textstatus,xhr){
				$("#fases").empty();
				var fiel=inicioPerfil(res.im);
				$("#fases").html(fiel);
			}
		});

	$("#book, #film, #show, #game").click(function(){
		console.log("especifico");

		$.ajax({
			url:"/especif",
			data:{},
			method:"post",
			success:function(res,textstatus,xhr){
				$("#fases").empty();
				var cel=especifico(res.im);
				$("#fases").html(cel);
			}
		});
	});

	});

function inicioPerfil(imagen){
	var texto="";
	var apartados=["libros","peliculas","series","videojuegos"];

	for(let ap of apartados){
		texto+="<fieldset class='field'> "+"<legend>"+ap+"</legend>"+imagen+"</fieldset>";
	}

	return texto;
}

function especifico(imagen){
	var texto="";
	var apartados=["Quiero Leer","leidos","favoritos","abandonados"];

	for(let ap of apartados){
		texto+="<fieldset class='field'> "+"<legend>"+ap+"</legend>"+imagen+"</fieldset>";
	}

	return texto;
}