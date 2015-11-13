"use strict";

describe("Home App Unit Tests: ", function () {
    var scope, controller;
    beforeEach(function () {
        module("yoda.config");
        module("yoda.routes");
        module("yoda.home.controllers.index");
        inject(
            ["$rootScope", "$controller", function ($rootScope, $controller) {
                scope = $rootScope.$new();
                controller = function () {
                    var data = {
                        $scope: scope
                    };
                    var ctr = "yoda.home.controllers.profile";
                    var contrll = $controller(ctr, data);
                    return contrll;
                };
            }]);
    });

    it("should pass a dummy test", function () {
        expect(controller()).toBeDefined();
    });
});
