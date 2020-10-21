import template from "./permits-preview-list.html";

const permitsPreviewList = {
	require: {
		previewListContext: "^",
	},
	template: template,
	controller: PermitsPreviewListCtrl
};

PermitsPreviewListCtrl.$inject = ["$scope"];

function PermitsPreviewListCtrl($scope) {
	var $ctrl = this;

	$ctrl.$onInit = function () {
		$ctrl.previewListContext.getList().then(function (results) {
			// console.log(results);
			// $ctrl.list = results;
		});
	};

	$scope.$watch(function () {
		// passing in a function instead of a string to $watch just allows us to watch properties that aren't on `$scope`
		return $ctrl.previewListContext.list;
	}, function (newVal, oldVal) { 
		console.log("watcher says", newVal, oldVal);
	});

	

}

export default permitsPreviewList;