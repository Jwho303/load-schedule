"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoadsheddingStageRaw;
(function (LoadsheddingStageRaw) {
    LoadsheddingStageRaw[LoadsheddingStageRaw["UNKNOWN"] = -1] = "UNKNOWN";
    LoadsheddingStageRaw[LoadsheddingStageRaw["NOT_LOADSHEDDING"] = 1] = "NOT_LOADSHEDDING";
    LoadsheddingStageRaw[LoadsheddingStageRaw["STAGE_1"] = 2] = "STAGE_1";
    LoadsheddingStageRaw[LoadsheddingStageRaw["STAGE_2"] = 3] = "STAGE_2";
    LoadsheddingStageRaw[LoadsheddingStageRaw["STAGE_3"] = 4] = "STAGE_3";
    LoadsheddingStageRaw[LoadsheddingStageRaw["STAGE_4"] = 5] = "STAGE_4";
    LoadsheddingStageRaw[LoadsheddingStageRaw["STAGE_5"] = 6] = "STAGE_5";
    LoadsheddingStageRaw[LoadsheddingStageRaw["STAGE_6"] = 7] = "STAGE_6";
    LoadsheddingStageRaw[LoadsheddingStageRaw["STAGE_7"] = 8] = "STAGE_7";
    LoadsheddingStageRaw[LoadsheddingStageRaw["STAGE_8"] = 9] = "STAGE_8";
})(LoadsheddingStageRaw = exports.LoadsheddingStageRaw || (exports.LoadsheddingStageRaw = {}));
var LoadsheddingStage;
(function (LoadsheddingStage) {
    LoadsheddingStage[LoadsheddingStage["UNKNOWN"] = -1] = "UNKNOWN";
    LoadsheddingStage[LoadsheddingStage["NOT_LOADSHEDDING"] = 0] = "NOT_LOADSHEDDING";
    LoadsheddingStage[LoadsheddingStage["STAGE_1"] = 1] = "STAGE_1";
    LoadsheddingStage[LoadsheddingStage["STAGE_2"] = 2] = "STAGE_2";
    LoadsheddingStage[LoadsheddingStage["STAGE_3"] = 3] = "STAGE_3";
    LoadsheddingStage[LoadsheddingStage["STAGE_4"] = 4] = "STAGE_4";
    LoadsheddingStage[LoadsheddingStage["STAGE_5"] = 5] = "STAGE_5";
    LoadsheddingStage[LoadsheddingStage["STAGE_6"] = 6] = "STAGE_6";
    LoadsheddingStage[LoadsheddingStage["STAGE_7"] = 7] = "STAGE_7";
    LoadsheddingStage[LoadsheddingStage["STAGE_8"] = 8] = "STAGE_8";
})(LoadsheddingStage = exports.LoadsheddingStage || (exports.LoadsheddingStage = {}));
function unmapRaw(status) {
    switch (status) {
        case LoadsheddingStageRaw.NOT_LOADSHEDDING:
            return LoadsheddingStage.NOT_LOADSHEDDING;
        case LoadsheddingStageRaw.STAGE_1:
            return LoadsheddingStage.STAGE_1;
        case LoadsheddingStageRaw.STAGE_2:
            return LoadsheddingStage.STAGE_2;
        case LoadsheddingStageRaw.STAGE_3:
            return LoadsheddingStage.STAGE_3;
        case LoadsheddingStageRaw.STAGE_4:
            return LoadsheddingStage.STAGE_4;
        case LoadsheddingStageRaw.STAGE_5:
            return LoadsheddingStage.STAGE_5;
        case LoadsheddingStageRaw.STAGE_6:
            return LoadsheddingStage.STAGE_6;
        case LoadsheddingStageRaw.STAGE_7:
            return LoadsheddingStage.STAGE_7;
        case LoadsheddingStageRaw.STAGE_8:
            return LoadsheddingStage.STAGE_8;
        default:
            return LoadsheddingStage.UNKNOWN;
    }
}
exports.unmapRaw = unmapRaw;
