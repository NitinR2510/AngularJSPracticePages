const app = angular.module("myApp", ["ngRoute"]);
		app.config(function ($routeProvider) {
			$routeProvider
				.when("/books", {
					templateUrl: "views/page1.html",
                    controller: "bookCtrl"
				})
				.when("/ice", {
					templateUrl: 'views/page2.html',
                    controller: "iceCtrl"
				})
				.otherwise({
					redirectTo: "index.html"
				})
		});

        app.controller("timeCtrl",function($scope, $interval){
            $scope.months = ["August", "September", "October"];
            $scope.count = 0;
            $interval(function(){
                $scope.today = new Date();
            }, 1000);
        });

        app.controller("bookCtrl",function($scope){
            $scope.books = [
                {book: "They both Die At the End", author: "Adam Silvera", completion: "0"},
                {book: "Another Dozen stories", author: "Satyajit Ray", completion: "0"},
                {book: "Rashmirathi", author: "Dinkar", completion: "40"},
            ];
        });
        app.controller("iceCtrl", function($scope, $location){
            $scope.currentWebAddress = $location.absUrl();
            $scope.currentWebProtocol = $location.protocol();
            $scope.currentWebHost = $location.host();
            $scope.currentWebPortNumber = $location.port();
        });
        app.controller("numbersCtrl", function($scope){
            $scope.name = "guest";
            $scope.image = "images/mango.png";
        });