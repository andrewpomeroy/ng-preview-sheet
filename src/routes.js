import angular from "angular";

angular.module("app").config(["$stateProvider",
	function ($stateProvider) {
		$stateProvider.state({
			name: "root",
			url: "/",
			template: "<div ui-view></div>",
			redirectTo: "root.permits.list"
		});
		$stateProvider.state({
			name: "root.permits",
			url: "^/permits",
			redirectTo: "root.permits.list",
			component: "previewListContext",
			// template: "<list-preview-context><div ui-view></div></list-preview-context>"
			// template: "<div ui-view></div></list-preview-context>"			resolve: {
			resolve: {
				getList: ["PermitsService", function (PermitsService) {
					console.log("PermitsService.getList", PermitsService.getList);
					return PermitsService.getList;
				}],
				getItemById: ["PermitsService", function (PermitsService) {
					return PermitsService.getPermitById;
				}]
			}
		});
		$stateProvider.state({
			name: "root.permits.list",
			url: "/list",
			component: "permitsPreviewList",
			// template: "<div ui-view></div>"
			// template: permitsTemplate,
			// controller: permitsController,
			// resolve: {
			// 	allPermits: ["PermitsService", function (PermitsService) {
			// 		return PermitsService.getList();
			// 	}],
			// 	getPermitById: ["PermitsService", function (PermitsService) {
			// 		return PermitsService.getPermitById();
			// 	}]
			// }
		});
		$stateProvider.state({
			name: "root.permits.list.preview",
			url: "/preview/:previewItemId",
			component: "permitSummary",
			resolve: {
				itemId: ["$transition$", function ($transition$) {
					return $transition$.params().previewItemId;
				}],
				previewItem: ["$transition$", "PermitsService", function ($transition$, PermitsService) {
					console.log($transition$.params().previewItemId);
					console.log(PermitsService.getPermitById($transition$.params().previewItemId));
					return PermitsService.getPermitById($transition$.params().previewItemId);
				}],
			}
		});
	}
]);