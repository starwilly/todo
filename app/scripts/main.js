/*global require*/
'use strict';

require.config({
    baseUrl: 'scripts',
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'backbone',
    'app'
], function (Backbone, App) {
    Backbone.history.start();
    window.bTask = new App();
    $('.hero-unit').css('background-color', 'red');
});