import moment from "moment";
import template from "./permit-summary.html";

const permitSummary = {
	bindings: {
		itemId: "<",
		previewItem: "<"
		// clickOutsideToClose: "<"
	},
	require: {
		// previewContext: "?^",
	},
	template: template,
	controller: PermitSummaryCtrl
};

PermitSummaryCtrl.$inject = [];

function PermitSummaryCtrl() {
	var $ctrl = this;

	$ctrl.isExpired = function () {
		return $ctrl.previewItem && $ctrl.previewItem.expirationDate && moment($ctrl.previewItem.expirationDate).isBefore(moment().add("day", 1).set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0));
	};

}

export default permitSummary;