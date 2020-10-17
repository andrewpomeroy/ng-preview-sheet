import angular from "angular";

import previewSheet from "./components/preview-sheet";
import PermitsService from "./services/PermitsService";

angular.module("app").component("previewSheet", previewSheet);
angular.module("app").service("PermitsService", PermitsService);
