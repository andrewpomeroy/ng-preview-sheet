var previewListContext = {
	bindings: {
		list: "<",
		fetchItem: "<"
	},
	controller: PreviewListContextCtrl
};

PreviewListContextCtrl.$inject = ["$scope", "$attrs", "$state", "$timeout", "$window", "$mdDialog"];

function PreviewListContextCtrl($scope, $attrs, $state, $timeout, $window, $mdDialog) {
	var $ctrl = this;

}

export default previewListContext;