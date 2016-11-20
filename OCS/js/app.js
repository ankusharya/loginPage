var app = angular.module("login",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "view/login.html"
	})
	.when("/login",{
		templateUrl : "view/login.html"
	})
	.when("/register",{
		templateUrl : "view/register.html"
	})
	.otherwise({
		rediretTo : "/"
	});
});