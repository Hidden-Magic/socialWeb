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

	$("#actual, #reto").click(function(){
		$.ajax({
			url:"/reading",
			data:{},
			method:"post",
			success:function(res,textstatus,xhr){
				$("#fases").empty();
				var cel=leyendo(res.im);
				$("#fases").html(cel);
			}
		});
	});

	});

function inicioPerfil(imagen){
	var texto="";
	var apartados=["libros","peliculas","series","videojuegos"];

	texto+="<div id='fases'>"
	for(let ap of apartados){
		texto+="<fieldset class='field'> "+"<legend>"+ap+"</legend>"+imagen+"</fieldset>";
	}
	texto+="</div>"
	return texto;
}

function especifico(imagen){
	var texto="";
	var apartados=["Quiero Leer","leidos","favoritos","abandonados"];
	
	texto+="<div id='fases'>"
	for(let ap of apartados){
		texto+="<fieldset class='field'> "+"<legend>"+ap+"</legend>"+imagen+"</fieldset>";
	}
	texto+="</div>"
	return texto;
}

function leyendo(imagen){
	var texto="";
	
	texto+="<fieldset class='field'> "+"<legend>leyendo</legend> <div id='conProgreso'>";
	texto+=imagen+"<div id='datos' class='bordes'>"+
							"<label>titulo de libro</label>"+
							"<label>Autor</label>"+
							"<div id='progreso' class='bordes'>"+
								"<label>x de x</label>"+
								"<progress value='20' max='100'>"+
							"</div>"+
						"</div>";
	texto+=imagen+"<div id='datos' class='bordes'>"+
							"<label>titulo de libro</label>"+
							"<label>Autor</label>"+
							"<div id='progreso' class='bordes'>"+
								"<label>x de x</label>"+
								"<progress value='20' max='100'>"+
							"</div>"+
						"</div>";
	texto+="</div></fieldset>";

	return texto;
}