"use strict";

angular

.module("yoda.config", ["ui.router"])

.config(["$urlRouterProvider", function ($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
}]);
