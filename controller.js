 var app = angular.module("MyFirstApp",[]);
// angular.module("MyFirstApp",[]);
app.controller("FirstController", function($scope)
{
	$scope.nombre = "Richard";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
    // {
    //     comentario : "Buen Trabjao",
    //     username : "Usuario 1"
    // },
    // {
    //     comentario : "Mal Trabajo",
    //     username : "Usuario 2"
    // }
    
    ];

    $scope.agregarComentario = function() 
    {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});



