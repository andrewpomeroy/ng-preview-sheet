import template from "./summary-documents-list.html";

const summaryDocumentsList = {
	bindings: {
		documents: "<"
	},
	template: template,
	controller: SummaryDocumentsListCtrl
};

SummaryDocumentsListCtrl.$inject = ["$scope", "$state"];

function SummaryDocumentsListCtrl($scope, $state) {
}

export default summaryDocumentsList;