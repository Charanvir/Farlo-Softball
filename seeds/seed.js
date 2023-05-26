"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var dbConnect_1 = require("../libs/dbConnect");
var Player_1 = require("../models/Player");
var Stats_1 = require("../models/Stats");
// Player data
var playerData = [
    {
        firstName: "Charanvir",
        lastName: "Singh",
        birthDate: "04-01-1997",
        profilePictureName: "charanvirProfile",
        actionPictureName: "charanvirAction",
        stats: []
    },
    {
        firstName: "Jaskaran",
        lastName: "Deol",
        birthDate: "11-22-1997",
        profilePictureName: "jaskaranProfile",
        actionPictureName: "jaskaranAction",
        stats: []
    },
    {
        firstName: "Prabh",
        lastName: "Shah",
        birthDate: "N/A",
        profilePictureName: "prabhProfile",
        actionPictureName: "prabhAction",
        stats: []
    },
    {
        firstName: "Randeep",
        lastName: "Singh",
        birthDate: "07-18-1996",
        profilePictureName: "randeepProfile",
        actionPictureName: "randeepAction",
        stats: []
    },
    {
        firstName: "Wajih",
        lastName: "Anwar",
        birthDate: "11-12-1995",
        profilePictureName: "wajihProfile",
        actionPictureName: "charanvirAction",
        stats: []
    },
    {
        firstName: "Lucky",
        lastName: "Gill",
        birthDate: "09-28-1997",
        profilePictureName: "luckyProfile",
        actionPictureName: "charanvirAction",
        stats: []
    },
    {
        firstName: "Richard",
        lastName: "James",
        birthDate: "N/A",
        profilePictureName: "rickyProfile",
        actionPictureName: "rickyAction",
        stats: []
    },
    {
        firstName: "Keith",
        lastName: "P",
        birthDate: "N/A",
        profilePictureName: "keithProfile",
        actionPictureName: "keithAction",
        stats: []
    },
    {
        firstName: "Manjinder",
        lastName: "Varya",
        birthDate: "11-09-1997",
        profilePictureName: "manjiProfile",
        actionPictureName: "manjiAction",
        stats: []
    },
    {
        firstName: "Harissan",
        lastName: "Balakrishnan",
        birthDate: "N/A",
        profilePictureName: "harryProfile",
        actionPictureName: "harryAction",
        stats: []
    },
    {
        firstName: "Aidan",
        lastName: "Cooper",
        birthDate: "N/A",
        profilePictureName: "coopyProfile",
        actionPictureName: "coopyAction",
        stats: []
    },
    {
        firstName: "Sunny",
        lastName: "Benipal",
        birthDate: "N/A",
        profilePictureName: "sunnyProfile",
        actionPictureName: "sunnyAction",
        stats: []
    },
    {
        firstName: "Kam",
        lastName: "N/A",
        birthDate: "N/A",
        profilePictureName: "kamProfile",
        actionPictureName: "kamAction",
        stats: []
    },
    {
        firstName: "Ash",
        lastName: "Kaura",
        birthDate: "N/A",
        profilePictureName: "ashProfile",
        actionPictureName: "ashAction",
        stats: []
    },
    {
        firstName: "Navnoor",
        lastName: "Mann",
        birthDate: "N/A",
        profilePictureName: "navProfile",
        actionPictureName: "navAction",
        stats: []
    },
    {
        firstName: "John",
        lastName: "N/A",
        birthDate: "N/A",
        profilePictureName: "johnProfile",
        actionPictureName: "johnAction",
        stats: []
    },
    {
        firstName: "Monil",
        lastName: "Patel",
        birthDate: "N/A",
        profilePictureName: "monilProfile",
        actionPictureName: "monilAction",
        stats: []
    },
    {
        firstName: "Matthew",
        lastName: "Deen",
        birthDate: "",
        profilePictureName: "mattProfile",
        actionPictureName: "mattAction",
        stats: []
    },
    {
        firstName: "Will",
        lastName: "N/A",
        birthDate: "N/A",
        profilePictureName: "willProfile",
        actionPictureName: "willAction",
        stats: []
    },
    {
        firstName: "Hamza",
        lastName: "Waheed",
        birthDate: "N/A",
        profilePictureName: "hamzaProfile",
        actionPictureName: "hamzaAction",
        stats: []
    },
    {
        firstName: "Sukhman",
        lastName: "Sangha",
        birthDate: "N/A",
        profilePictureName: "sukhmanProfile",
        actionPictureName: "sukhmanAction",
        stats: []
    },
    {
        firstName: "Gurvir",
        lastName: "Sohal",
        birthDate: "03-27-2000",
        profilePictureName: "gurvirProfile",
        actionPictureName: "gurvirAction",
        stats: []
    },
    {
        firstName: "Chris",
        lastName: "N/A",
        birthDate: "N/A",
        profilePictureName: "default",
        actionPictureName: "default",
        stats: []
    },
    {
        firstName: "Randy",
        lastName: "N/A",
        birthDate: "N/A",
        profilePictureName: "default",
        actionPictureName: "default",
        stats: []
    },
    {
        firstName: "Test",
        lastName: "Test",
        birthDate: "Test",
        profilePictureName: "Test",
        actionPictureName: "Test",
        stats: []
    },
];
var statData2020 = [
    {
        year: 2020,
        type: "team",
        plateAppearance: 777,
        atBats: 665,
        hits: 351,
        singles: 240,
        doubles: 67,
        triples: 32,
        homeRuns: 12,
        walks: 100,
        strikeouts: 44,
        battingAverage: 0.528,
        onBasePercentage: 0.58,
        sluggingPercentage: 0.779,
        ops: 1.359
    },
    {
        year: 2020,
        type: "Jaskaran",
        plateAppearance: 74,
        atBats: 51,
        hits: 19,
        singles: 17,
        doubles: 2,
        triples: 0,
        homeRuns: 0,
        walks: 23,
        strikeouts: 8,
        battingAverage: 0.373,
        onBasePercentage: 0.568,
        sluggingPercentage: 0.412,
        ops: 0.979
    },
    {
        year: 2020,
        type: "Prabh",
        plateAppearance: 66,
        atBats: 56,
        hits: 26,
        singles: 23,
        doubles: 3,
        triples: 0,
        homeRuns: 0,
        walks: 12,
        strikeouts: 3,
        battingAverage: 0.464,
        onBasePercentage: 0.576,
        sluggingPercentage: 0.518,
        ops: 1.094
    },
    {
        year: 2020,
        type: "Randeep",
        plateAppearance: 73,
        atBats: 69,
        hits: 45,
        singles: 25,
        doubles: 8,
        triples: 8,
        homeRuns: 4,
        walks: 1,
        strikeouts: 2,
        battingAverage: 0.652,
        onBasePercentage: 0.63,
        sluggingPercentage: 1.174,
        ops: 1.804,
        sacFly: 3
    },
    {
        year: 2020,
        type: "Wajih",
        plateAppearance: 73,
        atBats: 67,
        hits: 46,
        singles: 20,
        doubles: 11,
        triples: 10,
        homeRuns: 5,
        walks: 1,
        strikeouts: 0,
        battingAverage: 0.687,
        onBasePercentage: 0.644,
        sluggingPercentage: 1.373,
        ops: 2.017,
        sacFly: 5
    },
    {
        year: 2020,
        type: "Lucky",
        plateAppearance: 66,
        atBats: 56,
        hits: 24,
        singles: 15,
        doubles: 7,
        triples: 1,
        homeRuns: 1,
        walks: 10,
        strikeouts: 2,
        battingAverage: 0.429,
        onBasePercentage: 0.515,
        sluggingPercentage: 0.643,
        ops: 1.158
    },
    {
        year: 2020,
        type: "Richard",
        plateAppearance: 64,
        atBats: 55,
        hits: 29,
        singles: 23,
        doubles: 1,
        triples: 4,
        homeRuns: 1,
        walks: 8,
        strikeouts: 6,
        battingAverage: 0.527,
        onBasePercentage: 0.578,
        sluggingPercentage: 0.745,
        ops: 1.324,
        sacFly: 1
    },
    {
        year: 2020,
        type: "Keith",
        plateAppearance: 63,
        atBats: 56,
        hits: 24,
        singles: 13,
        doubles: 9,
        triples: 2,
        homeRuns: 0,
        walks: 5,
        strikeouts: 0,
        battingAverage: 0.429,
        onBasePercentage: 0.46,
        sluggingPercentage: 0.661,
        ops: 1.121,
        sacFly: 2
    },
    {
        year: 2020,
        type: "Manjinder",
        plateAppearance: 69,
        atBats: 49,
        hits: 31,
        singles: 26,
        doubles: 3,
        triples: 2,
        homeRuns: 0,
        walks: 18,
        strikeouts: 3,
        battingAverage: 0.633,
        onBasePercentage: 0.71,
        sluggingPercentage: 0.776,
        ops: 1.486,
        sacFly: 2
    },
    {
        year: 2020,
        type: "Harissan",
        plateAppearance: 48,
        atBats: 45,
        hits: 28,
        singles: 19,
        doubles: 7,
        triples: 2,
        homeRuns: 0,
        walks: 3,
        strikeouts: 2,
        battingAverage: 0.622,
        onBasePercentage: 0.646,
        sluggingPercentage: 0.867,
        ops: 1.513
    },
    {
        year: 2020,
        type: "Aidan",
        plateAppearance: 64,
        atBats: 56,
        hits: 26,
        singles: 18,
        doubles: 7,
        triples: 1,
        homeRuns: 0,
        walks: 8,
        strikeouts: 3,
        battingAverage: 0.464,
        onBasePercentage: 0.531,
        sluggingPercentage: 0.625,
        ops: 1.156
    },
    {
        year: 2020,
        type: "Sunny",
        plateAppearance: 32,
        atBats: 24,
        hits: 13,
        singles: 9,
        doubles: 4,
        triples: 0,
        homeRuns: 0,
        walks: 8,
        strikeouts: 5,
        battingAverage: 0.542,
        onBasePercentage: 0.656,
        sluggingPercentage: 0.708,
        ops: 1.365
    },
    {
        year: 2020,
        type: "Kam",
        plateAppearance: 21,
        atBats: 21,
        hits: 13,
        singles: 7,
        doubles: 3,
        triples: 2,
        homeRuns: 1,
        walks: 0,
        strikeouts: 2,
        battingAverage: 0.619,
        onBasePercentage: 0.619,
        sluggingPercentage: 1.095,
        ops: 1.714
    },
    {
        year: 2020,
        type: "Ash",
        plateAppearance: 29,
        atBats: 26,
        hits: 13,
        singles: 13,
        doubles: 0,
        triples: 0,
        homeRuns: 0,
        walks: 2,
        strikeouts: 1,
        battingAverage: 0.5,
        onBasePercentage: 0.517,
        sluggingPercentage: 0.5,
        ops: 1.017,
        sacFly: 1
    },
    {
        year: 2020,
        type: "Charanvir",
        plateAppearance: 35,
        atBats: 34,
        hits: 14,
        singles: 12,
        doubles: 2,
        triples: 0,
        homeRuns: 0,
        walks: 1,
        strikeouts: 7,
        battingAverage: 0.412,
        onBasePercentage: 0.429,
        sluggingPercentage: 0.471,
        ops: 0.899
    },
];
var statData2021 = [
    {
        year: 2021,
        type: "Prabh",
        plateAppearance: 68,
        atBats: 60,
        hits: 30,
        singles: 25,
        doubles: 3,
        triples: 0,
        homeRuns: 2,
        walks: 8,
        strikeouts: 4,
        battingAverage: 0.5,
        onBasePercentage: 0.559,
        sluggingPercentage: 0.65,
        ops: 1.209
    },
    {
        year: 2021,
        type: "Randeep",
        plateAppearance: 80,
        atBats: 74,
        hits: 47,
        singles: 24,
        doubles: 10,
        triples: 8,
        homeRuns: 5,
        walks: 5,
        strikeouts: 0,
        battingAverage: 0.635,
        onBasePercentage: 0.65,
        sluggingPercentage: 1.189,
        ops: 1.839,
        sacFly: 1
    },
    {
        year: 2021,
        type: "Wajih",
        plateAppearance: 90,
        atBats: 89,
        hits: 67,
        singles: 27,
        doubles: 13,
        triples: 11,
        homeRuns: 16,
        walks: 1,
        strikeouts: 2,
        battingAverage: 0.753,
        onBasePercentage: 0.756,
        sluggingPercentage: 1.685,
        ops: 2.441
    },
    {
        year: 2021,
        type: "Harissan",
        plateAppearance: 58,
        atBats: 51,
        hits: 30,
        singles: 18,
        doubles: 8,
        triples: 3,
        homeRuns: 1,
        walks: 7,
        strikeouts: 1,
        battingAverage: 0.588,
        onBasePercentage: 0.638,
        sluggingPercentage: 0.922,
        ops: 1.559
    },
    {
        year: 2021,
        type: "Manjinder",
        plateAppearance: 85,
        atBats: 75,
        hits: 41,
        singles: 29,
        doubles: 7,
        triples: 4,
        homeRuns: 1,
        walks: 9,
        strikeouts: 4,
        battingAverage: 0.547,
        onBasePercentage: 0.588,
        sluggingPercentage: 0.787,
        ops: 1.375,
        sacFly: 1
    },
    {
        year: 2021,
        type: "Aidan",
        plateAppearance: 81,
        atBats: 77,
        hits: 41,
        singles: 33,
        doubles: 6,
        triples: 1,
        homeRuns: 1,
        walks: 4,
        strikeouts: 8,
        battingAverage: 0.532,
        onBasePercentage: 0.556,
        sluggingPercentage: 0.675,
        ops: 1.231
    },
    {
        year: 2021,
        type: "Lucky",
        plateAppearance: 80,
        atBats: 67,
        hits: 34,
        singles: 22,
        doubles: 7,
        triples: 3,
        homeRuns: 2,
        walks: 11,
        strikeouts: 4,
        battingAverage: 0.507,
        onBasePercentage: 0.563,
        sluggingPercentage: 0.791,
        ops: 1.354,
        sacFly: 2
    },
    {
        year: 2021,
        type: "Keith",
        plateAppearance: 79,
        atBats: 72,
        hits: 41,
        singles: 26,
        doubles: 14,
        triples: 0,
        homeRuns: 1,
        walks: 6,
        strikeouts: 0,
        battingAverage: 0.569,
        onBasePercentage: 0.595,
        sluggingPercentage: 0.806,
        ops: 1.4,
        sacFly: 1
    },
    {
        year: 2021,
        type: "Richard",
        plateAppearance: 71,
        atBats: 63,
        hits: 39,
        singles: 33,
        doubles: 4,
        triples: 1,
        homeRuns: 1,
        walks: 6,
        strikeouts: 2,
        battingAverage: 0.619,
        onBasePercentage: 0.634,
        sluggingPercentage: 0.762,
        ops: 1.396,
        sacFly: 2
    },
    {
        year: 2021,
        type: "Ash",
        plateAppearance: 51,
        atBats: 46,
        hits: 26,
        singles: 18,
        doubles: 6,
        triples: 2,
        homeRuns: 0,
        walks: 5,
        strikeouts: 5,
        battingAverage: 0.565,
        onBasePercentage: 0.608,
        sluggingPercentage: 0.783,
        ops: 1.39
    },
    {
        year: 2021,
        type: "Navnoor",
        plateAppearance: 45,
        atBats: 41,
        hits: 23,
        singles: 16,
        doubles: 7,
        triples: 1,
        homeRuns: 0,
        walks: 4,
        strikeouts: 8,
        battingAverage: 0.561,
        onBasePercentage: 0.6,
        sluggingPercentage: 0.805,
        ops: 1.405
    },
    {
        year: 2021,
        type: "John",
        plateAppearance: 67,
        atBats: 63,
        hits: 32,
        singles: 19,
        doubles: 9,
        triples: 1,
        homeRuns: 3,
        walks: 4,
        strikeouts: 3,
        battingAverage: 0.508,
        onBasePercentage: 0.537,
        sluggingPercentage: 0.825,
        ops: 1.363
    },
    {
        year: 2021,
        type: "Sunny",
        plateAppearance: 40,
        atBats: 37,
        hits: 20,
        singles: 9,
        doubles: 7,
        triples: 1,
        homeRuns: 3,
        walks: 3,
        strikeouts: 4,
        battingAverage: 0.541,
        onBasePercentage: 0.575,
        sluggingPercentage: 1.027,
        ops: 1.602,
        sacFly: 1
    },
    {
        year: 2021,
        type: "Randy",
        plateAppearance: 13,
        atBats: 12,
        hits: 5,
        singles: 4,
        doubles: 3,
        triples: 0,
        homeRuns: 0,
        walks: 0,
        strikeouts: 2,
        battingAverage: 0.417,
        onBasePercentage: 0.385,
        sluggingPercentage: 0.833,
        ops: 1.218,
        sacFly: 1
    },
    {
        year: 2021,
        type: "team",
        plateAppearance: 908,
        atBats: 827,
        hits: 476,
        singles: 303,
        doubles: 104,
        triples: 36,
        homeRuns: 36,
        walks: 73,
        strikeouts: 47,
        battingAverage: 0.576,
        onBasePercentage: 0.605,
        sluggingPercentage: 0.923,
        ops: 1.527
    },
];
var statData2022 = [
    {
        year: 2022,
        type: "Randeep",
        plateAppearance: 65,
        atBats: 63,
        hits: 38,
        singles: 24,
        doubles: 6,
        triples: 6,
        homeRuns: 2,
        walks: 2,
        strikeouts: 1,
        battingAverage: 0.603,
        onBasePercentage: 0.615,
        sluggingPercentage: 0.984,
        ops: 1.6
    },
    {
        year: 2022,
        type: "Harissan",
        plateAppearance: 75,
        atBats: 73,
        hits: 54,
        singles: 37,
        doubles: 12,
        triples: 4,
        homeRuns: 1,
        walks: 2,
        strikeouts: 1,
        battingAverage: 0.74,
        onBasePercentage: 0.747,
        sluggingPercentage: 1.055,
        ops: 1.801
    },
    {
        year: 2022,
        type: "Wajih",
        plateAppearance: 92,
        atBats: 85,
        hits: 58,
        singles: 29,
        doubles: 15,
        triples: 10,
        homeRuns: 4,
        walks: 4,
        strikeouts: 0,
        battingAverage: 0.682,
        onBasePercentage: 0.674,
        sluggingPercentage: 1.235,
        ops: 1.909,
        sacFly: 3
    },
    {
        year: 2022,
        type: "Matt",
        plateAppearance: 41,
        atBats: 41,
        hits: 36,
        singles: 9,
        doubles: 14,
        triples: 4,
        homeRuns: 9,
        walks: 0,
        strikeouts: 0,
        battingAverage: 0.878,
        onBasePercentage: 0.878,
        sluggingPercentage: 2.073,
        ops: 2.951
    },
    {
        year: 2022,
        type: "Keith",
        plateAppearance: 73,
        atBats: 63,
        hits: 35,
        singles: 30,
        doubles: 3,
        triples: 1,
        homeRuns: 1,
        walks: 9,
        strikeouts: 4,
        battingAverage: 0.556,
        onBasePercentage: 0.603,
        sluggingPercentage: 0.683,
        ops: 1.285,
        sacFly: 1
    },
    {
        year: 2022,
        type: "John",
        plateAppearance: 34,
        atBats: 33,
        hits: 26,
        singles: 16,
        doubles: 6,
        triples: 3,
        homeRuns: 1,
        walks: 1,
        strikeouts: 0,
        battingAverage: 0.788,
        onBasePercentage: 0.794,
        sluggingPercentage: 1.242,
        ops: 2.037
    },
    {
        year: 2022,
        type: "Aidan",
        plateAppearance: 75,
        atBats: 67,
        hits: 40,
        singles: 28,
        doubles: 8,
        triples: 3,
        homeRuns: 1,
        walks: 8,
        strikeouts: 5,
        battingAverage: 0.597,
        onBasePercentage: 0.64,
        sluggingPercentage: 0.851,
        ops: 1.491
    },
    {
        year: 2022,
        type: "Ricky",
        plateAppearance: 65,
        atBats: 57,
        hits: 40,
        singles: 23,
        doubles: 9,
        triples: 4,
        homeRuns: 4,
        walks: 7,
        strikeouts: 4,
        battingAverage: 0.702,
        onBasePercentage: 0.723,
        sluggingPercentage: 1.211,
        ops: 1.934,
        sacFly: 1
    },
    {
        year: 2022,
        type: "Navnoor",
        plateAppearance: 55,
        atBats: 50,
        hits: 21,
        singles: 19,
        doubles: 1,
        triples: 0,
        homeRuns: 1,
        walks: 4,
        strikeouts: 3,
        battingAverage: 0.42,
        onBasePercentage: 0.455,
        sluggingPercentage: 0.5,
        ops: 0.955,
        sacFly: 1
    },
    {
        year: 2022,
        type: "Will",
        plateAppearance: 69,
        atBats: 62,
        hits: 35,
        singles: 28,
        doubles: 6,
        triples: 1,
        homeRuns: 0,
        walks: 7,
        strikeouts: 1,
        battingAverage: 0.565,
        onBasePercentage: 0.609,
        sluggingPercentage: 0.694,
        ops: 1.302
    },
    {
        year: 2022,
        type: "Gurvir",
        plateAppearance: 62,
        atBats: 58,
        hits: 22,
        singles: 22,
        doubles: 0,
        triples: 0,
        homeRuns: 0,
        walks: 4,
        strikeouts: 6,
        battingAverage: 0.379,
        onBasePercentage: 0.419,
        sluggingPercentage: 0.379,
        ops: 0.799
    },
    {
        year: 2022,
        type: "Prabh",
        plateAppearance: 42,
        atBats: 42,
        hits: 24,
        singles: 20,
        doubles: 3,
        triples: 0,
        homeRuns: 1,
        walks: 0,
        strikeouts: 3,
        battingAverage: 0.571,
        onBasePercentage: 0.571,
        sluggingPercentage: 0.714,
        ops: 1.286
    },
    {
        year: 2022,
        type: "Chris",
        plateAppearance: 6,
        atBats: 6,
        hits: 4,
        singles: 4,
        doubles: 0,
        triples: 0,
        homeRuns: 0,
        walks: 0,
        strikeouts: 1,
        battingAverage: 0.667,
        onBasePercentage: 0.667,
        sluggingPercentage: 0.667,
        ops: 1.333
    },
    {
        year: 2022,
        type: "Lucky",
        plateAppearance: 30,
        atBats: 25,
        hits: 13,
        singles: 9,
        doubles: 4,
        triples: 0,
        homeRuns: 0,
        walks: 5,
        strikeouts: 1,
        battingAverage: 0.52,
        onBasePercentage: 0.6,
        sluggingPercentage: 0.68,
        ops: 1.28
    },
    {
        year: 2022,
        type: "Manjinder",
        plateAppearance: 9,
        atBats: 8,
        hits: 5,
        singles: 4,
        doubles: 1,
        triples: 0,
        homeRuns: 0,
        walks: 1,
        strikeouts: 0,
        battingAverage: 0.625,
        onBasePercentage: 0.667,
        sluggingPercentage: 0.75,
        ops: 1.417
    },
    {
        year: 2022,
        type: "Monil",
        plateAppearance: 56,
        atBats: 51,
        hits: 28,
        singles: 21,
        doubles: 5,
        triples: 1,
        homeRuns: 1,
        walks: 4,
        strikeouts: 5,
        battingAverage: 0.549,
        onBasePercentage: 0.571,
        sluggingPercentage: 0.745,
        ops: 1.317,
        sacFly: 1
    },
    {
        year: 2022,
        type: "team",
        plateAppearance: 849,
        atBats: 784,
        hits: 479,
        singles: 323,
        doubles: 93,
        triples: 37,
        homeRuns: 26,
        walks: 58,
        strikeouts: 35,
        battingAverage: 0.615,
        onBasePercentage: 0.64,
        sluggingPercentage: 0.904,
        ops: 1.543
    },
];
var seedData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var i, playerName, statsArray, j, playerToUpdate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, dbConnect_1["default"])()];
            case 1:
                _a.sent();
                return [4 /*yield*/, Player_1["default"].deleteMany()];
            case 2:
                _a.sent();
                return [4 /*yield*/, Stats_1["default"].deleteMany()];
            case 3:
                _a.sent();
                return [4 /*yield*/, Player_1["default"].insertMany(playerData)];
            case 4:
                _a.sent();
                console.log("Player Data Added");
                return [4 /*yield*/, Stats_1["default"].insertMany(statData2020)];
            case 5:
                _a.sent();
                console.log("2020 Stats Data Added");
                return [4 /*yield*/, Stats_1["default"].insertMany(statData2021)];
            case 6:
                _a.sent();
                console.log("2021 Stats Data Added");
                return [4 /*yield*/, Stats_1["default"].insertMany(statData2022)];
            case 7:
                _a.sent();
                console.log("2022 Stats Data Added");
                i = 0;
                _a.label = 8;
            case 8:
                if (!(i < playerData.length)) return [3 /*break*/, 14];
                playerName = playerData[i].firstName;
                return [4 /*yield*/, Stats_1["default"].find({
                        type: "".concat(playerData[i].firstName)
                    }).select("_id")];
            case 9:
                statsArray = _a.sent();
                j = 0;
                _a.label = 10;
            case 10:
                if (!(j < statsArray.length)) return [3 /*break*/, 13];
                return [4 /*yield*/, Player_1["default"].findOneAndUpdate({ firstName: playerName }, { $push: { stats: statsArray[j]._id } }, { "new": true })];
            case 11:
                playerToUpdate = _a.sent();
                console.log(playerToUpdate.firstName);
                _a.label = 12;
            case 12:
                j++;
                return [3 /*break*/, 10];
            case 13:
                i++;
                return [3 /*break*/, 8];
            case 14:
                process.exit(0);
                return [2 /*return*/];
        }
    });
}); };
seedData();
