import angular from "angular";

import testComponent from "./components/test-component";
import previewSheet from "./components/preview-sheet";

angular.module("app").component('testComponent', testComponent);
angular.module("app").component('previewSheet', previewSheet);
