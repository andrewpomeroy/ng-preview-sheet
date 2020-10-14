angular.module("app").config(["$stateProvider",
	function ($stateProvider) {
		$stateProvider.state({
			name: "root",
			url: "/",
			template: '<button ui-sref=".preview({previewItemId: 4})">Preview</button><div ui-view></div>'
		});
    $stateProvider.state({
			name: "root.preview",
      url: "^/preview/:previewItemId",
			component: 'previewSheet',
			resolve: {
				itemId: ['$transition$', function ($transition$) {
					return $transition$.params().previewItemId;
				}]
			}
		});
	}
]);