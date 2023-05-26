"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    birthDate: {
        type: String,
        requied: true,
        unique: false
    },
    profilePictureName: {
        type: String,
        required: false
    },
    actionPictureName: {
        type: String,
        required: false
    },
    stats: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Stats"
        },
    ]
}, {
    toJSON: {
        virtuals: true
    }
});
exports["default"] = mongoose.models.Player || mongoose.model("Player", playerSchema);
