const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ["user", "company", "admin"],
        default: "user"
      },
      phone : {
        type : String
      },
      experience :{
        type : String
      },
      skills : {
        type : [String]
      }


    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
