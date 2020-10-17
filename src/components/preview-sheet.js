import template from "./preview-sheet.html";

const previewSheet = {
	bindings: {
		itemId: "<",
		clickOutsideToClose: "<"
	},
	require: {
		previewContext: "?^",
	},
	controller: PreviewSheetCtrl
};

PreviewSheetCtrl.$inject = ["$scope", "$attrs", "$state", "$timeout", "$window", "$mdDialog"];

function PreviewSheetCtrl($scope, $attrs, $state, $timeout, $window, $mdDialog) {
	var $ctrl = this;

	$ctrl.cancel = function () {
		$state.go("^", {}, { location: "replace" });
	};

	$ctrl.stopProp = function (e) {
		e.stopPropagation();
	};

	$ctrl.$onDestroy = function () {
		$mdDialog.hide("destroyed");
	};

	$ctrl.$postLink = function () {
		// Default to visible
		if (!$attrs.clickOutsideToClose) {
			$ctrl.clickOutsideToClose = true;
		}
	};

	$scope.$watch("$ctrl.itemId", function (newValue, oldValue) {
		console.log("newValue", newValue);
		$mdDialog.show({
			parent: $window.angular.element(document.body),
			controller: [
				"$mdDialog",
				"clickOutsideToClose",
				"itemId",
				"$state",
				// "openEvent",
				function PreviewSheetInnerCtrl(
					$mdDialog,
					clickOutsideToClose,
					itemId,
					$state
					// openEvent
				) {
					var $ctrl = this;
					$ctrl.itemId = itemId;

					$ctrl.cancel = function() {
						$mdDialog.cancel();
					};

					$ctrl.handleOutsideClick = function ($event) {
						console.log($event);
						$ctrl.cancel();
					};

				},
			],
			bindToController: true,
			controllerAs: "$ctrl",
			focusOnOpen: true,
			fullscreen: true,
			multiple: true,
			template,
			locals: {
				itemId: $ctrl.itemId,
				clickOutsideToClose: $ctrl.clickOutsideToClose
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

	$ctrl.documents = [
		{
			id: "-6207505612266167854",
			applicantConfidentialityRequested: false,
			createdDate: "2016-09-22T20:23:26.000Z",
			createdUserDisplayName: "Justin Smith",
			documentContentSize: 967101,
			documentCreateTypeDescription: "Uploaded by DEQ Staff",
			documentDescription: null,
			documentName: "2016_9_21_Photos taken by County SESC inspector .pdf",
			documentNotPublishReasonTypeDescription: null,
			documentNotPublishReasonTypeId: null,
			documentPublishedStatusTypeId: null,
			documentReceivedDate: null,
			documentReceivedOrCreatedDate: "09/22/2016 1:23 PM",
			documentSecurityCategoryCode: "PUBL",
			documentSecurityTypeCode: "PUBL",
			documentSecurityTypeDescription: "Public",
			documentSecurityTypeLongDescription:
					"Public documents are available for distribution to the public and can be disclosed to anyone without violating an individual’s right to privacy or causing any potential harm. Public data is not sensitive in context or content, and does not require special protection.",
			documentStatusTypeDescription: "Draft",
			documentStatusTypeId: "DRAFT",
			hasPdfContent: false,
			isLinkedDocument: null,
			labelStyleId: "CAUTION",
			linkedDocManagementId: null,
			mimeType: "application/pdf",
			siteId: "3720888657366759423",
			sourceDescription: null,
			sourceNumber: null,
			sourceType: "SITE",
			sourceTypeDescription: "Site",
			sourceTypeId: "3720888657366759423",
			updatedDate: "09/22/2016 1:23 PM",
			updatedUserDisplayName: "Justin Smith",
			updatedBy: "Justin Smith",
			createType: "Uploaded by DEQ Staff",
			statusType: "Draft",
			is: {},
			sourceDescrCombined: "Site  ",
			selectable: true,
			documentPreviewMockData: {
				type: "image",
				dimensions: {
					height: Math.floor(Math.random() * 1000 + 400),
					width: Math.floor(Math.random() * 1000 + 400),
				},
			},
		},
		{
			id: "5256786078502451181",
			applicantConfidentialityRequested: false,
			createdDate: "2016-05-24T00:11:19.000Z",
			createdUserDisplayName: "Justin Smith",
			documentContentSize: 497664,
			documentCreateTypeDescription: "Uploaded by DEQ Staff",
			documentDescription: "several emails from Donna Cervelli regarding an old complaint at this site",
			documentName: "RE  Hazen.msg",
			documentNotPublishReasonTypeDescription: null,
			documentNotPublishReasonTypeId: null,
			documentPublishedStatusTypeId: null,
			documentReceivedDate: null,
			documentReceivedOrCreatedDate: "05/23/2016 5:11 PM",
			documentSecurityCategoryCode: "PUBL",
			documentSecurityTypeCode: "PUBL",
			documentSecurityTypeDescription: "Public",
			documentSecurityTypeLongDescription:
					"Public documents are available for distribution to the public and can be disclosed to anyone without violating an individual’s right to privacy or causing any potential harm. Public data is not sensitive in context or content, and does not require special protection.",
			documentStatusTypeDescription: "Final",
			documentStatusTypeId: "FINAL",
			hasPdfContent: false,
			isLinkedDocument: null,
			labelStyleId: "OK",
			linkedDocManagementId: null,
			mimeType: "application/vnd.ms-outlook",
			siteId: "3720888657366759423",
			sourceDescription: null,
			sourceNumber: null,
			sourceType: "SITE",
			sourceTypeDescription: "Site",
			sourceTypeId: "3720888657366759423",
			updatedDate: "03/26/2019 8:13 AM",
			updatedUserDisplayName: "dbDataConversion",
			updatedBy: "dbDataConversion",
			createType: "Uploaded by DEQ Staff",
			statusType: "Final",
			is: {},
			sourceDescrCombined: "Site  ",
			selectable: true,
			documentPreviewMockData: {
				type: "image",
				dimensions: {
					height: Math.floor(Math.random() * 1000 + 400),
					width: Math.floor(Math.random() * 1000 + 400),
				},
			},
		},
		{
			id: "-2255780054350458575",
			applicantConfidentialityRequested: false,
			createdDate: "2019-09-25T17:59:24.000Z",
			createdUserDisplayName: "Bill Rensmith (Windsor)",
			documentContentSize: 110101,
			documentCreateTypeDescription: "Uploaded by DEQ Staff",
			documentDescription: null,
			documentName: "DMR Docs ND0014567.pdf",
			documentNotPublishReasonTypeDescription: null,
			documentNotPublishReasonTypeId: null,
			documentPublishedStatusTypeId: null,
			documentReceivedDate: "2019-09-25T17:59:16.000Z",
			documentReceivedOrCreatedDate: "09/25/2019 10:59 AM",
			documentSecurityCategoryCode: "PUBL",
			documentSecurityTypeCode: "PUBL",
			documentSecurityTypeDescription: "Public",
			documentSecurityTypeLongDescription:
					"Public documents are available for distribution to the public and can be disclosed to anyone without violating an individual’s right to privacy or causing any potential harm. Public data is not sensitive in context or content, and does not require special protection.",
			documentStatusTypeDescription: "Draft",
			documentStatusTypeId: "DRAFT",
			hasPdfContent: false,
			isLinkedDocument: null,
			labelStyleId: "CAUTION",
			linkedDocManagementId: null,
			mimeType: "application/pdf",
			siteId: "3720888657366759423",
			sourceDescription: null,
			sourceNumber: null,
			sourceType: "SITE",
			sourceTypeDescription: "Site",
			sourceTypeId: "3720888657366759423",
			updatedDate: "09/25/2019 10:59 AM",
			updatedUserDisplayName: "Bill Rensmith (Windsor)",
			updatedBy: "Bill Rensmith (Windsor)",
			createType: "Uploaded by DEQ Staff",
			statusType: "Draft",
			is: {},
			sourceDescrCombined: "Site  ",
			selectable: true,
			documentPreviewMockData: {
				type: "image",
				dimensions: {
					height: Math.floor(Math.random() * 1000 + 400),
					width: Math.floor(Math.random() * 1000 + 400),
				},
			},
		},
		{
			id: "3418909131954414152",
			applicantConfidentialityRequested: false,
			createdDate: "2016-07-05T15:38:20.000Z",
			createdUserDisplayName: "Justin Smith",
			documentContentSize: 930816,
			documentCreateTypeDescription: "Uploaded by DEQ Staff",
			documentDescription: "copy of open burning ticket",
			documentName: "Scott Hazen_open burningticket.msg",
			documentNotPublishReasonTypeDescription: null,
			documentNotPublishReasonTypeId: null,
			documentPublishedStatusTypeId: null,
			documentReceivedDate: "2016-04-07T07:00:00.000Z",
			documentReceivedOrCreatedDate: "04/07/2016 12:00 AM",
			documentSecurityCategoryCode: "PUBL",
			documentSecurityTypeCode: "PUBL",
			documentSecurityTypeDescription: "Public",
			documentSecurityTypeLongDescription:
					"Public documents are available for distribution to the public and can be disclosed to anyone without violating an individual’s right to privacy or causing any potential harm. Public data is not sensitive in context or content, and does not require special protection.",
			documentStatusTypeDescription: "Final",
			documentStatusTypeId: "FINAL",
			hasPdfContent: false,
			isLinkedDocument: null,
			labelStyleId: "OK",
			linkedDocManagementId: null,
			mimeType: "application/vnd.ms-outlook",
			siteId: "3720888657366759423",
			sourceDescription: null,
			sourceNumber: null,
			sourceType: "SITE",
			sourceTypeDescription: "Site",
			sourceTypeId: "3720888657366759423",
			updatedDate: "03/26/2019 8:13 AM",
			updatedUserDisplayName: "dbDataConversion",
			updatedBy: "dbDataConversion",
			createType: "Uploaded by DEQ Staff",
			statusType: "Final",
			is: {},
			sourceDescrCombined: "Site  ",
			selectable: true,
			documentPreviewMockData: {
				type: "image",
				dimensions: {
					height: Math.floor(Math.random() * 1000 + 400),
					width: Math.floor(Math.random() * 1000 + 400),
				},
			},
		},
		{
			id: "422156901304755825",
			applicantConfidentialityRequested: false,
			createdDate: "2016-09-22T19:53:49.000Z",
			createdUserDisplayName: "Justin Smith",
			documentContentSize: 12505600,
			documentCreateTypeDescription: "Uploaded by DEQ Staff",
			documentDescription: "County SESC inspector inspected the property on 9_21_2016",
			documentName: "2016_9_21 13030 S Hinman Road  Eagle MI.msg",
			documentNotPublishReasonTypeDescription: null,
			documentNotPublishReasonTypeId: null,
			documentPublishedStatusTypeId: null,
			documentReceivedDate: null,
			documentReceivedOrCreatedDate: "09/22/2016 12:53 PM",
			documentSecurityCategoryCode: "PUBL",
			documentSecurityTypeCode: "PUBL",
			documentSecurityTypeDescription: "Public",
			documentSecurityTypeLongDescription:
					"Public documents are available for distribution to the public and can be disclosed to anyone without violating an individual’s right to privacy or causing any potential harm. Public data is not sensitive in context or content, and does not require special protection.",
			documentStatusTypeDescription: "Draft",
			documentStatusTypeId: "DRAFT",
			hasPdfContent: false,
			isLinkedDocument: null,
			labelStyleId: "CAUTION",
			linkedDocManagementId: null,
			mimeType: "application/vnd.ms-outlook",
			siteId: "3720888657366759423",
			sourceDescription: null,
			sourceNumber: null,
			sourceType: "SITE",
			sourceTypeDescription: "Site",
			sourceTypeId: "3720888657366759423",
			updatedDate: "03/26/2019 8:13 AM",
			updatedUserDisplayName: "dbDataConversion",
			updatedBy: "dbDataConversion",
			createType: "Uploaded by DEQ Staff",
			statusType: "Draft",
			is: {},
			sourceDescrCombined: "Site  ",
			selectable: true,
			documentPreviewMockData: {
				type: "image",
				dimensions: {
					height: Math.floor(Math.random() * 1000 + 400),
					width: Math.floor(Math.random() * 1000 + 400),
				},
			},
		},
	];
}

export default previewSheet;