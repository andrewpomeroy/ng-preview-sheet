import angular from "angular";
import permitsTemplate from "./permits.html";
import permitsController from "./permitsController";

angular.module("app").config(["$stateProvider",
	function ($stateProvider) {
		$stateProvider.state({
			name: "root",
			url: "/",
			template: "<div ui-view></div>",
			redirectTo: "root.permits"
		});
		$stateProvider.state({
			name: "root.permits",
			url: "^/permits",
			// component: "permitPreviewList",
			template: permitsTemplate,
			controller: permitsController,
			resolve: {
				allPermits: ["PermitsService", function (PermitsService) {
					return PermitsService.getList();
				}],
				getPermitById: ["PermitsService", function (PermitsService) {
					return PermitsService.getPermitById();
				}]
			}
		});
		$stateProvider.state({
			name: "root.permits.preview",
			url: "^/preview/:previewItemId",
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