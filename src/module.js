import angular from "angular";

import previewListContext from "./context/preview-list-context";

import previewSheet from "./components/preview-sheet";
import permitsPreviewList from "./components/permits-preview-list";
import permitSummary from "./components/permit-summary";
import summaryDocumentsList from "./components/summary-documents-list";

import PermitsService from "./services/PermitsService";


angular.module("app").component("previewListContext", previewListContext);

angular.module("app").component("previewSheet", previewSheet);
angular.module("app").component("permitsPreviewList", permitsPreviewList);
angular.module("app").component("permitSummary", permitSummary);
angular.module("app").component("summaryDocumentsList", summaryDocumentsList);

angular.module("app").service("PermitsService", PermitsService);
