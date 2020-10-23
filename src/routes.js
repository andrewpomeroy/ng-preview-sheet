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
			resolve: {
				getList: ["PermitsService", function (PermitsService) {
					return PermitsService.getList;
				}],
			}
		});
		$stateProvider.state({
			name: "root.permits.list",
			url: "/list",
			component: "permitsPreviewList",
		});
		$stateProvider.state({
			name: "root.permits.list.preview",
			url: "/preview/:previewItemId",
			component: "permitSummary",
			
			resolve: {
				itemId: ["$transition$", function ($transition$) {
					return $transition$.params().previewItemId;
				}],
				// previewItem: ["$transition$", "PermitsService", function ($transition$, PermitsService) {
				// 	console.log($transition$.params().previewItemId);
				// 	console.log(PermitsService.getPermitById($transition$.params().previewItemId));
				// 	return PermitsService.getPermitById($transition$.params().previewItemId);
				// }],
			}
		});
		
	}
]);