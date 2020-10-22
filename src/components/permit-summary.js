import moment from "moment";
import template from "./permit-summary.html";

const permitSummary = {
	bindings: {
		itemId: "<",
		// previewItem: "<"
		// clickOutsideToClose: "<"
	},
	require: {
		previewListContext: "^",
	},
	template: template,
	controller: PermitSummaryCtrl
};

PermitSummaryCtrl.$inject = ["$scope", "$state"];

function PermitSummaryCtrl($scope, $state) {
	var $ctrl = this;

	$ctrl.$onChanges = function (changes) {
		if (changes.itemId) {
			// $ctrl.previewListContext.previewItem.fetch(changes.itemId.currentValue).then(function () {
			$ctrl.previewListContext.dispatch({type: "GET_ITEM", payload: changes.itemId.currentValue});
		}
	};

	$scope.$watch(function () {
		// passing in a function instead of a string to $watch just allows us to watch properties that aren't on `$scope`
		return $ctrl.previewListContext.previewItem.data;
	}, function (newVal, oldVal) {
		if (newVal) {
			$ctrl.previewItem = newVal;
		}
	});

	$ctrl.isExpired = function () {
		return $ctrl.previewItem && $ctrl.previewItem.expirationDate && moment($ctrl.previewItem.expirationDate).isBefore(moment().add("day", 1).set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0));
	};

	$ctrl.$postLink = function () {
	};

}

export default permitSummary;