"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchSuburbRaw = /** @class */ (function () {
    function SearchSuburbRaw(searchSuburb) {
        this.MunicipalityName = searchSuburb.MunicipalityName;
        this.ProvinceName = searchSuburb.ProvinceName;
        this.Name = searchSuburb.Name;
        this.Id = searchSuburb.Id;
        this.Total = searchSuburb.Total;
    }
    return SearchSuburbRaw;
}());
exports.SearchSuburbRaw = SearchSuburbRaw;
var SearchSuburb = /** @class */ (function () {
    function SearchSuburb(searchSuburb) {
        this.municipality = searchSuburb.municipality;
        this.province = searchSuburb.province;
        this.suburb = searchSuburb.suburb;
        this.id = searchSuburb.id;
        this.total = searchSuburb.total;
    }
    SearchSuburb.fromRaw = function (searchSuburb) {
        return new SearchSuburb({
            municipality: searchSuburb.MunicipalityName,
            province: searchSuburb.ProvinceName,
            suburb: searchSuburb.Name,
            id: searchSuburb.Id,
            total: searchSuburb.Total,
        });
    };
    return SearchSuburb;
}());
exports.SearchSuburb = SearchSuburb;
