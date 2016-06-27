angular.module("ToDoList", ["LocalStorageModule"])
.controller("ToDoController", function ($scope, localStorageService) {
    if(localStorageService.get("cacheTodoList"))
    {
        $scope.todo = localStorageService.get("cacheTodoList");
    }
    else
    {
        $scope.todo = [];
    }

    /*
        {
            actividad   : 'Terminar el curso Angular',
            Fecha       : '26/06/2016'
        }
    */

    // $scope.$watch(function() {
    //     return $scope.newActivity;
    // }, function(newValue, oldValue) {
    //     console.log(newValue);
    //     console.log(oldValue);
    // });

    /* Cada vez que se actualize la Lista, la función de Angular Watch, 
    observa la modificación de la lista y se le define una acción a raíz
    de esta. */
    $scope.$watchCollection('todo', function(newValue, oldValue) {
        localStorageService.set("cacheTodoList",$scope.todo);
    })

    $scope.addActivity = function() {
        // console.log($scope.newActivity);
        $scope.todo.push($scope.newActivity);
        $scope.newActivity = {};
        // localStorageService.set("cacheTodoList",$scope.todo);
        // console.log(localStorageService.get("cacheTodoList"));
    }

    $scope.clean = function() {
        $scope.todo = [];
        // localStorageService.set("cacheTodoList",$scope.todo);
    }

});