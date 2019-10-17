const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
    name: {
      type: String,
      required: true
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