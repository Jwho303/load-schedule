"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MunicipalityRaw = /** @class */ (function () {
    function MunicipalityRaw(municipality) {
        this.Selected = municipality.Selected;
        this.Text = municipality.Text;
        this.Value = municipality.Value;
    }
    return MunicipalityRaw;
}());
exports.MunicipalityRaw = MunicipalityRaw;
var Municipality = /** @class */ (function () {
    function Municipality(municipality) {
        this.id = municipality.id;
        this.name = municipality.name;
    }
    Municipality.fromRaw = function (municipality) {
        return new Municipality({
            id: parseInt(municipality.Value, 10),
            name: municipality.Text,
        });
    };
    return Municipality;
}());
exports.Municipality = Municipality;
