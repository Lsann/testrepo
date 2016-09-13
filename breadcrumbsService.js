(function() {
    'use strict';
    angular.module("services").service("breadcrumbsService", BreadcrumbsService);

    BreadcrumbsService.$inject = ["$window"];

    function BreadcrumbsService($window) {
        var me = thisxx;
        me.breadcrumbsToAdd = [];
        me.breadcrumbsToAdd.push({
            left: {
                icon: "crosshairs",
                description: "Start",
            },
            right: {
                icon: "briefcase",
                description: "Accounts",
            },
            actionOnClick: log
        }, {
            left: {
                icon: "filter"
            },
            operator: "AND",
            right: {
                title: "Set: Accounts",
                descriptions: {
                    first: "Type: Business",
                    second: "Age: from 37 years to 57 years"
                }
            },
            actionOnClick: popup
        }, {
            left: {
                icon: "expand",
            },
            right: {
                title: "Connection: Accounts - Transactions",
                descriptions: {
                    first: "Type: Remitter, Beneficiary, Owners, ...",
                    second: "Value: >=2"
                }
            },
            actionOnClick: redirect
        });


        function getBreadcrumb() {
            if (me.breadcrumbsToAdd.length) {
                return me.breadcrumbsToAdd.shift();
            }
        }

        function log() {
            console.log("breadcrumb was clicked!");
        }

        function popup() {
            alert("breadcrumb was clicked!");
        }

        function redirect() {
            $window.location.href = 'http://www.google.com';
        }

        return {
            getBreadcrumb: getBreadcrumb
        }


    }
})();
