const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SubmitFormSchema = new Schema({
    name: String,
    email: String,
    enquiry: String,
    resourceSiteName: String,
    resourceSiteCode: String,
    county: String,
    totalNumberOfInverters: Number,
    desiredEnergizationDate: Date,
    date: {
        type: String,
        default: Date.now()
    }
});

const SubmitForm = mongoose.model('SubmitForm', SubmitFormSchema);

module.exports = SubmitForm;