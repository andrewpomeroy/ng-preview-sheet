import template from "./permit-summary.html";

const permitSummary = {
	bindings: {
		// itemId: "<",
		// clickOutsideToClose: "<"
	},
	require: {
		// previewContext: "?^",
	},
	template: template
	// controller: PermitSummaryCtrl
};

PermitSummaryCtrl.$inject = [];

function PermitSummaryCtrl() {
	var $ctrl = this;

}

export default permitSummary;