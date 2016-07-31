"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var api_service_1 = require('../common/api.service');
var model_crime_1 = require('./model.crime');
var SafetyService = (function () {
    function SafetyService(_apiService) {
        this._apiService = _apiService;
        this.filter = function (crimeData) {
            return crimeData;
        };
    }
    SafetyService.prototype.getCrimeData = function () {
        var crimeRaw = this._apiService.get('crime.json');
        this.crimeData = new Array();
        for (var _i = 0, crimeRaw_1 = crimeRaw; _i < crimeRaw_1.length; _i++) {
            var item = crimeRaw_1[_i];
            var crimeDataItem = new model_crime_1.Crime();
            crimeDataItem.id = item.id;
            crimeDataItem.region = item.RegionalCouncil;
            crimeDataItem.incident = item.incidentRate;
            this.crimeData.push(crimeDataItem);
        }
        return this.filter(this.crimeData);
    };
    SafetyService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(api_service_1.ApiService)), 
        __metadata('design:paramtypes', [Object])
    ], SafetyService);
    return SafetyService;
}());
exports.SafetyService = SafetyService;
