"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
function scheduleParser(scheduleText) {
    // Prep lines
    var scheduleLines = scheduleText
        .split(/\r?\n/)
        .map(function (line) { return line.trim(); })
        .filter(function (line) { return !!line; });
    // Split into days/times
    var scheduleDays = [];
    var day = '';
    var times = [];
    for (var _i = 0, scheduleLines_1 = scheduleLines; _i < scheduleLines_1.length; _i++) {
        var line = scheduleLines_1[_i];
        if (line.indexOf(' - ') === -1) {
            if (day) {
                scheduleDays.push({
                    day: day,
                    times: times,
                });
            }
            day = line.split(', ')[1];
            times = [];
        }
        else {
            times.push(line.split(' - '));
        }
    }
    // Parse days/times
    var wasDec = false;
    var year = new Date().getFullYear();
    scheduleDays = scheduleDays.map(function (scheduleDay) {
        if (scheduleDay.day.indexOf('Dec') > -1) {
            wasDec = true;
        }
        if (wasDec && scheduleDay.day.indexOf('Jan') > -1) {
            year += 1;
        }
        var daySplit = scheduleDay.day.split(' ');
        var dayNum = daySplit[0];
        var monthNum = moment_1.default()
            .month(daySplit[1])
            .format('M');
        var day = moment_1.default(year + "-" + monthNum + "-" + dayNum, 'YYYY-MM-DD').toDate();
        var times = scheduleDay.times.map(function (timeArr) {
            var startTime = timeArr[0];
            var endTime = timeArr[1];
            var overMidnight = false;
            if (parseInt(startTime.split(':')[0], 10) > parseInt(endTime.split(':')[0], 10)) {
                overMidnight = true;
            }
            return [
                moment_1.default(year + "-" + monthNum + "-" + dayNum + " " + startTime, 'YYYY-MM-DD HH:mm:ss').toDate(),
                moment_1.default(year + "-" + monthNum + "-" + (overMidnight ? parseInt(dayNum, 10) + 1 : dayNum) + " " + endTime, 'YYYY-MM-DD HH:mm:ss').toDate(),
            ];
        });
        return {
            day: day,
            times: times,
        };
    });
    var schedule = [];
    for (var _a = 0, scheduleDays_1 = scheduleDays; _a < scheduleDays_1.length; _a++) {
        var scheduleDay = scheduleDays_1[_a];
        schedule.push({
            day: scheduleDay.day,
            times: scheduleDay.times.map(function (times) { return ({
                startTime: times[0],
                endTime: times[1],
            }); }),
        });
    }
    return {
        schedule: schedule,
    };
}
exports.scheduleParser = scheduleParser;
