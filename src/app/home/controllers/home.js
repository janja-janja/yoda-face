"use strict";

angular

.module("yoda.home.controllers.index", [])

.controller("yoda.home.controllers.profile", [
    "$scope", "yoda.home.service.getProfile", function ($scope, profile) {
        $scope.twitter = profile.profile()[0];
        $scope.email = profile.profile()[1];
        $scope.github = profile.profile()[2];
        $scope.linkedin = profile.profile()[3];
        $scope.repo = profile.profile()[4];
    }
]);
