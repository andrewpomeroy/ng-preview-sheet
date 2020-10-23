import template from "./preview-sheet.html";

const previewSheet = {
	bindings: {
		itemId: "<",
		previewItem: "<",
		clickOutsideToClose: "<",
		outerCtrl: "<"
	},
	require: {
		previewListContext: "?^",
	},
	controller: PreviewSheetCtrl,
	// transclude: true
};

PreviewSheetCtrl.$inject = ["$scope", "$element", "$attrs", "$state", "$timeout", "$window", "$mdDialog", "$compile", "$transclude", "$mdCompiler"];

function PreviewSheetCtrl($scope, $element, $attrs, $state, $timeout, $window, $mdDialog, $compile, $transclude, $mdCompiler) {
	var $ctrl = this;

	$ctrl.cancel = function () {
		$state.go("^", {}, { location: "replace" });
	};

	// $element.on("click", function (e) {
	// 	$ctrl.stopProp(e);
	// });

	$ctrl.$onDestroy = function () {
		$mdDialog.hide("destroyed");
	};

	$ctrl.innerTemplate = $element.children();

	$ctrl.$onInit = function () {
		// console.log($ctrl.previewItem);
	};

	$ctrl.$postLink = function () {
		// Default clickOutsideToClose to true
		if (!$attrs.clickOutsideToClose) {
			$ctrl.clickOutsideToClose = true;
		}

	};

	$scope.$watch("$ctrl.itemId", function (newValue, oldValue) {
		$mdDialog.show({
			parent: $window.angular.element(document.body),
			controller: [
				"$scope",
				"$mdDialog",
				"$element",
				"clickOutsideToClose",
				"itemId",
				"previewItem",
				"innerTemplate",
				"$outerCtrl",
				// "openEvent",
				function PreviewSheetInnerCtrl(
					$scope,
					$mdDialog,
					$element,
					clickOutsideToClose,
					itemId,
					previewItem,
					innerTemplate,
					$outerCtrl,
					// openEvent
				) {
					var $previewSheetCtrl = this;
					$scope.$ctrl = $outerCtrl;
					$scope.$previewSheetCtrl = $previewSheetCtrl;
					$previewSheetCtrl.itemId = itemId;

					$previewSheetCtrl.cancel = function() {
						$mdDialog.cancel();
					};

					$previewSheetCtrl.handleOutsideClick = function ($event) {
						console.log($event);
						$previewSheetCtrl.cancel();
					};

					$previewSheetCtrl.$onInit = function () {
						var target = $element.find("transclude-target");
						target.append($compile(innerTemplate)($scope))
					};

					$previewSheetCtrl.stopProp = function (e) {
						e.stopPropagation();
					};

				},
			],
			bindToController: true,
			controllerAs: "$previewSheetCtrl",
			focusOnOpen: true,
			fullscreen: true,
			multiple: true,
			template: template,
			locals: {
				itemId: $ctrl.itemId,
				clickOutsideToClose: $ctrl.clickOutsideToClose,
				previewItem: $ctrl.previewItem,
				$outerCtrl: $ctrl.outerCtrl,
				innerTemplate: $ctrl.innerTemplate,
				// openEvent: $ctrl.openEvent,
			},
			// onRemoving: function () {
			// 	$ctrl.openEvent.target.focus();
			// },
		})	
			.then(function (result) {
				console.log("result", result);
				// $ctrl.onClose(result);
			})
			.catch(function (error) {
				$ctrl.cancel(error);
				console.log("canceled", error);
			});

	});

}

export default previewSheet;