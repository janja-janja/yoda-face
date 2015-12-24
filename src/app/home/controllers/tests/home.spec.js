"use strict";

describe("Home App Unit Tests: ", function () {
    var scope, controller;
    beforeEach(function () {
        module("yoda.config");
        module("yoda.routes");
        module("yoda.home.controllers.index");
        module("yoda.home.services.socialMedia");

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

    it("Should ensure the profiles have the correct URLs", function () {
        controller();

        var twitter = "https://twitter.com/dee_beat";
        var email = "mailto:dee.caranja@gmail.com";
        var github = "https://github.com/yoda-yoda";
        var linkedin = "https://linkedin.com/in/karanja";
        var repo = "https://github.com/yoda-yoda/yoda-face.git";

        expect(scope.twitter).toEqual(twitter);
        expect(scope.email).toEqual(email);
        expect(scope.github).toEqual(github);
        expect(scope.linkedin).toEqual(linkedin);
        expect(scope.repo).toEqual(repo);
    });
});
