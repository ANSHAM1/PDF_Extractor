const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    }
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

module.exports={user}
