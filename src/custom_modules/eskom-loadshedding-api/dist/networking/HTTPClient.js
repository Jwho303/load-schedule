"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var HTTPClient = /** @class */ (function () {
    function HTTPClient() {
    }
    HTTPClient.get = function (path, addTime) {
        if (addTime === void 0) { addTime = true; }
        var uri = this.BASE_URL + path;
        if (addTime) {
            uri += (path.indexOf('?') > -1 ? '&' : '?') + '_=' + new Date().getTime();
        }
        return axios_1.default.get(uri, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0',
            },
        });
    };
    HTTPClient.BASE_URL = 'https://loadshedding.eskom.co.za/LoadShedding';
    return HTTPClient;
}());
exports.default = HTTPClient;
