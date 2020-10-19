import template from "./permits-preview-list.html";

const permitsPreviewList = {
	require: {
		previewListContext: "^",
	},
	template: template,
	controller: PermitsPreviewListCtrl
};

PermitsPreviewListCtrl.$inject = [];

function PermitsPreviewListCtrl() {
	var $ctrl = this;

	$ctrl.$onInit = function () {
		$ctrl.previewListContext.getList();
	};

	// It's nice to use `$ctrl.list` as shorthand, this just keeps its values in sync with `$ctrl.previewListContext.list`.
	$ctrl.$doCheck = function () {
		$ctrl.list = $ctrl.previewListContext.list;
	};

	Object.defineProperties($ctrl, {
		// list: {
		// 	get: function getter() {
		// 		return $ctrl.previewListContext.list;
		// 	},
		// }
	});

}

export default permitsPreviewList;