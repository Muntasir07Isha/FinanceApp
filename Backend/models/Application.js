import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    income: { type: Number, required: true },
    expenses: { type: Number, required: true },
    assets: { type: Number, required: true },
    liabilities: { type: Number, required: true }
}, { collection: 'finance' }); 

const Application = mongoose.model('Application', applicationSchema);
export default Application;
