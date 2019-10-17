const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    phone: Number,
    message: {
        type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true
  },
}, 
{
    timestamps: true
})

const Lead = mongoose.model("Lead", LeadSchema);

module.exports = Lead;