import faker from "faker";

export default ["$scope", "$q", "allPermits", function ($scope, $q, allPermits) {

	// $scope.fetchPermits().then((data) => $scope.data = data);

	// $scope.getPermitById = (id) => $scope.data && $scope.data.find(x => x.id === id)
	console.log(allPermits);
	$scope.data = allPermits;

}];