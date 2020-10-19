import template from "./preview-list-context.html";

var previewListContext = {
	bindings: {
		// list: "<",
		_getList: "<getList",
		// selectedItemId: "<",
		// fetchItem: "<"
	},
	controller: PreviewListContextCtrl,
	template: template,
};

PreviewListContextCtrl.$inject = ["$scope", "$q"];

function PreviewListContextCtrl($scope, $q) {
	var $ctrl = this;
	
	$ctrl.list = [];

	$ctrl.getList = function (queryParams) {
		var deferred = $q.defer();

		$ctrl._getList(queryParams)
			.then(function (results) {
				var list = results;
				if (queryParams && queryParams.filter) {
					list = list.filter(queryParams.filter);
					console.log(queryParams.filter);
				}
				$ctrl.list = list;
				deferred.resolve(list);
			})
			.catch(function (error) {
				deferred.reject(error);
			});

		return deferred.promise;
	};

	$ctrl.$onInit = function () {
	};

}
export default previewListContext;