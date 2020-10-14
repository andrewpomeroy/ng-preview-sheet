angular.module("app", ["ui.router", 'ngAnimate', 'ngMaterial']).controller("HelloController", function ($scope) {
	$scope.person = "andrew";
});

angular.module("app").config(["$locationProvider",
	function ($locationProvider) {
		// $locationProvider.hashPrefix('!');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
		});
	}
]);

angular.module("app").config(["$stateProvider",
	function ($stateProvider) {
		$stateProvider.state({
			name: "root",
			url: "/",
			template: "<test-component prop=\"person\"></test-component>"
		});
	}
]);