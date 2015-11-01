"use strict";

angular

.module("yoda.config", ["ui.router"])

.config(["$urlRouterProvider", "$locationProvider", function (yodaRouter, loc) {
    yodaRouter.otherwise("/");
    loc.html5Mode(true);
}]);
