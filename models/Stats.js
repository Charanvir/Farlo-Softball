"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var statsSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    plateAppearance: {
        type: Number,
        required: true
    },
    atBats: {
        type: Number,
        required: true
    },
    hits: {
        type: Number,
        required: true
    },
    singles: {
        type: Number,
        required: true
    },
    doubles: {
        type: Number,
        required: true
    },
    triples: {
        type: Number,
        required: true
    },
    homeRuns: {
        type: Number,
        required: true
    },
    walks: {
        type: Number,
        required: true
    },
    strikeouts: {
        type: Number,
        required: true
    },
    battingAverage: {
        type: Number,
        required: true
    },
    onBasePercentage: {
        type: Number,
        required: true
    },
    sluggingPercentage: {
        type: Number,
        required: true
    },
    ops: {
        type: Number,
        required: true
    },
    sacFly: {
        type: Number,
        required: false
    }
}, {
    toJSON: {
        virtuals: true
    }
});
exports["default"] = mongoose.models.Stats || mongoose.model("Stats", statsSchema);
