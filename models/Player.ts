const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    birthDate: {
      type: String,
      requied: true,
      unique: false,
    },
    profilePictureName: {
      type: String,
      required: false,
    },
    actionPictureName: {
      type: String,
      required: false,
    },
    stats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stats",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

export default mongoose.models.Player || mongoose.model("Player", playerSchema);
