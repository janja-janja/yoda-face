"use strict";

ddescribe("Unit Test for The Profile Service: ", function () {
    var profileService;

    beforeEach(function () {
        module("yoda.home.services.socialMedia");

        inject(["yoda.home.service.getProfile", function (_profileService_) {
            profileService = _profileService_;
        }]);
    });

    it("Should define user profiles for Denis Karanja", function () {
        var profile = profileService.profile();

        expect(profile).toBeDefined();
        expect(typeof(profile)).toBe("object");
    });

    it("Should have 4 profiles defined", function () {
        var profile = profileService.profile();

        expect(profile.length).toBe(4);
    });

    it("Should link the profiles to the correct URLs", function () {
        var twitter = "https://twitter.com/dee_beat";
        var email = "mailto:dee.caranja@gmail.com";
        var github = "https://github.com/yoda-yoda";
        var repo = "https://github.com/yoda-yoda/yoda-face.git";

        var profile = profileService.profile();

        expect(profile[0]).toEqual(twitter);
        expect(profile[1]).toEqual(email);
        expect(profile[2]).toEqual(github);
        expect(profile[3]).toEqual(repo);
    });
});
