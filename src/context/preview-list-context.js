import template from "./preview-list-context.html";

var previewListContext = {
	bindings: {
		// list: "<",
		getList: "<",
		// selectedItemId: "<",
		getItem: "<"
	},
	controller: PreviewListContextCtrl,
	template: template,
};

PreviewListContextCtrl.$inject = ["$scope", "$q"];

function PreviewListContextCtrl($scope, $q) {
	var $ctrl = this;

	$ctrl.$onInit = function () {
		$ctrl.list = {
			status: "idle",
			// lastQuery: {},
			data: [],
			fetch: getList
		};
	
		$ctrl.previewItem = {
			status: "idle",
			// lastQuery: {},
			data: {},
			fetch: getItem
		};
	};
	

	$ctrl.dispatch = function (action) {
		switch (action.type) {
		case "GET_LIST":
			$ctrl.list.fetch(action.payload).then(function(result) {
				$ctrl.list.data = result;
			})
				.catch(function (error) {
					console.error(error);
				});		
			break;
		case "GET_ITEM":
			$ctrl.previewItem.fetch(action.payload).then(function (result) {
				$ctrl.previewItem.data = result;
			})
				.catch(function (error) {
					console.error(error);
				});		
			break;
		case "SELECT_ITEM":
			$ctrl.selectedItemId = action.payload;
			break;
		default:
			break;
		}
	};

	function getList (queryParams) {
		var deferred = $q.defer();
		$ctrl.list.status = "loading";
		$ctrl.getList(queryParams)
			.then(function (result) {
				$ctrl.list.status = "complete";
				var list = result;
				// if (queryParams && queryParams.filter) {
				// 	list = list.filter(queryParams.filter);
				// }
				$ctrl.list.data = list;
				deferred.resolve(list);
			})
			.catch(function (error) {	
				$ctrl.list.status = "error";
				deferred.reject(error);
			});

		return deferred.promise;
	}

	function getItem (id) {
		var deferred = $q.defer();
		$ctrl.previewItem.status = "loading";
		if (
			// If there's not a custom fetch-item function defined for this context instance, we'll just hitch onto the getList function (or dig through the existing list if it's already been populated)
			!$ctrl.getItem 
		) {
			if (!_getItem(id)) {
				getList().then(function () {
					$ctrl.previewItem.status = "complete";
					deferred.resolve(_getItem(id));
				})
					.catch(function (error) {
						$ctrl.previewItem.status = "error";
						deferred.reject(error);
					});
			}
			else {
				$ctrl.previewItem.status = "complete";
				deferred.resolve(_getItem(id));
			}
		}
		else {
			$ctrl.getItem(id).then(function (result) {
				$ctrl.previewItem.status = "complete";
				deferred.resolve(result);
			})
				.catch(function(error) {
					$ctrl.previewItem.status = "error";
					deferred.reject(error);
				});
		}

		return deferred.promise;
	}

	function _getItem (id) {
		return $ctrl.list.data.find(function (item) {
			return item.id === id;
		});
	}

}
export default previewListContext;