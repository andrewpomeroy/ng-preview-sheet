import faker from "faker";

export default ["$scope", "$q", "allPermits", function ($scope, $q, allPermits) {
	$scope.data = allPermits;
}];