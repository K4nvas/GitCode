 var app = angular.module("MyFirstApp",[]);
// angular.module("MyFirstApp",[]);
app.controller("FirstController", ["$scope", function(m)
{
	m.nombre = "Richard Gómez";
    m.nuevoComentario = {};
    m.comentarios = [
    {
        comentario : "Buen Trabjao",
        username : "Usuario 1"
    },
    {
        comentario : "Mal Trabajo",
        username : "Usuario 2"
    }

    ];

    m.agregarComentario = function() 
    {
        m.comentarios.push(m.nuevoComentario);
        m.nuevoComentario = {};
    }
}]);



