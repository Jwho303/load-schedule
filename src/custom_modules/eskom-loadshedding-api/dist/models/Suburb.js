"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SuburbRaw = /** @class */ (function () {
    function SuburbRaw(suburb) {
        this.id = suburb.id;
        this.text = suburb.text;
        this.Tot = suburb.Tot;
    }
    return SuburbRaw;
}());
exports.SuburbRaw = SuburbRaw;
var Suburb = /** @class */ (function () {
    function Suburb(suburb) {
        this.id = suburb.id;
        this.name = suburb.name;
        this.total = suburb.total;
    }
    Suburb.fromRaw = function (suburb) {
        return new Suburb({
            id: parseInt(suburb.id, 10),
            name: suburb.text,
            total: suburb.Tot,
        });
    };
    return Suburb;
}());
exports.Suburb = Suburb;
