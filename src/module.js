import angular from "angular";

import previewSheet from "./components/preview-sheet";
import permitSummary from "./components/permit-summary";

import PermitsService from "./services/PermitsService";

angular.module("app").component("previewSheet", previewSheet);
angular.module("app").component("permitSummary", permitSummary);

angular.module("app").service("PermitsService", PermitsService);
