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
			template: permitsTemplate,
			controller: permitsController
		});
		$stateProvider.state({
			name: "root.permits.preview",
			url: "^/preview/:previewItemId",
			component: "previewSheet",
			resolve: {
				itemId: ["$transition$", function ($transition$) {
					return $transition$.params().previewItemId;
				}]
			}
		});
	}
]);