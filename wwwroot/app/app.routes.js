"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var about_component_1 = require('./about.component');
var safety_component_1 = require('./safety/safety.component');
var form_component_1 = require('./form.component');
var results_component_1 = require('./results.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'start', component: form_component_1.FormComponent },
    { path: 'safety', component: safety_component_1.SafetyComponent },
    { path: 'results', component: results_component_1.ResultsComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
