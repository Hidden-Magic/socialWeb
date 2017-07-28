"use strict";
$(document).ready(
	function(){
		console.log("inicio");

		$.ajax({
			url:"/loadProfile",
			data:{},
			method:"post",
			success:function(res,textstatus,xhr){
				$("#caratulas").empty();
				var fiel=inicioPerfil(res.im);
				$("#caratulas").html(fiel);
			}
		});

	$("#book, #film, #show, #game").click(function(){
		console.log("especifico");

		$.ajax({
			url:"/especif",
			data:{},
			method:"post",
			success:function(res,textstatus,xhr){
				$("#caratulas").empty();
				var cel=especifico(res.im);
				$("#caratulas").html(cel);
			}
		});
	});

	$("#actual, #reto").click(function(){
		$.ajax({
			url:"/reading",
			data:{},
			method:"post",
			success:function(res,textstatus,xhr){
				$("#caratulas").empty();
				var texto="<div id='actuales'>"
				var cel=leyendo(res.im);
				var seg=siguiendo(res.im);
				var ju=Jugando(res.im);
				var ret=reto();
				texto+=cel;
				texto+=seg;
				texto+=ju;
				texto+=ret;
				texto+="</div>";
				$("#caratulas").html(texto);
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
	
	texto+="<fieldset class='field'> "+"<legend>leyendo</legend> <div class='conProgreso'>";
	texto+=imagen+"<div class='datos '>"+
							"<label>titulo de libro</label>"+
							"<label>Autor</label>"+
							"<div id='progreso' >"+
								"<label>x de x</label>"+
								"<progress value='20' max='100'>"+
							"</div>"+
						"</div>";
	texto+=imagen+"<div class=' datos'>"+
							"<label>titulo de libro</label>"+
							"<label>Autor</label>"+
							"<div id='progreso' >"+
								"<label>x de x</label>"+
								"<progress value='20' max='100'>"+
							"</div>"+
						"</div>";
	texto+="</div></fieldset>";

	return texto;
}

function siguiendo(imagen){
	var texto="";
	
	texto+="<fieldset class='field'> "+"<legend>viendo</legend> <div class='conProgreso'>";
	texto+=imagen+"<div class='datos '>"+
							"<label>titulo de libro</label>"+
							"<label>Autor</label>"+
							"<div id='progreso' >"+
								"<label>x de x</label>"+
								"<progress value='20' max='100'>"+
							"</div>"+
						"</div>";
	texto+=imagen+"<div class=' datos'>"+
							"<label>titulo de libro</label>"+
							"<label>Autor</label>"+
							"<div id='progreso' >"+
								"<label>x de x</label>"+
								"<progress value='20' max='100'>"+
							"</div>"+
						"</div>";
	texto+="</div></fieldset>";

	return texto;
}

function Jugando(imagen){
	var texto="";
	
	texto+="<fieldset class='field'> "+"<legend>Jugando</legend> <div class='conProgreso'>";
	texto+=imagen+"<div class='datos '>"+
							"<label>titulo de libro</label>"+
							"<label>Autor</label>"+
						"</div>";
	texto+=imagen+"<div class=' datos'>"+
							"<label>titulo de libro</label>"+
							"<label>Autor</label>"+
						"</div>";
	texto+="</div></fieldset>";

	return texto;
}

function reto(){
	var texto="";
	
	texto+="<fieldset class='field'> "+"<legend>reto</legend> <div class='conProgreso'  style='flex-wrap:wrap;'>";
	texto+="<div class='datos' style='margin-bottom:5px;'>"+
							"<label>Lecturas</label>"+
							"<div id='progreso' class='bordes'>"+
								"<label>x de x</label>"+
								"<progress value='20' max='100'>"+
							"</div>"+
						"</div>";
	texto+="<div class='datos' style='margin-bottom:5px;'>"+
							"<label>peliculas</label>"+
							"<div id='progreso' class='bordes'>"+
								"<label>x de x</label>"+
								"<progress value='20' max='100'>"+
							"</div>"+
						"</div>";
	texto+="<div class='datos' style='margin-bottom:5px;'>"+
							"<label>series</label>"+
							"<div id='progreso' class='bordes'>"+
								"<label>x de x</label>"+
								"<progress value='20' max='100'>"+
							"</div>"+
						"</div>";
	texto+="<div class='datos' style='margin-bottom:5px;'>"+
							"<label>videojuegos</label>"+
							"<div id='progreso' class='bordes'>"+
								"<label>x de x</label>"+
								"<progress value='20' max='100'>"+
							"</div>"+
						"</div>";
	texto+="</div></fieldset>";

	return texto;
}